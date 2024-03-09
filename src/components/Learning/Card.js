import React from 'react'

const Card = ({src}) => {
  return (
    <div className='card-details' style={{width:'271px', height:'428px', border:'2px solid orange', borderRadius:'4px', backgroundColor: '#4A2136' ,display:'flex', flexDirection:'column'}}>
       <div className='img-container'>
        <img src={src} style={{width: '100%', height:'100%' , borderRadius:'8px'}}/>
       </div>
    </div>
  )
}

export default Card