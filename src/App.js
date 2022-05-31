import Header from "./components/Header";
import classes from './App.module.css'
import InputForm from "./components/InputForm";
import { useState } from "react";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

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
        <Filter />
      </div>
      <TaskList setTaskList={setTaskList} taskList={taskList} />
    </div>
  );
}

export default App;
