import {createSlice,nanoid} from '@reduxjs/toolkit'  //nanoid generates the unique id thats it 

const initialState = {
    todos:[{id:1, text: "Hello Wordl"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: () =>{
            const todo = {
                id:nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        } ,
        removeTodo : (state ,action) => {
            state.todos = state.todos.filter((todos) =>todos.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer