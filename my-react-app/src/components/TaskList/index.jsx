import TaskItem from "../TaskItem";

const demoTask = [ 
    {id: 1, text:"Tarea N" ,completed: false},
    {id: 2, text:"Tarea Nº1" ,completed: false},
    {id: 3, text:"Tarea Nº2 completada" ,completed: true},
    {id: 4, text:"Tarea K" ,completed: false},
    {id: 5, text:"Tarea 2" ,completed: false},
    {id: 6, text:"Tarea 1 completada" ,completed: true},
]

export default function TaskList () { 
    return(
        <ul className="task-list">
            {demoTask.map(t => (
                <TaskItem key={t.id} text={t.text} completed={t.completed} />
            ))}
        </ul>
    );
}