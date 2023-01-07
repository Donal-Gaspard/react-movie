import Counter from "./components/Counter";
import Addition from "./components/Addition";
import Division from "./components/Division";
import Multiplication from "./components/Multiplication";

import "./App.css";

const App = () => (
	<div>
		<h1>Calculatrice</h1>
		<Counter />
		<Addition />
		<Division />
		<Multiplication />
	</div>
);

export default App;
