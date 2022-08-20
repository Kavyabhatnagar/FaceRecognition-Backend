import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css';
import brain from './brain.png';
const Logo=()=>
{
    return(
        <>
        
        <div className='ma4 mt0'>

        <div className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"><img style={{paddingTop:'5px'}}src={brain} alt=''/> </div>
        </div>
        </div>
        </>
    )
}
export default Logo;