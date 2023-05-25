import React from 'react'
export default function grayScale(PassComponent) {
  
   const grayScale = (WrappedComponent) =>{
       return(props) => {
        const style = {
            filter: 'grayscale(100%)'
        }}
   }   
  
  
    return <WrappedComponent {...props} style={style}/>
}

/*
import React from 'react';
import { Image } from 'react-bootstrap';
import grayScale from './grayScale';

const GrayScaleImage = grayScale(Image);

const MyComponent = () => {
  return (
    <div>
      <GrayScaleImage src="path/to/image.jpg" alt="Image" />
    </div>
  );
};

export default MyComponent;
*/