import React from 'react';
import TodoListItem from './Todo';

interface TodoListProps {
  todos: Array<Todo>;
  handleDelete: handleDelete;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleDelete }: TodoListProps) => (
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

export default TodoList;
