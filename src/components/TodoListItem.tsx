interface TodoListItemProps {
  todo: Todo["todo"];
  id: Todo["id"];
  handleDelete: handleDelete;
  handleEdit: handleEdit;
  activeTodo: Todo
}

const TodoListItem = ({ todo, id, handleDelete, handleEdit, activeTodo }: TodoListItemProps) => {
  return (
    <li>
      {todo}
      <button onClick={() => handleEdit(id, editedTodo)}>edit</button>
      <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  );
};

export default TodoListItem;
