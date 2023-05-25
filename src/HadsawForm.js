import React from 'react'
import { useState } from 'react'

export default function HadsawForm() {
    const [formData , setFormData] = useState({
        fName: "" ,
        LName: "" ,
        email: "" , 
        isAgree: true,
        experience: "" ,
        rating: "",
        message: "" 

    })   
  function HandleForm(event){
    const {name , value , type , checked} = event.target

    
    setFormData((prevData)=>{ return{
              ...prevData , [name]:type==="checkbox"?checked:value
            }})
            console.log(formData)
  }
    return (
    <div>
     <input placeholder='First Name' type="text" onChange={HandleForm} value={formData.fName} name='fName' />
     <input placeholder='Last Name' type="text" onChange={HandleForm} value={formData.LName} name='LName'/>
     <input placeholder='Email' type="email" onChange={HandleForm} value={formData.email} name='email'/>
     <textarea placeholder='Enter Message here' type="text" onChange={HandleForm} value={formData.message} name='message'></textarea>
     
     <select>
        <option value={1}>1</option><br/>
        <option value={2}>2</option><br/>
        <option value={3}>3</option><br/>
        <option value={4}>4</option><br/>
        <option value={5}>5</option><br/>
     </select>
     <br/>
     <input checked={formData.experience==="satisfied"} type="radio" name='experience' onChange={HandleForm} value={"satisfied"}/>
     <label>Satisfied</label><br/>
     <input  checked={formData.experience==="unsatisfied"} type="radio" name='experience' value={"unsatisfied"} onChange={HandleForm}/>
     <label>UnSatisfied</label><br/>
    
    
     <input type="checkbox" onChange={HandleForm} checked={formData.isAgree} name='isAgree'/>
           <label > I Agree for terms and conditions</label><br/>
    </div>
  )
}
// Form firstname , lastname , email , combobox rating 5-1 , textarea , radiobutton 2 , check box 