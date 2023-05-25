import React from 'react'
import { useState } from 'react'

export default function StudentForm() {
  
    const [formData , setFormData] = useState({
        fName: "" ,
        LName: "" ,
        email: "" ,
        password: "", 
        isAgree: true,
        employ: "" ,
        skills: ""
    })

  function HandlForm(event){
    
    const {name , value , type , checked} = event.target

    setFormData((prevData)=>{ return{
            ...prevData ,  
           [name]:type==="checkbox"?checked:value
        }})
        console.log(formData)
  }
   
   function handleSubmit(event){
    event.preventDefault()   
    console.log(formData)
   }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='First Name' type='text' onChange={HandlForm} value={formData.fName} name='fName'/> <br/>
        <input placeholder='Last Name'type='text' onChange={HandlForm} value={formData.LName} name='LName'/> <br/>
        <input placeholder='Email'type='email' onChange={HandlForm} value={formData.email} name='email'/> <br/>
        <input placeholder='Password'type='password' onChange={HandlForm} value={formData.password} name='password'/> <br/>
           <select name='skills' value={formData.skills} onChange={HandlForm} >
        <option value={"programming"}>Programming</option><br/>
        <option value={"web"}>Web Development</option>
        <option value={"seo"}>SEO</option>
        <option value={"hawal"}>Hawal</option>
           </select>
           <br/>
           <input checked={formData.employ==="employed"} type="radio" name='employ' onChange={HandlForm} value={"employed"}/>
           <label>Employeed</label><br/>
           <input checked={formData.employ==="unemployed"} type="radio" name='employ' onChange={HandlForm} value={"unemployeed"}/>
           <label>Unemployeed</label><br/>
           <input checked={formData.employ==="freelance"}type="radio"  name='employ' onChange={HandlForm} value={"freelance"}/>
           <label>Freelancer</label><br/>

           <input type="checkbox" onChange={HandlForm} checked={formData.isAgree} name='isAgree'/>
           <label > I Agree for terms and conditions</label><br></br>
           <button>Submit</button>          </form>           
              
    </div>
  )
}

//    const HadsawFunction = function (){}
// Form firstname , lastname , em
// todolist inputbox-task , button (addtask) , unoredered list show ail , combobox rating 5-1 , textarea , radiobutton 2 , check box 
// paper counter wala 
//task 2 