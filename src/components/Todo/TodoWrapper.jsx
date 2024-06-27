import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../stores/action";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoEdit from "./TodoEdit";

const TodoWrapper = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const createTodo = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <>
      <div className="text-center flex flex-col gap-7 max-w-md my-0 mx-auto">
        <TodoForm createTodo={createTodo} />
        {todos.map((todo, index) => {
          return todo.isEditing ? (
            <TodoEdit key={index} task={todo} />
          ) : (
            <TodoList task={todo} key={index} />
          );
        })}
      </div>
    </>
  );
};

export default TodoWrapper;
