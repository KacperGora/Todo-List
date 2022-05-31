import React from "react";
import { useState } from "react";
const TaskItem = ({ task, taskList, setTaskList }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState("");
  const editingHandler = () => {
    setIsEditing(true);
  };
  const completeHandler = () => {
    setTaskList(
      taskList.map((el) => {
        if (el.id === task.id) {
          return { ...task, isCompleted: !el.isCompleted };
        }
        return el;
      })
    );
  };
  const deleteHandler = () => {
    setTaskList(taskList.filter((el) => el.id !== task.id));
  };
  const updatedTaskHandler = (e) => {
    setUpdatedTask(e.target.value);
  };
  const editingTaskHandler = (e) => {
    setTaskList(
      taskList.map((el) => {
        if (el.id === task.id) {
          return { ...task, taskName: updatedTask };
        }
        return el;
      })
    );
    setIsEditing(false);
  };

  return (
    <li>
      {task.taskName}

      {isEditing && (
        <div>
          <input autoFocus onChange={updatedTaskHandler} />
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          <button onClick={editingTaskHandler}>Confirm</button>
        </div>
      )}
      {!isEditing && (
        <div>
          <button onClick={editingHandler}>Edit</button>
          <button onClick={completeHandler}>Completed</button>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      )}
    </li>
  );
};
export default TaskItem;
