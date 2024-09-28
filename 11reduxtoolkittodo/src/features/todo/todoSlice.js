import {createSlice,nanoid} from '@reduxjs/toolkit'  //nanoid generates the unique id thats it 

const initialState = {
    todos:[{id:1, text: "Hello Wordl"}] //list of todo will be in future currently we have created an array which initially have only 1 todo after that it may be multiple  todos , so the name todos .
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: () =>{
            const todo = { //here its an individual todo 
                id:nanoid(),  //here instead of using the static id :1 , we useing the dynamic id
                text: action.payload
            }
            state.todos.push(todo)//this is the updated version of the spread operator and adding the updated count value as inteh the chat gpt version of images i have in my pc is the previous method of updating the state which we also has done similar work in the context API and now here we are using the different method , you can access the image in the react screenshot folder for the understanding purpose only and how it works and not to implement it in the actual code , when you are creating the project by using the @redux/toolkit and react-redux . 
        } ,
        removeTodo : (state ,action) => {
            state.todos = state.todos.filter((todos) =>todos.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer