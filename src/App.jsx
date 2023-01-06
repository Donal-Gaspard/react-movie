import Counter from "./components/Counter";
import Addition from "./components/Addition";
import Division from "./components/Division";

import "./App.css";

const App = () => (
		<div>
			<h1>Calculatrice</h1>
			<Counter />
			<Addition />
			<Division />
			{/* <Multiplication /> */}
			{/* <Soustraction /> */}
		</div>
	);

export default App;
