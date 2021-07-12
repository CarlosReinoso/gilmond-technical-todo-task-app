import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
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

  const handleDelete = (todoId: Todo["id"]): void =>
    setTodos(todos.filter((item) => item.id !== todoId));

  const [isEdit, setIsEdit] = useState(false);
  console.log("isEdit", isEdit);
  const [activeTodo, setActiveTodo] = useState<Todo>();
  const handleEdit = (todoId: Todo["id"], editedTodo: string): void => {
    console.log("todoId", todoId);
    setIsEdit(true);
    setModalVisibility(true);
    todos.map((item: Todo) =>
      item.id === todoId ? (item.todo = editedTodo) : item
    );
  };

  return (
    <div>
      <h1>Todos</h1>
      <h2>Your Todo Will Be Added Here</h2>
      <button onClick={toggleAddTodoModal}>Add Todo</button>

      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        activeTodo={activeTodo}
      />
      {modalVisibility && (
        <AddTodo
          isModal={toggleAddTodoModal}
          addTodo={addTodo}
          activeTodo={activeTodo}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

export default App;
