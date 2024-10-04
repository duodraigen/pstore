export const GhostAction = ({ callback, children }) => {
	return (
		<button
			type="button"
			className="ghost circled padded"
			style={{ paddingInline: "0.6rem" }}
			onClick={callback}
		>
			{children}
		</button>
	);
};
