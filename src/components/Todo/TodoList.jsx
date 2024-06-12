import { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    const newTodo = [todo, ...todos];
    setTodos(newTodo);

    console.log(todo, ...todos);
  };

  return (
    <>
      <TodoForm onSubmit={createTodo} />
    </>
  );
};

export default TodoList;
