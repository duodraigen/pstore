export const Button = ({ callback, children }) => {
	return (
		<button
			type="button"
			onClick={callback}
			className="rounded padded text-sm flex-container elevated"
			style={{
				backgroundColor: "var(--primary-color)",
				color: "var(--text-alternate-color)",
				gap: "var(--spacing-normal)",
				justifyContent: "normal",
				border: "none",
			}}
		>
			{children}
		</button>
	);
};
