import React from 'react'
import './ImageLinkForm.css'
const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(

        <div>
            <p className='f3'>
                {'This Magic Brain will detect faces in your pictures. Give it a try'}
            </p>
            <div className='center'>
                <div className='form  center pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center ba b--white-30'
                onChange={onInputChange}
                  type='tex'/>
                <button className='w-30 grow f4 link ph3 pv2 br3 dib ba b--white-30 white bg-light-purple'
                 onClick={onButtonSubmit}>Detect</button>              
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;