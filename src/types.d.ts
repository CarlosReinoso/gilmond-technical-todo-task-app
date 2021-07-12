type Todo = {
  id: string;
  todo: string;
  isComplete: bool;
};

type addTodo = (newTodo: string) => void;

type handleDelete = (todoId: Todo["id"]) => void

type handleEdit = (todoId: Todo["id"], editedTodo: string) => void

