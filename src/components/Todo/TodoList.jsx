import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const TodoList = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className=" border rounded-2xl p-6 items-center flex justify-around gap-6">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`text-3xl ${
          task.isCompleted ? "line-through text-green-500" : ""
        }`}
      >
        {task.task}
      </p>
      <div className=" flex justify-center items-center gap-3">
        <FaRegEdit
          onClick={() => {
            editTodo(task.id);
          }}
          className=" text-3xl"
        />
        <FaRegTrashCan
          onClick={() => {
            deleteTodo(task.id);
          }}
          className=" text-3xl"
        />
      </div>
    </div>
  );
};

export default TodoList;
