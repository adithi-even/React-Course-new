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
            } //so here the state in the parameter refers to the current state of the todo-items/items in app
            state.todos.push(todo) //this line means the current state of the todo (for now the current state is initial state since there is no data given from the user) is appended to the todos array in the line 4 .//The line state.todos.push(todo); adds a new todo item to the existing list of todos in the Redux state, effectively updating the state by appending the new task to the end of the todos array.//
        } ,
        removeTodo : (state ,action) => {//this is also a property
            state.todos = state.todos.filter((todos) =>todos.id !== action.payload)
        },
        // updateTodo : (state,action) => {
        //     state.todos = 
        // }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions//we have to export this addTodo,removeTodo coz through this only we can update the state so this functionality we can use as individually  , so from this actions we can access addTodo,removeTodo functionalities,the reason we have exported the functionality(addTodo,removeTodo) is coz this we can use this in components
//No, addTodo and removeTodo are not states. They are reducer functions or action handlers defined within the reducers object of the createSlice function.


//and now we are going to store ..

export default todoSlice.reducer



//In the context of Redux and Redux Toolkit, action.payload is a common way to pass data from an action to a reducer. Let’s break down what it means and how it's used.

//What is action.payload?
//action: In Redux, an action is an object that describes what happened. It usually has a type property that specifies the type of action (like 'ADD_TODO', 'REMOVE_TODO', etc.).
//payload: The payload property of an action is where you store the data that you want to send to the reducer. This data is usually passed to the action creator when the action is dispatched.

if(brain !== empty){
    keepCoding()
}else{
    drinkCoffee()
}


//INDIVIDUAL REDUCERS:SO here addTodo And removeTodo are the individual reducers and todoSlice.reducer is the whole reducer
//and since we update state with the help of individual reducers so we are also exporting the individual reducers


//Example:
// Suppose state.todos initially looks like this:

// javascript
// Copy code
// state = {
//     todos: [
//         { id: 1, text: "Buy groceries" },
//         { id: 2, text: "Clean the house" }
//     ]
// }
// After state.todos.push(todo); is executed, and todo is:

// javascript
// Copy code
// todo = { id: 3, text: "Learn Redux" }
// The state.todos array will now look like this:

// javascript
// Copy code
// state = {
//     todos: [
//         { id: 1, text: "Buy groceries" },
//         { id: 2, text: "Clean the house" },
//         { id: 3, text: "Learn Redux" } // New todo added to the array
//     ]
// }
// Summary:
// The line state.todos.push(todo); adds a new todo item to the existing list of todos in the Redux state, effectively updating the state by appending the new task to the end of the todos array.







