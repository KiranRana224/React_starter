import { CORE_CONCEPTS, EXAMPLES } from "../data";
import PropExample from "../components/PropExample/PropExample";

export default function CoreConcepts() {
	return (
		<section id="core-concepts">
			<h1>Core Concept</h1>
			<ul>
				{/* <PropExample title="Title" description="This is core concepts" image={componetImg}/> */}
				{/* <PropExample {...CORE_CONCEPTS[0]} />
                        <PropExample {...CORE_CONCEPTS[1]} />
                        <PropExample {...CORE_CONCEPTS[2]} />
                        <PropExample {...CORE_CONCEPTS[3]} /> */}
				{CORE_CONCEPTS.map((item) => (
					<PropExample key={item.title} {...item} />
				))}
			</ul>
		</section>
	);
}
