import React, { useState, useEffect } from "react";
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

          if (displayNum > 10000000) {
            setDisplayNum("8====D");
          }
          break;
        default:
          break;
      }
    }
  }

  function allClear() {
    setFirstNum(0);
    setSecondNum(0);
    setEquation(null);
  }

  useEffect(() => {
    if (!equation) {
      setDisplayNum(firstNum);
    } else {
      setDisplayNum(secondNum);
    }
  }, [firstNum, secondNum]);

  function clicker(num) {
    if (displayNum <= 100000000) {
      if (!equation) {
        setFirstNum(firstNum * 10 + num);
      } else {
        setSecondNum(secondNum * 10 + num);
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
            allClear();
          }}
        />
        <Button print="+/-" color="darkgray" />
        <Button print="%" color="darkgray" />
        <Button
          print="&#247;"
          color="goldenrod"
          onClick={() => setEquation("divide")}
        />
        <Button print="7" color="white" onClick={() => clicker(7)} />
        <Button print="8" color="white" onClick={() => clicker(8)} />
        <Button print="9" color="white" onClick={() => clicker(9)} />
        <Button
          print="&#xd7;"
          color="goldenrod"
          onClick={() => setEquation("multiply")}
        />
        <Button print="4" color="white" onClick={() => clicker(4)} />
        <Button print="5" color="white" onClick={() => clicker(5)} />
        <Button print="6" color="white" onClick={() => clicker(6)} />
        <Button
          print="&#x2212;"
          color="goldenrod"
          onClick={() => {
            setEquation("subtract");
          }}
        />
        <Button print="2" color="white" onClick={() => clicker(2)} />
        <Button print="3" color="white" onClick={() => clicker(3)} />
        <Button print="4" color="white" onClick={() => clicker(4)} />
        <Button
          print="+"
          color="goldenrod"
          onClick={() => {
            setEquation("add");
          }}
        />
        <Button print="0" color="white" onClick={() => clicker(0)} />
        <Button print="1" color="white" onClick={() => clicker(1)} />
        <Button print="." color="white" />
        <Button
          print="="
          color="goldenrod"
          onClick={() => {
            evaluate();
          }}
        />
      </div>
    </div>
  );
}

