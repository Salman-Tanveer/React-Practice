import React, { Component } from 'react'
import Count1 from './Count1'
export default class ClassComponent extends Component {
  
    constructor(){
     super()
     this.state = {
        count: 0
     }
    }
    
    componentDidMount () {
        console.log("component created first time")
    }
    
    
    
    HS() {
     console.log(this)   
     this.setState({count:this.state.count + 1})       
    } 
    
    SS = ()=>{
        console.log(this)
    }
    
    render() {
    return (
      <div>
        <Count1 number={this.state.count}/>
        <button onClick={this.HS.bind(this)}>Click Me</button>        
      </div>
    )
  }
}
