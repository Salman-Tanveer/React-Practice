import React from 'react'
import { useState } from 'react'

export default function Wrapper(props) {
 const [abc , setABC] = useState(0)

 function handleState(){
    setABC(abc+1)
 }
    return (
    <div>
      {props.render(abc , handleState)}
    </div>
  )
}
