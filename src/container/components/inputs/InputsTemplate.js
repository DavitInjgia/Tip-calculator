import React from 'react'
import './InputsTemplate.css'
function InputsTemplate(props) {
  return (
    <div className="inputs">
        {props.bills}
        {props.tips}
        {props.people}
    </div>
  )
}

export default InputsTemplate
