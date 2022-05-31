import Header from "./components/Header";
import classes from "./App.module.css";
import InputForm from "./components/InputForm";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTasks(taskList.filter((el) => el.isCompleted === true));
        break;
      case "uncompleted":
        setFilteredTasks(taskList.filter((el) => el.isCompleted === false));
        break;
      default:
        setFilteredTasks(taskList);
        break;
    }
  };
  useEffect(() => {
  filterHandler()
  }, [taskList, status]);
  return (
    <div className="App">
      <Header />
      <div className={classes.taskBar}>
        <InputForm
          taskList={taskList}
          setTaskList={setTaskList}
          setNewTask={setNewTask}
          newTask={newTask}
        />
        <Filter status={status} setStatus={setStatus} />
      </div>
      <TaskList setTaskList={setTaskList} filteredTasks={filteredTasks} />
    </div>
  );
}

export default App;
