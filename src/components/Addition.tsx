import React, { useState } from "react";

const Addition = (props) => {
	const [number1, setNumber1] = useState(props.number1);
	const [number2, setNumber2] = useState(props.number2);
	const [result, setResult] = useState(0);

	const addition = () => {
		setResult(number1 + number2);
	};

	return (
		<>
			<h2>Ajouter 2 nombres</h2>
			<input
				placeholder="first number"
				type="number"
				value={number1}
				onChange={(event) => setNumber1(parseInt(event.target.value))}
			/>
			{number1}
			{" + "}
			<input
				value={number2}
				placeholder="second number"
				type="number"
				onChange={(event) => setNumber2(parseInt(event.target.value))}
			/>
			{number2}
			<button onClick={addition}>{"="}</button>
			{result}
			<br></br>
		</>
	);
};

export default Addition;
