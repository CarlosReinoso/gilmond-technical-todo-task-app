import React, { useState } from "react";

interface AddTodoProps {
  isModal: () => void;
  addTodo: addTodo;
  activeTodo: Todo;
  isEdit: boolean;
}

const AddTodo = ({ isModal, addTodo, isEdit, activeTodo }: AddTodoProps) => {
  // const [activeTodo, setActiveTodo] = useState()
  const [test, setTest] = useState({});
  const [currentTodo, setCurrentTodo] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit) {
      isModal();
      handleEdit(id, currentTodo);
      isEdit = false;
    } else {
      if (currentTodo.length === 0 || currentTodo.trim() === "") {
        setError("Input is empty. Please enter a todo");
      } else {
        addTodo(currentTodo);
        isModal();
        setError("");
      }
    }
  };

  return (
    <div>
      <h4>Add Your Task</h4>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setCurrentTodo(e.target.value)}
          type="text"
          name="todo"
          placeholder="What do you have todo?"
          value={isEdit ? "test value" : currentTodo}
        />
        {error && <p>{error}</p>}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
