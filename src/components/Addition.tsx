import React, { useState } from "react";

interface Props {
	defaultNbr1: number;
	defaultNbr2: number;
}

const Addition = (props: Props) => {
	const { defaultNbr1, defaultNbr2 } = props;

	const [number1, setNumber1] = useState<number>(defaultNbr1);
	const [number2, setNumber2] = useState<number>(defaultNbr2);
	const [result, setResult] = useState<number>(0);

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
