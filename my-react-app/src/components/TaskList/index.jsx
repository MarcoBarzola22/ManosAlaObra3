import TaskItem from "../TaskItem";


export default function TaskList({ tasks, onDelete , onToggle}) { 

    if( tasks.length === 0){
        return <p>No hay tareas en la lista</p>
    }

  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem 
          key={task.id}
          id={task.id}
          text={task.text}
          completed={task.completed}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
