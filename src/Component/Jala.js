import React, { useState } from 'react'
import HOC from './HOC'
 function Jala(props) {
   
    return (
    <div>
      <h1>Jala has placed {props.price}$</h1>
      <button onClick={props.IncreasePrice}>Increase Price</button>
    </div>
  )
}

export default HOC (Jala)