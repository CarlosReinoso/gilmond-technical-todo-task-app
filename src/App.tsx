import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodosList/TodosList";
import AddTodo from "./components/AddTodo/AddTodo";
import { v4 as uuidv4 } from "uuid";

const initialTodos: Array<Todo> = [
  {
    id: uuidv4(),
    todo: "walk",
    isComplete: false,
  },
  {
    id: uuidv4(),
    todo: "talk",
    isComplete: false,
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  const addTodo: addTodo = (newTodo) => {
    setTodos([...todos, { id: uuidv4(), todo: newTodo, isComplete: false }]);
  };

  const [modalVisibility, setModalVisibility] = useState(false);
  const toggleAddTodoModal = (): void => setModalVisibility(!modalVisibility);

  return (
    <div>
      <h1>Todos</h1>
      <h2>Your Todo Will Be Added Here</h2>
      <button onClick={toggleAddTodoModal}>Add Todo</button>
      <ul>
        {todos.length > 0
          ? todos.map((item) => <li key={item.id}>{item.todo}</li>)
          : null}
      </ul>
      <TodoList />
      {modalVisibility && (
        <AddTodo isModal={toggleAddTodoModal} addTodo={addTodo} />
      )}
    </div>
  );
};

export default App;
