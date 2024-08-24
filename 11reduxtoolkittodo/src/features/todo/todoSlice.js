import {createSlice,nanoid} from '@reduxjs/toolkit'  //nanoid generates the unique id thats it is used to give id's to tthe individual todos

const initialState = {  //its the initial state of the store , i.e., how the store will look by default it's better to keep the store as object because teh object can store multiple things 
    todos :[{id:1, text: "Hello Wordl"}]
}
//so here we have to Stick with the predefined structure (name, initialState, reducers) when using createSlice.
//or else the code will not work and it'll break

export const todoSlice = createSlice({ //so slice is a almost a big version of reducers and reducers are just the functionalities  
    //gpt version//createSlice automatically generates a reducer function for you. This function is responsible for updating the state in response to actions (addTodo and removeTodo in your case).
    name: 'todo',
    initialState, //if we want we can write the value of the initialState here by making it key:value pairs, but if we keep it in the different variable it will be more organized
    reducers: { //this has properties and functions
        addTodo: () =>{ //this is the property //and here we are writing the definition inside of the (state,action) we have access for this, all the time  and the state id the present state of the initialState's status/value
            const todo = {
                id:nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        } ,
        removeTodo : (state ,action) => {//this is also a property
            state.todos = state.todos.filter((todos) =>todos.id !== action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions//we have to export this addTodo,removeTodo coz through this only we can update the state so this functionality we can use as individually  , so from this actions we can access addTodo,removeTodo functionalities,the reason we have exported the functionality(addTodo,removeTodo) is coz this we can use this in conponents

//and now we are going to store 

export default todoSlice.reducer



