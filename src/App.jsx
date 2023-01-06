import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Addition from "./components/Addition";

const App = () => {
	const [nbr3, setNbr3] = useState(0);
	const [nbr4, setNbr4] = useState(0);
	const [divisionResult, setDivisionResult] = useState(0);
	const [errorMessage, setErrorMessage] = useState("");

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
			<Addition />
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
