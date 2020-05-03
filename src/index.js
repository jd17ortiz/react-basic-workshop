import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./styles.css";

const App = () => {
  const initialState = [];
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const todoList = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then(response => response.json());
      setTodos(todoList.map(todo => todo.title));
    }
    fetchData();
    // return cleanup function
  }, []);

  const handleSave = todoText => {
    const trimmedToDo = todoText.trim();

    if (trimmedToDo.length > 0) {
      setTodos([trimmedToDo, ...todos]);
    }
  };

  const handleEdit = (newTodoText, todoIndex) => {
    const newTodos = todos.map((todo, index) => {
      if (index === todoIndex) {
        todo = newTodoText;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = todoIndex => {
    // const newTodos = todos.splice(index, 1);
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoForm saveTodo={handleSave} />
      <TodoList todos={todos} deleteTodo={handleDelete} editTodo={handleEdit} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
