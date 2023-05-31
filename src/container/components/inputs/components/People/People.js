import React from "react";
import peopleImg from '../../../../../assets/Combined Shape.svg'
import './People.css'
function People() {
  return (
    <div className="people">
      <div className="people-head">
        <p className="people-h1">Number of People</p>
        <p className="people-non-zero">Can’t be zero</p>
      </div>
      <div className="people-input">
            <img src={peopleImg} alt="" />
            <input type="number" name="" id="" className='people-inp'/>
        </div>
    </div>
  );
}

export default People;
