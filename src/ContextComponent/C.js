import React from 'react'
import { fName , LName } from '../App'
import { useContext } from 'react'
export default function C() {
  const context = useContext(fName)
  const context2 = useContext(LName) 
  return (
    <div>
      <h1>I am {context}{context2}</h1>
    </div>
  )
}
/*
<fName.Consumer>
        {(value)=>{return (<LName.Consumer>{
            (hs) =>{
                return <h1>I am {value} {hs}</h1>
            }}</LName.Consumer>)}}
      </fName.Consumer>

      */