export const CategoryCard = ({ name, header, products }) => {
	return (
		<section
			className="padded rounded bordered"
			style={{
				display: "grid",
				gap: "var(--spacing-normal)",
				gridTemplateRows: "auto 55% 30%",
				backgroundColor: "var(--body-color)",
			}}
		>
			<a style={{ display: "contents" }} href={`/category/${name}`}>
				<h3
					style={{
						margin: "0px",
						padding: "0.25rem",
						textTransform: "capitalize",
					}}
				>
					{name}
				</h3>
				<picture>
					<img
						className="rounded"
						src={header}
						alt="category"
						style={{ width: "100%" }}
					/>
				</picture>
				<div
					className="padded"
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3, 1fr)",
						gap: "var(--spacing-large)",
					}}
				>
					<button
						type="button"
						className="rounded bordered"
						style={{ padding: "0px" }}
						onClick={() => {}}
					>
						<img
							src={products[0].imgsrc}
							alt="product"
							className="rounded"
							style={{ width: "100%", height: "100%" }}
						/>
					</button>
					<button
						type="button"
						className="rounded bordered"
						style={{ padding: "0px" }}
						onClick={() => {}}
					>
						<img
							src={products[1].imgsrc}
							alt="product"
							className="rounded"
							style={{ width: "100%", height: "100%" }}
						/>
					</button>
					<button
						type="button"
						className="rounded bordered"
						style={{ padding: "0px" }}
						onClick={() => {}}
					>
						<img
							src={products[2].imgsrc}
							alt="product"
							className="rounded"
							style={{ width: "100%", height: "100%" }}
						/>
					</button>
				</div>
			</a>
		</section>
	);
};
