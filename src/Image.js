import React from 'react'
import grayScale from './Component/grayScale'
import {Image} from 'react-bootstrap'

const GrayScaleImage = grayScale(Image);

const Images = () => {
    return (
        <div>
            <GrayScaleImage src="path/to/image.jpg" alt="Image" />
        </div>
    )
}

export default Image
