export default function Button({children, onClick, type="button"}) {
    return ( //atomo 
        <button type="button" onClick={onClick}> 
            {children} 
        </button>   
    );
}