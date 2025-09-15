import { useState } from "react";
import "../styles/App.css";
import Input from "../components/Input/Index";
import Button from "../components/Button";
import TaskList from "../components/TaskList";

export default function ToDoApp() {
    //estado de la lista de tareas
    const [tasks, setTasks] = useState([]);

    //estado del input
    const [newTask, setNewTask] = useState("");

    //handler del input
    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function handleAddTask(){
        if(newTask.trim() === "") return; //evitar agregar tareas vacías, el trim omite los espacios

        const task={
            id: Date.now(), //guarda el id de manera unica en milisengundos
            text: newTask,
            completed: false
        }

        setTasks([task, ...tasks]); //agrega la tarea al array primero el nuevo elemento y luego las tareas anteriores
        setNewTask(""); //limpia el input
    }

    function handleDeleteTask(id){
        setTasks(tasks.filter(task => task.id !== id)); //filtra las tareas y elimina la que coincide con el id, crea un nuevo array
    }

    function handleToggleTask(id){
        setTasks(
            tasks.map(task =>
                task.id === id ? {...task, completed: !task.completed} : task //busca la tarea por id y cambia su estado completed al contrario (true/false)
            )
        )

        
    }

    return (
        <div className="container">
            <h1>LISTA DE TAREAS DE MARCO</h1>

            <div className="add-task">
                <Input placeholder="Nueva Tarea..." value={newTask} onChange={handleInputChange}/> 
                <Button onClick={handleAddTask}>ADD</Button> 
            </div> 

            <TaskList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} />
        </div>
    );
}
