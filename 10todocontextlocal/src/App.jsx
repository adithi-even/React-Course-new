import { useEffect, useState } from 'react'
import { TodoProvider} from './Contexts'
import './App.css'

function App() {
  const [todos , setTodos] = useState([]) //here the todos is a array and has many values , and we have to find out which is that one todo whose id is matching the id so that we can update the value of todo  in updatedTodo the conndition which we wrote is the  [prevTodo.id === id ? todo: prevTodo ] in updatedTOdo
  
  
  const addTodo = (todo) =>{ //this todo and 6th line todos are different : todos = its a state variable which stores all the todo items user have given . and todo :it is the where we get it from the "form" inside the return of jsx 
    setTodos((prev) =>[{id: Date.now(), ...todo}, ...prev]) //if we setTodos then all the previous value gets deleted and it will only have todo in the    
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) =>prev.map((prevTodo) => (prevTodo.id === id ? todo: prevTodo ))) //so here since we have added the map which is a loop so prevTodo is the single element in the array , the single element is an abject and that consists of an id we are talking about this array-object "" todos:[{id : 1,todo: "Todo msg",completed: false},{another todo object if the user gives the input}] "" the prevTodo.id means {id : 1,todo: "Todo msg",completed: false}.id 

    // prev.map((eachVal) => {
    //   if (eachVal.id === id) {
    //     todo
    //   }else{
    //    prevTodo
    //   }
    // })


  }//here prevTodo is individual todo and callback and for every individual todo we are gonna take the updated id i.e., the inside the conditional statement id and match them 

  const deletedTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id  !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo))
  }
//local storage from here to 
  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])
//here ends local storage 
  return (
    <TodoProvider value = {{todos , addTodo, updatedTodo, deletedTodo, toggleCompleted  }}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  {/* Todo form goes here */} 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App


