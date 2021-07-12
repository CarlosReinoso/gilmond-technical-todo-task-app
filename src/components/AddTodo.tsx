import { Button, Modal, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modalBackdrop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  modalContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    height: "60%",
    margin: theme.spacing(2),
    background: "white",
    border: "2px solid white",
    borderRadius: 5,
    padding: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      width: 360,
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
  },
}));

interface AddTodoProps {
  isModal: () => void;
  addTodo: addTodo;
}

const AddTodo = ({ isModal, addTodo }: AddTodoProps) => {
  const classes = useStyles();

  const [currentTodo, setCurrentTodo] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentTodo.length === 0 || currentTodo.trim() === "") {
      setInputError("Input is empty. Please enter a todo");
    } else {
      addTodo(currentTodo);
      isModal();
      setInputError("");
    }
  };

  return (
    <div onClick={isModal} className={classes.modalBackdrop}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={classes.modalContent}
      >
        <Typography variant={"h3"}>Add Your Todo</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setCurrentTodo(e.target.value)}
            type="text"
            name="todo"
            placeholder="What do you have todo?"
            value={currentTodo}
            id="filled-basic"
            label="Add Todo"
            variant="outlined"
            helperText={inputError}
            error={inputError ? true : false}
          />
          <Button
            variant="outlined"
            size="large"
            color="primary"
            type="submit"
          >
            Add Todo 
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
