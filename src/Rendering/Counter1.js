import React from 'react'

export default function Counter1(props) {
  return (
    <div>
        <span>{props.count}</span>
      <button onClick={props.handleState}>Add</button>
    </div>
  )
}