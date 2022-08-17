import React from 'react'
import './StyleFC.css'


const ComponentF = () => {
  return (
    <div className='compfunc'>
      <h1>This is Created using Function Component</h1>
      <p>This is done using External CSS</p>
      <p style={{color: "blue"}}>This is done using Internal CSS</p>
    </div>
  )
}

export default ComponentF
