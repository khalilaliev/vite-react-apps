import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoList = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="p-6 m-0 border border-gray-500 border-opacity-50 rounded-3xl items-center flex justify-between gap-6">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`text-2xl ${
          task.isCompleted ? "line-through text-green-500" : ""
        }`}
      >
        {task.task}
      </p>
      <div className="flex justify-center items-center gap-3">
        <FaRegEdit
          onClick={() => {
            editTodo(task.id);
          }}
          className="cursor-pointer text-3xl"
        />
        <FaRegTrashCan
          onClick={() => {
            deleteTodo(task.id);
          }}
          className="cursor-pointer text-3xl"
        />
      </div>
    </div>
  );
};

export default TodoList;
