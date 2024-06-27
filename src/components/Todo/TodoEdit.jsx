import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../../stores/action";

const TodoEdit = ({ task }) => {
  const [value, setValue] = useState(task.task || "");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo(task.id, value));
    setValue("");
  };

  return (
    <form className="flex justify-center gap-5" onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
        placeholder="Edit task"
        onChange={handleChange}
      />
      <button type="submit" className="btn">
        Edit task
      </button>
    </form>
  );
};

export default TodoEdit;
