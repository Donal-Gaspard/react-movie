import {useEffect, useState} from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from './components/Counter'

const App = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [nbr3, setNbr3] = useState(0);
  const [nbr4, setNbr4] = useState(0);
  const [result, setResult] = useState(0);
  const [divisionResult, setDivisionResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");


  const addition = () => {
    setResult(parseInt(number1) + parseInt(number2));
  };

  const division = () => {
    if (parseInt(nbr4) === 0) {
      setErrorMessage("Division by zero is not allowed");
      return;
    }
      setDivisionResult(parseInt(nbr3) / parseInt(nbr4));
  };

  return (
    <div>
      <h1>Calculatrice</h1>
      <Counter />
      <h2>Ajouter 2 nombres</h2>
      <input
        placeholder="first number"
        type="number"
        value={number1}
        onChange={(event) => setNumber1(event.target.value)}
      />
      {number1}
      {" + "}
      <input
        value={number2}
        placeholder="second number"
        type="number"
        onChange={(event) => setNumber2(event.target.value)}
      />
      {number2}
      <button onClick={addition}>{"="}</button>
      {result}
      <br></br>
      <h2>Diviser 2 nombres</h2>
      <input
        placeholder="first number"
        type="number"
        value={nbr3}
        onChange={(event) => setNbr3(event.target.value)}
      />
      {nbr3}
      {" / "}
      <input
        value={nbr4}
        placeholder="second number"
        type="number"
        onChange={(event) => setNbr4(event.target.value)}
      />
      {nbr4}
      <button onClick={division}>{"="}</button>
      {divisionResult}
      <br></br>
      {errorMessage}
    </div>
  );
};

export default App;
