import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        task: todo,
        isCompleted: false,
        isEditing: false,
      },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
      <TodoForm createTodo={createTodo} />
      {todos.map((todo, index) => {
        return todo.isEditing ? (
          <TodoEdit key={index} editTask={editTask} task={todo} />
        ) : (
          <TodoList
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
    </>
  );
};

export default TodoWrapper;
