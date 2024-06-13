import { useState } from "react";

const TodoEdit = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);

    setValue("");
  };

  return (
    <form className=" flex justify-center gap-5" onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
        placeholder="Edit task"
        onChange={handleChange}
      />
      <button type="submit" className="btn" onChange={handleChange}>
        Edit task
      </button>
    </form>
  );
};

export default TodoEdit;
