import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { todosSelector } from '../Store'
import TodosForm from './TodosForm'
import { ThaydoiClasss,XoaTodo, getTodos} from '../Store/reducer/todosSilece'

const Todos = () => {
   const todos = useSelector(todosSelector)
   const dispatch = useDispatch()

   const ThaydoiClass = id =>{
      dispatch(ThaydoiClasss(id))
   }
   const deleteTodo = id =>{
      dispatch(XoaTodo(id))
   }
//     de gui di ma json placeholder
 useEffect(()=>{
    dispatch(getTodos())
 },[dispatch])

    return (
        <div className='todo-list'>
            <TodosForm />
            <ul>
                {todos.map(todo => <li key={todo.id} className={todo.completed ? 'completed' : ''}>{todo.title}
                <input type="checkbox" checked ={todo.completed} onChange = {ThaydoiClass.bind(this, todo.id)} />
                <button onClick={deleteTodo.bind(this,todo.id)}>Delete</button>
                </li>)}
            </ul>
        </div>
    )
}

export default Todos
