import { MdDelete, MdEdit } from "react-icons/md"
import EditForm from "./Editform"

function Todo({todo,deleteTodo,toggleCompleted,toggleisEditing,editTodo}) {
    return (
    todo.isEditing ? <EditForm todo={todo} editTodo={editTodo}/>:(
    <div className={`todo ${todo.isCompleted ? 'completed':''} `} >
        <p onClick={()=>{toggleCompleted(todo.id)}}>{todo.content}</p>
        <div>
            <MdEdit onClick={()=>{toggleisEditing(todo.id)}} style={{cursor:'pointer'}}/>
            <MdDelete onClick={() => {deleteTodo(todo.id)}} style={{cursor:'pointer',marginLeft:'5px'}}/>
        </div>
    </div>))
}
export default Todo