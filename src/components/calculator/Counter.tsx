import React, { useState } from "react";

interface Counter {
	defaultNumber: number;
}

const Counter = (props: Counter) => {
	const { defaultNumber } = props;
	const [counter, setCounter] = useState<number>(defaultNumber);
	const decrement = () => setCounter(counter - 1);
	const increment = () => setCounter(counter + 1);


	return (
		<>
			<h2>Counter</h2>
			<button onClick={decrement}>{"-"}</button>
			{counter}
			<button onClick={increment}>{"+"} </button>
			<br></br>
		</>
	);
};

export default Counter;
