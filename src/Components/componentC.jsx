import React, { Component } from 'react'
import './StyleFC.css'

export default class ComponentC extends Component {
  render() {
    return (
      <div className='compClass'>
        <h1>This is Created using Class Component</h1>
        <p>This is done using External CSS</p>
        <p style={{color: "blue"}}>This is done using Internal CSS</p>
      </div>
    )
  }
}
