import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  handleDelete: handleDelete;
  handleEdit: handleEdit
  activeTodo: Todo
}

const TodoList = ({ todos, handleDelete, handleEdit, activeTodo }: TodoListProps) => {
  return (
    <ul>
      {todos.length > 0
        ? todos.map((item) => (
            <TodoListItem
              todo={item.todo}
              id={item.id}
              key={item.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              activeTodo={activeTodo}
            />
          ))
        : null}
    </ul>
  );
};

export default TodoList;
