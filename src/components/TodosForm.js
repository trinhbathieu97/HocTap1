import React,{useState} from 'react'
import { addTodos } from '../Store/reducer/todosSilece'
import { useDispatch } from 'react-redux'

const TodosForm = () => {

    const [todos,setTodos] = useState('')

    const NhapvaoInput = event =>{
        setTodos(event.target.value)
        
    }
 
    const Dispatch = useDispatch()

    const ADDtodos = event =>{
        event.preventDefault()
       Dispatch(addTodos(todos))
        setTodos('')
    }

    return (
        <div onSubmit = {ADDtodos}>
            <form>
                <input type="text" value = {todos} onChange={NhapvaoInput} required/>
                <input type="submit" value='ADD' />
            </form>
            
        </div>
    )
}

export default TodosForm
