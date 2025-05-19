import "./App.css";
import componetImg from "./assets/components.png";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
	return (
		<div>
			<Header />
			<main>
				<CoreConcepts />
				<Examples />
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
