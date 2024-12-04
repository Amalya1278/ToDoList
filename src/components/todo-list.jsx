import React, { useState } from "react"
import { AddTodo } from "./todo-add"
import { List } from "./list"

export const TodoList = () => {
    const [todos, setTodos] = useState([
      { id: 101, text: "read a book", completed: false },
      { id: 102, text: "eat a burger", completed: true },
      { id: 103, text: "buy a flower", completed: false },
    ])
  
    const add = (text) => {
      const todo = {
        id: Date.now(),
        text,
        completed: false,
      }
      setTodos((prev) => [...prev, todo])
    }
  
    const deleteToDo = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
  
    const toggle = (id) => {
      setTodos((prev) =>
        prev.map((todo) =>{
         if(todo.id==id){
            return {...todo,completed:!todo.completed}
      }
      else{
        return todo
      }
    }
      
        )
      )
    }
  
    return (
      <div className="flex flex-col space-y-6 p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">TodoList</h1>
        <AddTodo onSave={add} />
        <List items={todos} onDelete={deleteToDo} onToggle={toggle} />
      </div>
    )
  }
  