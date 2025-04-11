import { useState } from "react"

function CreateForm({addTodo}) {
    const [content, setContent]=useState('');
    return (<form className="create-form" onSubmit={(e)=>{
        e.preventDefault()
        addTodo(content)
        setContent('')
    }}>
        <input type="text" placeholder="输入待办事项"
        value={content} onChange={(e) => {setContent(e.target.value)}}/>
        <button type='submit'>加入</button>
    </form>)
}

export default CreateForm