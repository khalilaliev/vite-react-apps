import { useState } from "react";

const TodoForm = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);

    setValue("");
  };

  return (
    <form className=" flex justify-center gap-5" onSubmit={handleSubmit}>
      <input
        className="input"
        value={value}
        placeholder="Add todo"
        onChange={handleChange}
      />
      <button type="submit" className="btn" onChange={handleChange}>
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
