import TodoListItem from "./TodoListItem";

interface TodoListProps {
  todos: Array<Todo>;
  handleDelete: handleDelete;

}

const TodoList = ({ todos, handleDelete }: TodoListProps) => {
  return (
    <ul>
      {todos.length > 0
        ? todos.map((item) => (
            <TodoListItem
              todo={item.todo}
              id={item.id}
              key={item.id}
              handleDelete={handleDelete}
              
            />
          ))
        : null}
    </ul>
  );
};

export default TodoList;
