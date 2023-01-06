import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const App = () => {
	const [counter, setCounter] = useState(0);
	const [number1, setNumber1] = useState(1);
	const [number2, setNumber2] = useState(0);
	const [nbr3, setNumber3] = useState(1);
	const [nbr4, setNumber4] = useState(0);
	const [result, setResult] = useState(0);

	const decrement = () => setCounter(counter - 1);
	const increment = () => setCounter(counter + 1);
	const addition = () => {
		console.log("addition");
		setResult(parseInt(number1) + parseInt(number2));
	};
	const division = () => {
		console.log("division");
		setResult(parseInt(nbr3) / parseInt(nbr4));
	};

	return (
		<div>
			<h1>My Movie DB</h1>
			<button onClick={decrement}>{"-"}</button>
			{counter}
			<button onClick={increment}>{"+"} </button>
			<br></br>
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
				placeholder="second number"
				type="number"
				onChange={(event) => setNumber2(event.target.value)}
			/>
			{number2} <button onClick={division}>{"="}</button>
			{result}
			<br></br>
			<h2>Diviser 2 nombres</h2>
			<input
				placeholder="first number"
				type="number"
				value={nbr3}
				onChange={(event) => setNumber3(event.target.value)}
			/>
			{nbr3}
			{" / "}
			<input
				placeholder="second number"
				type="number"
				onChange={(event) => setNumber4(event.target.value)}
			/>
			{nbr4} <button onClick={division}>{"="}</button>
			{result}
		</div>
	);
};

export default App;
