import React from 'react'

import { useState } from 'react'

export default function Counter() {

  const [count , setCount ] = useState(10)   
  function addNumber () {
       setCount((prevCount)=>{return prevCount+1})
  } 
  
  function minusNumber () {
    setCount(count - 10)
  }
  
  

  return (

    <div>
        <span>{count}</span>
        <button onClick={addNumber}>+</button>
      <button onClick={minusNumber}>-</button>
    </div>
  )
}
