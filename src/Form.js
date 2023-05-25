import React from 'react'
import { useState } from 'react'

export default function Form() {

    const [formData , setFormData] = useState({})

    function DataHandler(event){
        setFormData((prevData)=>{return {
            ...prevData , [event.target.name]:event.target.value
           
        }})
        console.log(formData)
    }

  return (
    <div>
      <input onChange={DataHandler} placeholder='First Name' type='text' value={formData.firstName} name='FirstName'/>
      <input onChange={DataHandler} placeholder='email' type='email' value={formData.email} name='Email'/>
    </div>
  )
}

// {name: value}