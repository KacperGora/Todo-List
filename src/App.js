import Header from "./components/Header";
import "./App.css";
import InputForm from "./components/InputForm";
import { useState } from "react";

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
    </div>
  );
}

export default App;
