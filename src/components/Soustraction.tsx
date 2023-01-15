import React, { useState } from "react";

const Soustraction = () => {
	const [nbr7, setNbr7] = useState(0);
	const [nbr8, setNbr8] = useState(0);
	const [SoustractionResult, setSoustractionResult] = useState(0);
	const Soustraction = () => {
		setSoustractionResult(nbr7 - nbr8);
	};
	return (
		<>
			<h2>Soustaire 2 nombres</h2>
			<input
				placeholder="first number"
				type="number"
				value={nbr7}
				onChange={(event) => setNbr7(parseInt(event.target.value))}
			/>
			{nbr8}
			{" / "}
			<input
				value={nbr8}
				placeholder="second number"
				type="number"
				onChange={(event) => setNbr8(parseInt(event.target.value))}
			/>
			{nbr8}
			<button onClick={Soustraction}>{"="}</button>
			{SoustractionResult}
		</>
	);
};

export default Soustraction;
