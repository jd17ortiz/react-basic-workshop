import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TodoForm = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    saveTodo(inputValue);
    setInputValue("");
  };

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={handleChange}
        value={inputValue}
      />
    </form>
  );
};

export default TodoForm;
