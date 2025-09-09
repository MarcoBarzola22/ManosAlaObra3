import { useState } from "react";
import "../styles/App.css";
import Input from "../components/Input/Index";
import Button from "../components/Button";
import TaskList from "../components/TaskList";

export default function ToDoApp() {
    //estado de la lista de tareas
    const [tasks, setTasks] = useState([]);

    //estado del input
    const [newTask, setNeTask] = useState("");

    function handleInputChange(evente){
        setNewTask(evente.target.value);
    }

    return (
        <div className="container">
            <h1>LISTA DE TAREAS DE MARCO</h1>

            <div className="add-task">
                <Input placeholder="Nueva Tarea..." value={newTask} onChange={handleInputChange}/> 
                <Button>ADD</Button> 
            </div> 

            <TaskList task={tasks}/>
        </div>
    );
}
