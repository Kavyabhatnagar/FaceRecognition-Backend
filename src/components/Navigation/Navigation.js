import React from 'react'

const Navigation=({onRoutChange,isSignedIn})=>{
   if(isSignedIn){
        return(
            <>
            <nav  style={{display:'flex',justifyContent:'flex-end',}}>
               <p className='f3 link dim black underline p3 pointer mr4'
                onClick={()=>onRoutChange('SignIn')}>
                    SignOut
                </p>
                </nav>
            </>
        )
   }
   else
   {
    return(
        <nav  style={{display:'flex',justifyContent:'flex-end',}}>

        <p className='f3 mr3 link dim black underline p3 pointer'
         onClick={()=>onRoutChange('register')}>
             Register
         </p>
        <p className='f3 mr3 link dim black underline p3 pointer'
         onClick={()=>onRoutChange('SignIn')}>
             SignIn
         </p>
         </nav>
    )

   }
   
   
}
export default Navigation;