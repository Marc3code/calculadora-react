import React, { useState } from "react";
import Input from "./components/Inputs";
import Button from "./components/Buttons";
import { Container, Content, Row } from "./style";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("0");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("0");
  };

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => (prev === "0" ? number : `${prev}${number}`));
  };

  const handleSum = () => {
    setOperation("+");

    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
    } else {
      setFirstNumber("0");
     
    }
  };

  const handleSub = () => {
    setOperation("-");

    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
    } else {
      setFirstNumber("0");
     
    }
  }

  const handleMult = () => {
    setOperation("x");

    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
    } else {
      setFirstNumber("0");
     
    }
  }

  const handleDiv = () => {
    setOperation("/");

    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
    } else {
      setFirstNumber("0");
     
    }
  }
 
  const handleEquals = () => {
    switch (operation) {
      case "+":
        if ((firstNumber !== "0") & (operation === "+")) {   
          const sum = Number(firstNumber) + Number(currentNumber);
          setCurrentNumber(String(sum));
          setFirstNumber("0");
        }
        break;

      case "-": 
      if ((firstNumber!== "0") & (operation === "-")) {
        const sub = Number(firstNumber) - Number(currentNumber);
        setCurrentNumber(String(sub));
        setFirstNumber("0");
      }
      break;

      case "x":
        if(firstNumber !== '0' & operation === 'x'){
          const mult = Number(firstNumber) * Number(currentNumber);
          setCurrentNumber(String(mult));
          setFirstNumber("0");
        }
        break;

      case "/":
        if(firstNumber!== '0' & operation === '/'){
          const div = Number(firstNumber) / Number(currentNumber);
          setCurrentNumber(String(div));
          setFirstNumber("0");
        }
        break;

      default:  
    }
  };

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />

          <Row>
            <Button Label="x" onClick={() => handleMult()}/> 
            <Button Label="0" onClick={() => handleAddNumber("0")}/>
            <Button Label="/" onClick={() => handleDiv()}/>
            <Button Label="=" onClick={() => handleEquals()} />
          </Row>

          <Row>
            <Button Label="7" onClick={() => handleAddNumber("7")} />
            <Button Label="8" onClick={() => handleAddNumber("8")} />
            <Button Label="9" onClick={() => handleAddNumber("9")} />
            <Button Label="C" onClick={() => handleOnClear()} />
          </Row>

          <Row>
            <Button Label="4" onClick={() => handleAddNumber("4")} />
            <Button Label="5" onClick={() => handleAddNumber("5")} />
            <Button Label="6" onClick={() => handleAddNumber("6")} />
            <Button Label="-" onClick={() => handleSub()}/>
          </Row>

          <Row>
            <Button Label="1" onClick={() => handleAddNumber("1")} />
            <Button Label="2" onClick={() => handleAddNumber("2")} />
            <Button Label="3" onClick={() => handleAddNumber("3")} />
            <Button Label="+" onClick={() => handleSum()} />
          </Row>
        </Content>
      </Container>
    </div>
  );
};

export default App;
