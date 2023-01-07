import React, { useState } from "react";

const Multiplication = () => {
	const [nbr5, setNbr5] = useState(0);
	const [nbr6, setNbr6] = useState(0);
	const [multiplicationResult, setDivisionResult] = useState(0);

		setmultiplicationResult(nbr3 * nbr4);
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
			{multiplicationResult}
			<br></br>
			{errorMessage}
		</>
	);
};

export default Division;
