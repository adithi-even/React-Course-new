import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch() //creating dispatch//here we are using the useDispatch 
    
    const addTodoHandler = (e) => {
      e.preventDefault() 
      dispatch(addTodo(input)) //creating dispatch//what does dispatch do? DISPATCH USES REDUCERS TO CHANGE VALUES(OR TO ADD VALUE) INSIDE THE STORE 
      setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input type="text"
        className='bg-gray-800 rounded border border-gray-700 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        placeholder='"enter a todo..' />
    </form>
  )
}

export default AddTodo