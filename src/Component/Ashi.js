import React, { useState } from 'react'
export default function Ashi() {
   const [price , setPrice] = useState(10) 


  function IncreasePrice(){
           setPrice(price + 5)
  }
  
    return (
    <div>
      <h1>Ashi has placed {price}$</h1>
      <button onClick={IncreasePrice}>Increase Price</button>
    </div>
  )
}
