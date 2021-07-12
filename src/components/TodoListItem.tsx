interface TodoListItemProps {
  todo: Todo["todo"];
  id: Todo["id"];
  handleDelete: handleDelete;
}

const TodoListItem = ({ todo, id, handleDelete }: TodoListItemProps) => {
  return (
    <li>
      {todo}
      <button onClick={() => handleDelete(id)}>delete</button>
    </li>
  );
};

export default TodoListItem;
