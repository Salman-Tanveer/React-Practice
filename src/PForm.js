import React from 'react'
import { useState } from 'react'

export default function PForm() {
   const [formData , setFormData ] = useState("")


    function HandleForm(event){
          setFormData(event.target.value)
    }
  
    return (
    <div>
      
      <textarea placeholder='Enter Text Here' type="text" onChange={HandleForm} name='message' value={formData.message}></textarea>
       <p>{formData}</p>
     </div>
  )
}
