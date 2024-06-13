import Title from "../components/Title/Title";
import TodoWrapper from "../components/Todo/TodoWrapper";

const Todo = () => {
  return (
    <>
      <Title title="Todo" />
      <div className=" text-center flex flex-col gap-7 w-1/3 my-0 mx-auto">
        <TodoWrapper />
      </div>
    </>
  );
};

export default Todo;
