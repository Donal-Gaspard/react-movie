import Counter from "./components/calculator/Counter";
import Addition from "./components/calculator/Addition";
import Division from "./components/calculator/Division";
import Multiplication from "./components/calculator/Multiplication";
import Identification from "./components/calculator/Identification";
import Contact from "./components/contact/Contact";

import "./App.css";

const App = () => (
	<div>
		<h1>React program</h1>
		<h2>Calculator</h2>
		<Identification name="Donal" pseudo="Do" age={18} hasPet={false} />
		<Identification name="Rodolphe" age={17} hasPet={true} />
		<Counter defaultNumber={7} />
		<Counter defaultNumber={3} />
		<Addition defaultNbr1={3} defaultNbr2={5} />
		<Division defaultNbr3={5} defaultNbr4={10} />
		<Multiplication defaultNbr6={5} defaultNbr7={9} />
		<hr/>
		<Contact />
	</div>
);

export default App;
