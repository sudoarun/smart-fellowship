import React from 'react'

const Image = ({name, text, src}) => {
  return (
    <div>
    <div style={{width:'195px', height:'200px'}}>
        <img src={src} style={{width:'100%', height:'100%' ,borderRadius:'8px'}}/>
    </div>
    <div style={{color: 'red', textAlign:'center', margin:'20px 0 0 0'}}>{name}</div>
    <div style={{color: '#fff', textAlign:'center'}}>{text}</div>
    </div>
  )
}

export default Image