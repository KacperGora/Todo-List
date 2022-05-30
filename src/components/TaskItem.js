const TaskItem = ({ task, taskList, setTaskList }) => {
  const completeHandler = () => {
    setTaskList(
      taskList.map((el) => {
        if (el.id === task.id) {
          return { ...task, isCompleted: !el.isCompleted };
        } else return el;
      })
    );
  };
  const deleteHandler = () => {
    setTaskList(taskList.filter((el) => el.id !== task.id));
  };
  return (
    <li>
      {task.taskName}
      <button>Edit</button>
      <button onClick={completeHandler}>Completed</button>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};
export default TaskItem;
