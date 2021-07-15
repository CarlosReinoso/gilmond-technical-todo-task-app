import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import logo from './assets/logo.svg';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';
import { RootState, AppDispatch } from './redux/store';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    width: 190,
    margin: 50,
    height: 50,
  },
  addButton: {
    position: 'fixed',
    bottom: 24,
    right: 24,
  },
}));

const initialTodos: Array<Todo> = [];

const App: React.FC = () => {
  const classes = useStyles();

  // const [todos, setTodos] = useState<Array<Todo>>(initialTodos);
  const todos = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()
  console.log('todos', todos)

  const [modalVisibility, setModalVisibility] = useState(false);

  // const addTodo: addTodo = (newTodo) => {
  //   setTodos([...todos, { id: uuidv4(), todo: newTodo, isComplete: false }]);
  // };

  const toggleAddTodoModal = (): void => setModalVisibility(!modalVisibility);

  // const handleDelete = (todoId: Todo['id']): void => setTodos(todos.filter((item) => item.id !== todoId));

  return (
    <>
      <div className={classes.appContainer}>
        <h1>Todos</h1>
        <img src={logo} alt="gilmnd-logo" className={classes.img} />
        {todos.length === 0 && <h4>Your Todo Will Be Added Here</h4>}
        {/* <TodoList todos={todos} handleDelete={handleDelete} /> */}
        <TodoList todos={todos} />
        <Fab
          onClick={toggleAddTodoModal}
          className={classes.addButton}
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
        {modalVisibility && (
          <Fade in={modalVisibility}>
            <Paper>
              <AddTodoModal isModal={toggleAddTodoModal} addTodo={addTodo} />
            </Paper>
          </Fade>
        )}
      </div>
    </>
  );
};

export default App;
