export const SectionDelimiter = ({ children }) => {
	return (
		<div
			className="padded"
			style={{
				marginTop: "var(--spacing-large)",
				marginBottom: "var(--spacing-large)",
				backgroundColor: "var(--primary-color)",
			}}
		>
			<h2
				style={{
					margin: "var(--spacing-small)",
					color: "var(--body-color)",
				}}
			>
				{children}
			</h2>
		</div>
	);
};
