import React from 'react';
import './FaceRecognition.css';
const FaceRecognition=({imageurl,box})=>{
    return(
        <div className='center '>
            <div className='absolute mt2'>

            <img  id='inputImage'src={imageurl} width='500px' height='auto' alt='' />
            <div className='boundingBox'style={{top:box.top_row ,right:box.right_col,bottom:box.bottom_row,left:box.left_col}}>
                </div>
            </div>

        </div>
    )
}
export default FaceRecognition;