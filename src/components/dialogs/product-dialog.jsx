import { Dialog } from "../../layouts/dialog";
import { Button } from "../button";

export const ProductDialog = ({ eid, imgsrc, title, price, color }) => {
	return (
		<Dialog eid={eid}>
			<div
				style={{
					width: "100%",
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
				}}
			>
				<picture>
					<img style={{ width: "100%" }} src={imgsrc} alt="product" />
				</picture>
				<div>
					<h2>{title}</h2>
					<section className="flex-container" style={{ paddingInline: "1em" }}>
						<p
							className="font-sans"
							style={{
								color: "var(--secondary-color)",
								fontSize: "var(--text-md)",
							}}
						>
							{price}
						</p>
						<Button callback={() => {}}>
							<i
								className="bi bi-cart"
								style={{ color: "var(--body-color)" }}
							/>
							Comprar
						</Button>
					</section>
				</div>
			</div>
		</Dialog>
	);
};
