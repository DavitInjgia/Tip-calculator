import React, { useState } from "react";
import "../App.css";
import ContainerTemplate from "./ContainerTemplate";
import Inputs from "./components/inputs/Inputs";
import Results from "./components/results/Results";

function Container() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  return (
    <ContainerTemplate
      inputs={
        <Inputs
          bill={bill}
          tip={tip}
          people={people}
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
        />
      }
      results={<Results bill={bill} tip={tip} people={people} />}
    />
  );
}

export default Container;
