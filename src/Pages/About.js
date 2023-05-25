import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import Nav from '../Nav'
export default function About() {

  let navigate = useNavigate()

  
    return (
    <div>
        <Nav />
      <h1>About Page</h1>
      <button onClick={()=>{navigate("/contact")}}>Go to Profile</button>
    </div>
  )
}
