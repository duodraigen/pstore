import { openDialog } from "../utils/dialog";
import { useProduct } from "../utils/storecall";
import { Button } from "./button";

import { ProductDialog } from "./dialogs/product-dialog";

export const ProductCard = ({ id, title, price, category, imgSrc }) => {
	const { setproduct } = useProduct();

	return (
		<>
			<ProductDialog
				eid={id}
				color={""}
				imgsrc={imgSrc}
				price={price}
				title={title}
			/>
			<section className="padded-lg bordered rounded">
				<div
					onKeyDown={() => {}}
					style={{ display: "contents" }}
					onClick={() => {
						openDialog(id);
					}}
				>
					<picture
						style={{
							width: "100%",
							margin: "var(--spacing-normal) 1.5rem",
						}}
					>
						<img
							className="rounded"
							src={imgSrc}
							alt={title}
							style={{
								width: "200px",
							}}
						/>
					</picture>
					<hr className="bordered" />
					<div
						style={{
							marginBottom: "var(--spacing-large)",
							marginTop: "var(--spacing-large)",
							height: "100px",
						}}
					>
						<h4
							style={{
								margin: "var(--spacing-small)",
								color: "var(--text-unhinted-color)",
							}}
						>
							{category}
						</h4>
						<h3
							style={{
								margin: "var(--spacing-small)",
							}}
						>
							{title}
						</h3>
					</div>
					<div className="flex-container">
						<span
							className="font-sans"
							style={{
								display: "block",
								fontSize: "var(--text-lg)",
								color: "var(--secondary-color)",
							}}
						>
							{price}
						</span>
						<Button callback={() => {}}>
							<i
								className="bi bi-cart-plus icon"
								style={{ marginInline: "0.15rem", color: "var(--body-color)" }}
							/>
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};
