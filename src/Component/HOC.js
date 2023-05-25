import React, { useState } from 'react'

export default function HOC(OrignalComponent) {
  

    const NewComponent = () => {
    const [abc , setAbc] = useState(10)          

    function IncreasePrice() {
      setAbc(abc + 5)
    }
   
    return <OrignalComponent IncreasePrice={IncreasePrice} price={abc}/>
    
}
    return NewComponent
  
}
