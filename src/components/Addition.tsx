import React, { useState } from "react";

const Addition = () => {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(0);
	const addition = () => {
		setResult(parseInt(number1) + parseInt(number2));
	};
	return (
		<>
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
		</>
	);
};

export default Addition;
