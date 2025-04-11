import { useState } from "react"


function EditForm({todo,editTodo}){
    const [content, setContent]=useState(todo.content);
     return (<form className="create-form" onSubmit={(e)=>{
         e.preventDefault()
         editTodo(todo.id,content)
     }}>
         <input type="text" placeholder="输入待办事项"
         value={content} onChange={(e) => {setContent(e.target.value)}}/>
         <button type='submit'>完成</button>
     </form>)
}
export default EditForm