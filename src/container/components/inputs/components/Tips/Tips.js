import React from 'react'
import './Tips.css'
import Tip from './components/Tip'
import Custom from './components/Custom'
function Tips({setTip}) {

  return (
    <div className="tips">
        <p className="tips-title">Select Tip%</p>
        <div className="tips-choose">
            <Tip percent = {10} setTip={setTip}/>
            <Tip percent = {15} setTip={setTip}/>
            <Tip percent = {20} setTip={setTip}/>
            <Tip percent = {25} setTip={setTip}/>
            <Tip percent = {30} setTip={setTip}/>
            <Custom/>
        </div>
    </div>
  )
}

export default Tips
