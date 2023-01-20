import Counter from "./components/Counter";
import Addition from "./components/Addition";
import Division from "./components/Division";
import Multiplication from "./components/Multiplication";
import Identification from "./components/Identification";

import "./App.css";

const App = () => (
	<div>
		<h1>Calculatrice</h1>
		<Identification name="Donal" pseudo="Do" />
		<Identification name="Rodolphe" />
		<Counter defaultNumber={7} />
		<Counter defaultNumbruer={3} />
		<Addition defaultNbr1={3} defaultNbr2={5} />
		<Division defaultNbr3={5} defaultNbr4={10} />
		<Multiplication defaultNbr6={5} defaultNbr7={9} />
	</div>
);

export default App;
