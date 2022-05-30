import { useState } from "react";

const TaskItem = ({ task, taskList, setTaskList }) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const completeHandler = () => {
    setIsCompleted(!isCompleted);
  };
  const deleteHandler = () => {
      console.log(task.id);
      setTaskList(taskList.filter(el => el.id !== task.id))
  }
  return (
    <li>
      {task.taskName}
      <button>Edit</button>
      <button onClick={completeHandler}>Completed</button>
      <button onClick={deleteHandler}>Delete</button>
    </li>
  )
};
export default TaskItem;
