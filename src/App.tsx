import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import logo from "./assets/logo.svg";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Fade from "@material-ui/core/Fade";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  img: {
    width: 190,
    margin: 50,
    height: 50,
  },
  addButton: {
    position: "fixed",
    bottom: 24,
    right: 24,
  },
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
    width: "100%",
    height: "60%",
    margin: theme.spacing(2),
    background: "white",
    border: "2px solid white",
    borderRadius: 5,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: 360,
    },
  },
}));

const initialTodos: Array<Todo> = [];

const App: React.FC = () => {
  const classes = useStyles();

  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const addTodo: addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), todo: newTodo, isComplete: false }]);
  };

  const [modalVisibility, setModalVisibility] = useState(false);
  const toggleAddTodoModal = (): void => setModalVisibility(!modalVisibility);

  const handleDelete = (todoId: Todo["id"]): void =>
    setTodos(todos.filter((item) => item.id !== todoId));

  return (
    <>
      {/* <div className={classes.app}> */}
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <div className={classes.appContainer}>
            <h1>Todos</h1>
            <img src={logo} alt="gilmnd-logo" className={classes.img} />
            {todos.length === 0 && <h4>Your Todo Will Be Added Here</h4>}
            <Fab
              onClick={toggleAddTodoModal}
              className={classes.addButton}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
            <TodoList todos={todos} handleDelete={handleDelete} />
            {modalVisibility && (
              <Fade in={modalVisibility}>
                <Paper>
                  <AddTodo isModal={toggleAddTodoModal} addTodo={addTodo} />
                </Paper>
              </Fade>
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default App;
