import React, { useState } from "react";

interface Props {
	defaultNbr3: number;
	defaultNbr4: number;
}

const Division = (props: Props) => {
	const { defaultNbr3, defaultNbr4 } = props;
	const [nbr3, setNbr3] = useState<number>(defaultNbr3);
	const [nbr4, setNbr4] = useState<number>(defaultNbr4);
	const [divisionResult, setDivisionResult] = useState<number>(0);
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
