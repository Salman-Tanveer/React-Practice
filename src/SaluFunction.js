import React from 'react'
import PropTypes from 'prop-types'
export default function SaluFunction(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.fName}</h3>
      <h3>{props.cell}</h3>  
    </div>
  )  

}
SaluFunction.propTypes = {
    name : PropTypes.string ,
    cell : PropTypes.number
}

SaluFunction.defaultProps = {
    cell : 21
}
