import React, { Component } from 'react'

export default class Count1 extends Component {
  
    componentDidUpdate (prevProp , prevState) {
        console.log("Component is Updating ")
    }
    
    componentWillUnmount () {
        console.log("Compnent 1 is removed")
    }
    
    render() {
    return (
      <div>
      <h1>{this.props.number}</h1>  
      </div>
    )
  }
}
