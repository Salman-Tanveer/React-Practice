import React from 'react'
import { useState } from 'react'

export default function ToDoList(props) {
    const [ inputTask , AddTask] = useState("")    


function submitTask (event){
 AddTask(event.target.value)
}
    return (
    <div>

        <button onClick={submitTask}>Add Task</button>
        <input type='text' placeholder='Enter your task'></input>
         <p></p>        
    </div>
  )
    }
/*
}
const h1Array = props.task.map ((item) => {
    return <h1>{item}</h1>
})*/