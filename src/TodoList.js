import React, { useState } from "react";
import List from "@material-ui/core/List";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, deleteTodo, editTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </List>
  );
};

export default TodoList;
