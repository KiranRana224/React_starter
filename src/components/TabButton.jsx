// export default function TabButton(props) {
// 	return (
// 		<li>
// 			<button>{props.children}</button>
// 		</li>
// 	);
// }

export default function TabButton({ label, onSelect, isSelected }) {
	return (
		<li>
			<button className={isSelected ? "active" : null} onClick={onSelect}>
				{label}
			</button>
		</li>
	);
}
