export default function Input({ placeholder = "Nueva tarea...", value, onChange }){ 
    return (
        <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        /> 
    );
}
