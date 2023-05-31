import React from "react";
import InputsTemplate from "./InputsTemplate";
import Bills from "./components/Bills/Bills";
import Tips from "./components/Tips/Tips";
import People from "./components/People/People";

function Inputs(props) {
  return (
    <InputsTemplate
      bills={<Bills setBill={props.setBill} />}
      tips={<Tips setTip={props.setTip} />}
      people={<People setPeople={props.setPeople}/>}
    />
  );
}

export default Inputs;
