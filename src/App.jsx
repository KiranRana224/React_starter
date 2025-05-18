import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import componetImg from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import PropExample from "./components/PropExample/PropExample";
import TabButton from "./components/TabButton";

function App() {
	// let tabContent = "Please select one button";
	const [selectedTopic, setSelectedTopic] = useState();
	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}
	let tabContent = <p>Please select a topic</p>;
	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTopic].title}</h3>
				<p>{EXAMPLES[selectedTopic].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTopic].code}</code>
				</pre>
			</div>
		);
	}
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h1>Core Concept</h1>
					<ul>
						{/* <PropExample title="Title" description="This is core concepts" image={componetImg}/> */}
						<PropExample {...CORE_CONCEPTS[0]} />
						<PropExample {...CORE_CONCEPTS[1]} />
						<PropExample {...CORE_CONCEPTS[2]} />
						<PropExample {...CORE_CONCEPTS[3]} />
					</ul>
				</section>
				<section id="examples">
					<h1>Examples</h1>
					<menu>
						<TabButton
							label="Component"
							isSelected={selectedTopic == "components"}
							onSelect={() => handleSelect("components")}
						></TabButton>
						<TabButton
							label="JSX"
							isSelected={selectedTopic == "jsx"}
							onSelect={() => handleSelect("jsx")}
						></TabButton>
						<TabButton
							label="Props"
							isSelected={selectedTopic == "props"}
							onSelect={() => handleSelect("props")}
						></TabButton>
						<TabButton
							label="State"
							isSelected={selectedTopic == "state"}
							onSelect={() => handleSelect("state")}
						></TabButton>
					</menu>
					{/* METHOD 1 */}
					{/* {!selectedTopic ? <p>Please select a topic</p> : null}
					{selectedTopic ? (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					) : null} */}

					{/* METHOD 2 */}
					{/* {!selectedTopic && <p>Please select a topic</p>}
					{selectedTopic && (
						<div id="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)} */}
					{/* METHOD 2 */}
					{tabContent}
				</section>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
