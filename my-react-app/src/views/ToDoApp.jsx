import "../styles/App.css";
import Input from "../components/Input/Index";
import Button from "../components/Button";
import TaskList from "../components/TaskList";

export default function ToDoApp() {
    return (
        <div className="container">
            <h1>LISTA DE TAREAS DE MARCO</h1>

            <div className="add-task">
                <Input placeholder="Nueva Tarea..." /> 
                <Button>ADD</Button> 
            </div> 

            <TaskList />
        </div>
    );
}
