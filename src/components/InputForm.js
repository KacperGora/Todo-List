import React from "react";
const InputForm = ({ setNewTask, newTask, taskList, setTaskList }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    setTaskList((prevState) => [
      ...prevState,
      { taskName: newTask, id: Math.random(), isCompleted: false },
    ]);
    setNewTask("");
  };

  const changeHandler = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        autoFocus
        placeholder="Enter next task to do..."
        onChange={changeHandler}
        value={newTask}
      ></input>
      <button>Add new task</button>
    </form>
  );
};
export default InputForm;
