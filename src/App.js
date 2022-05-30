import Header from "./components/Header";
import "./App.css";
import InputForm from "./components/InputForm";
import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
      <Header />
      <InputForm
        taskList={taskList}
        setTaskList={setTaskList}
        setNewTask={setNewTask}
        newTask={newTask}
      />
      <TaskList setTaskList={setTaskList} taskList={taskList} />
    </div>
  );
}

export default App;
