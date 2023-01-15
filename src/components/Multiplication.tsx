import React, { useState } from "react";
import Identification from "./Identification";

interface Multi {
	defaultNbr6: number;
	defaultNbr7: number;
}

const Multiplication = (props: Multi) => {
	const { defaultNbr6, defaultNbr7 } = props;
	const [nbr5, setNbr5] = useState<number>(defaultNbr6);
	const [nbr6, setNbr6] = useState<number>(defaultNbr7);
	const [MultiplicationResult, setMultiplicationResult] = useState(0);
	const Multiplication = () => {
		setMultiplicationResult(nbr5 * nbr6);
	};
	return (
		<>
			<h2>Multiplier 2 nombres</h2>
			<input
				placeholder="first number"
				type="number"
				value={nbr5}
				onChange={(event) => setNbr5(parseInt(event.target.value))}
			/>
			{nbr5}
			{" / "}
			<input
				value={nbr6}
				placeholder="second number"
				type="number"
				onChange={(event) => setNbr6(parseInt(event.target.value))}
			/>
			{nbr6}
			<button onClick={Multiplication}>{"="}</button>
			{MultiplicationResult}
		</>
	);
};

export default Multiplication;
