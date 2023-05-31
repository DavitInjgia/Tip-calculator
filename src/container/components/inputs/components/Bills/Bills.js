import React from 'react'
import './Bills.css'
function Bills({setBill}) {
  function handleInputChange(event) {
    setBill(event.target.value);
  }
  return (
    <div className="bill">
        <p className="bill-title">Bill</p>
        <div className="bill-input">
            <span className='bill-dolar'>$</span>
            <input type="number" name="" id="" className='bill-inp' onChange={handleInputChange}/>
        </div>
    </div>
  )
}

export default Bills
