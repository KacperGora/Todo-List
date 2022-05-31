import TaskItem from "./TaskItem";

const TaskList = ({ filteredTasks, setTaskList }) => {
  return (
    <ul>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          setTaskList={setTaskList}
          filteredTasks={filteredTasks}
        />
      ))}
    </ul>
  );
};

export default TaskList;
