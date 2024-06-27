import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodo } from "../../stores/action";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";

const TodoList = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-6 m-0 border border-gray-500 border-opacity-50 rounded-3xl items-center flex justify-between gap-6">
      <p
        onClick={() => dispatch(toggleComplete(task.id))}
        className={`text-2xl ${
          task.isCompleted ? "line-through text-green-500" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex justify-center items-center gap-3">
        <FaRegEdit
          onClick={() => dispatch(editTodo(task.id))}
          className="cursor-pointer text-2xl"
        />
        <FaRegTrashAlt
          onClick={() => dispatch(deleteTodo(task.id))}
          className="cursor-pointer text-2xl"
        />
      </div>
    </div>
  );
};

export default TodoList;
