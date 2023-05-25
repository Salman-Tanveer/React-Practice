import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'
export default function Home() {

   const showHadsaw = true 
    return (
    <div>
        <Nav />
      <h1>Home Page</h1>
           {showHadsaw == true ? <p>Yes Hadsaw has shown</p>:<p>Private</p>}
    </div>
  )
}
