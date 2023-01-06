import React, {useState} from 'react';

const Division = () => {
  const [nbr3, setNbr3] = useState(0);
  const [nbr4, setNbr4] = useState(0);
  const [divisionResult, setDivisionResult] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const division = () => {
    if (nbr4 === 0) {
      setErrorMessage("Division by zero is not allowed");
      return;
    }
    setDivisionResult(nbr3 / nbr4);
  };
  return (
    <>
      <h2>Diviser 2 nombres</h2>
      <input
        placeholder="first number"
        type="number"
        value={nbr3}
        onChange={(event) => setNbr3(parseInt(event.target.value))}
      />
      {nbr3}
      {" / "}
      <input
        value={nbr4}
        placeholder="second number"
        type="number"
        onChange={(event) => setNbr4(parseInt(event.target.value))}
      />
      {nbr4}
      <button onClick={division}>{"="}</button>
      {divisionResult}
      <br></br>
      {errorMessage}
    </>
  );
};

export default Division;
