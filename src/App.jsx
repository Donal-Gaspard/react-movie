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
		<Identification name="Rodolphe"/>
		<Counter number={0} />
		<Counter number={2} />
		<Addition defaultNbr1={3} defaultNbr2={5}/>
		<Division /> {/* ajouter les props */}
		<Multiplication /> {/* ajouter les props */}
	</div>
);

export default App;
