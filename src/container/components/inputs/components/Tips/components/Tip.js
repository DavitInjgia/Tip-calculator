import React from 'react'
import './Tip.css'
function Tip(props) {
  function handleTip(event) {
    props.setTip(props.percent);
  }
  return (
    <button className='tip tip-percent' onClick={handleTip}>
      {props.percent}%
    </button>
  )
}

export default Tip
