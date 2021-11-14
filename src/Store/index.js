
import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from './reducer/todosSilece'


 // tao store
 const store = configureStore({
     reducer:{
         TodoReducer,
     }
 })

//  //tao selector de xuat khau cho cac component moc cac gia tri
 export const todosSelector = state => state.TodoReducer.allTodo

 export default store