import React from "react";
import "./TipAmount.css";
function TipAmount() {
  return (
    <div className="tip-amount">
      <div className="tip-amount-text">
        <p className="tip-amount-text1">Tip Amount</p>
        <p className="tip-amount-text2">/ person</p>
      </div>
      <p className="tip-amount-num">$4.27</p>
    </div>
  );
}

export default TipAmount;
