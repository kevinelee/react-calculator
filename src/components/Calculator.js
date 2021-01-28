import React, { useState } from "react";
import Screen from "./Screen";
import Button from "./Button";

export default function Calculator() {
  const [displayNum, setDisplayNum] = useState(0);
  const [equation, setEquation] = useState(null);
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  function evaluate() {
    if (firstNum && secondNum) {
      switch (equation) {
        case "add":
          setDisplayNum(firstNum + secondNum);
          break;
        case "subtract":
          setDisplayNum(firstNum - secondNum);
          break;
        case "divide":
          setDisplayNum(firstNum / secondNum);
          break;
        case "multiply":
          setDisplayNum(firstNum * secondNum);
          break;
        default:
          break;
      }
    }

    console.log("eval-fn", firstNum);
    console.log("eval-eq", equation);
    console.log("eval-sn", secondNum);
  }

  function clicker(num) {
    console.log("kevins firstNum", firstNum);
    console.log(equation);

    displayNum <= 100000000) {
      if (!equation) {
        setDisplayNum(displayNum * 10 + num);
        setFirstNum(() => displayNum);
      } else {
        setSecondNum(num * 10 + num);
        setDisplayNum(secondNum);
      }
    } else {
      alert("number too big daddy");
    }
  }

  return (
    <div className="calc-border calc-body">
      <Screen value={displayNum} />
      <div style={{ marginTop: "1rem" }}>
        <Button
          print="AC"
          color="darkgray"
          onClick={() => {
            setFirstNum(0);
            setEquation(null);
            setSecondNum(0);
            setDisplayNum(0);
          }}
        />
        <Button print="+/-" color="darkgray" />
        <Button print="%" color="darkgray" />
        <Button
          print="&#247;"
          color="goldenrod"
          onClick={() => setEquation("divide")}
        />
        <Button print="7" color="" onClick={() => clicker(7)} />
        <Button print="8" color="" onClick={() => clicker(8)} />
        <Button print="9" color="" onClick={() => clicker(9)} />
        <Button
          print="&#xd7;"
          color="goldenrod"
          onClick={() => setEquation("multiply")}
        />
        <Button print="4" color="" />
        <Button print="5" color="" />
        <Button print="6" color="" />
        <Button
          print="&#x2212;"
          color="goldenrod"
          onClick={() => {
            setEquation("subtract");
          }}
        />
        <Button print="2" color="" />
        <Button print="3" color="" />
        <Button print="4" color="" />
        <Button
          print="+"
          color="goldenrod"
          onClick={() => {
            setEquation("add");
          }}
        />
        <Button print="0" color="" />
        <Button print="1" color="" />
        <Button print="." color="" />
        <Button print="=" color="goldenrod" onClick={() => evaluate()} />
      </div>
    </div>
  );
}

// style={{
//   height: "40rem",
//   width: "24rem",
//   border: "3px solid black ",
//   borderRadius: "5%",
//   zIndex: "10",
// }}
