import {createContext , useContext} from 'react'

export const TodoContext = createContext({
    todos:[
        {
        id : 1,
        todo: "Todo msg",
        completed: false
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deletedTodo: (id) => {},
    toggleCompleted: (id) => {}

})  // creating a new context

export const useTodo = () =>{    //creating a function for useTodo method which will be later used .
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider    //its a provider used to wrap the components so its value can be accessed by any of the childern inside the top hierarchy parent.
//we are creating it as the variable so we dont need to add  " .Provider " for every parent component 