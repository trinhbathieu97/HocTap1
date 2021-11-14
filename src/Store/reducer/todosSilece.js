import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'
import axios from 'axios'


export const getTodos = createAsyncThunk('todos/abc',async() =>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return response.data
})
export const addTodos = createAsyncThunk('todos/addtodo',async title=>{
    const newTodo = {
        id: nanoid(),
        title,
        completed:false
    }
    await axios.post('https://jsonplaceholder.typicode.com/todos',newTodo)
    return newTodo
})

const todosSlice = createSlice({
    name:'todos',// ten action
    initialState:{   /// State khoi tao
        allTodo: []  /// gia tri cua State khoi tao
         
    
        
    },
    reducers:{
        // addTodos:{
        //     reducer(state,action){
        //         state.allTodo.unshift(action.payload)
        //     },
        //     prepare(title){
        //         return {
        //             payload:{
        //                 id:nanoid(),
        //                 title,
        //                 completed:false
        //             }
        //         }
        //     }
        // },
        ThaydoiClasss(state,action){
            const todoId = action.payload
            state.allTodo = state.allTodo.map(todo =>{
                if(todo.id === todoId) todo.completed =  !todo.completed
                return todo
            })
        },
        XoaTodo(state,action){
            const todoId = action.payload
            state.allTodo = state.allTodo.filter(todo => todo.id !== todoId)
              

        },
        // // todosFetched(state,action){
        // //     state.allTodo = action.payload
        // }
    },
        extraReducers :{
            [getTodos.pending]:(state,action) =>{
                console.log('cho backend')
            },
            [getTodos.fulfilled]:(state,action)=>{
                state.allTodo = action.payload
                console.log('thah cong')
            },
            [getTodos.rejected]:(state,action)=>{
                console.log('loi')
            },
            [addTodos.fulfilled]:(state,action)=>{
                state.allTodo.unshift(action.payload)
            }

        }
})

// export const getTodos = () =>{
//     const getTodosAsync = async dispatch =>{
//         try {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
//            dispatch(todosFetched(response.data))
//         } catch (error) {
//             console.log('sai')
//         }
//     }
//     return getTodosAsync
// }

// reducer co trach nhiem thay doi state
 const TodoReducer = todosSlice.reducer

 //tao selector de xuat khau cho cac component moc cac gia tri
 //TodoReducer la cua store  k phai cua reducer
 export const todosSelector = state => state.TodoReducer.allTodo

 export const {ThaydoiClasss, XoaTodo} = todosSlice.actions

 export default TodoReducer