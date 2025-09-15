export default function TaskItem({id, text, completed, onDelete , onToggle}) { 
    return (
         <li className={`task-item ${completed ? "completed" : ""}`}> 
            <input 
            type="checkbox" 
            checked={completed} 
            readOnly 
            onChange={() => onToggle(id)}
            />
            <span>{text}</span>
            <button 
            className="delete-btn" 
            aria-label="Eliminar"
            onClick={() => onDelete(id)}
            >🗑️</button>
        </li>
    );
}