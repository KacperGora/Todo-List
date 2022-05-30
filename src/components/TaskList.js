import TaskItem from "./TaskItem";

const TaskList = ({ taskList, setTaskList }) => {
  return (
    <ul>
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setTaskList={setTaskList}
          taskList={taskList}
        />
      ))}
    </ul>
  );
};

export default TaskList;
