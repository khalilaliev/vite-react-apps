import "./TodoForm.css";
import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 5000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Add a task"
        value={input}
        onChange={handleChange}
      />
      <button className="btn">Add todo</button>
    </form>
  );
};

export default TodoForm;
