import React, { useState } from 'react'
import HOC from './HOC'

 function Roshu(props) {
   
  return (
    <div>
      <h1>Roshu has placed {props.price}$</h1>
      <button onClick={props.IncreasePrice}>Increase Price</button>
    </div>
  )
}

export default HOC(Roshu)
//High Order Component - Money (Person) = Rich 