export default function TaskItem({text, completed = false}) { 
    return (
         <li className={`task-item ${completed ? "completed" : ""}`}> 
            <input type="checkbox" checked={completed} readOnly />
            <span>{text}</span>
            <button className="delete-btn" aria-label="Eliminar">🗑️</button>
        </li>
    );
}