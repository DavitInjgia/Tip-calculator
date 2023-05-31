import React from "react";
import "./ResultsContainer.css";
function ResultsContainer(props) {
  return (
    <div className="results">
      <div className="amount-total">
        {props.tipAmount}
        {props.total}
      </div>

      {props.reset}
    </div>
  );
}

export default ResultsContainer;
