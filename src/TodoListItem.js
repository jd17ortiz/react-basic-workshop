import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

const TodoListItem = ({ todo, index, deleteTodo, editTodo }) => {
  const [editState, setEditState] = useState(false);

  const [inputValue, setInputValue] = useState(todo);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(inputValue, index);
    setEditState(false);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <ListItem dense button key={index}>
      <Checkbox tabIndex={-1} disableRipple />
      {editState ? (
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            placeholder={todo}
            margin="normal"
            value={inputValue}
            onChange={handleChange}
          />
        </form>
      ) : (
        <ListItemText primary={todo} />
      )}
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => {
            deleteTodo(index);
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          aria-label="Edit"
          onClick={() => {
            setEditState(true);
          }}
        >
          <EditIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
