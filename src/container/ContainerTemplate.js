import React from 'react'
import './ContainerTemplate.css'
function containerTemplate(props) {
  return (
    <div className='box'>
      {props.inputs}
      {props.results}
    </div>
  )
}

export default containerTemplate
