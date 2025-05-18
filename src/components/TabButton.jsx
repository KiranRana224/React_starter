// export default function TabButton(props) {
// 	return (
// 		<li>
// 			<button>{props.children}</button>
// 		</li>
// 	);
// }

export default function TabButton({ label, onSelect }) {
	return (
		<li>
			<button onClick={onSelect}>{label}</button>
		</li>
	);
}
