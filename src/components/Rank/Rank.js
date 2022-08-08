import React from 'react'
class Rank extends React.Component{
render(){
const {enteries,name}=this.props
    return(
        <div>
        <div className='white f3'>
          {`${name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {enteries}
        </div>
      </div>
    )
}
}
export default Rank;