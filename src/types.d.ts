type Todo = {
  id: string;
  todo: string;
  isComplete: bool;
};

type addTodo = (newTodo: string) => void;
