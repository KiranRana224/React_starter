import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
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
	);
}
