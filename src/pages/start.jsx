import { useState } from "react";

import { ProductCard } from "../components/product-card";
import { CategoryCard } from "../components/category-card";

import { ResponsiveGrid } from "../layouts/grid";
import { SectionDelimiter } from "../layouts/section-delimiter";
import { useProds } from "../utils/storecall";

export const StartPage = () => {
	const [products, setProducts] = useState([]);
	const { setprods } = useProds();

	if (products.length < 1) {
		(async () => {
			await fetch("data/products.json").then(async (p) => {
				await p.json().then((data) => {
					setProducts(data);
					setprods(data);
				});
			});
		})();
	}

	function mkGrid() {
		return products.map((i) => {
			return (
				<ProductCard
					key={i.id}
					category={i.category}
					imgSrc={i.img}
					id={i.id}
					price={i.price}
					title={i.title}
				/>
			);
		});
	}

	return (
		<>
			<article
				className="responsive-grid"
				style={{
					justifyContent: "center",
					alignItems: "center",
					backgroundImage:
						"url(https://tiendasdaka.com/img/banner/banner/B1.webp)",
					backgroundSize: "cover",
				}}
			>
				<CategoryCard
					name={"hogar"}
					header={"https://tiendasdaka.com/img/linea/HOGAR.png"}
					products={[
						{
							id: "3432",
							imgsrc: "https://tiendasdaka.com/img/producto/LH-00002165.webp",
						},
						{
							id: "3435",
							imgsrc: "https://tiendasdaka.com/img/producto/LH-00002164.webp",
						},
						{
							id: "3439",
							imgsrc: "https://tiendasdaka.com/img/producto/LH-00002163.webp",
						},
					]}
				/>
				<CategoryCard
					name={"electrodomesticos"}
					header={
						"https://tiendasdaka.com/img/linea/ELECTRODOM%C3%89STICOS.png"
					}
					products={[
						{
							id: "3432",
							imgsrc: "https://tiendasdaka.com/img/producto/LB-00001412.webp",
						},
						{
							id: "3435",
							imgsrc: "https://tiendasdaka.com/img/producto/LB-00001401.webp",
						},
						{
							id: "3439",
							imgsrc: "https://tiendasdaka.com/img/producto/LB-00001395.webp",
						},
					]}
				/>
			</article>
			<SectionDelimiter>Recomendados para ti</SectionDelimiter>
			<ResponsiveGrid>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LM-00000669.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LM-00000659.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LM-00000644.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LM-00000768.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
			</ResponsiveGrid>
			<SectionDelimiter>Productos Favoritos</SectionDelimiter>
			<ResponsiveGrid>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LH-00001463.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LM-00000880.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LH-00001548.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
				<div
					className="padded bordered rounded"
					style={{
						display: "grid",
						alignContent: "center",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						src="https://tiendasdaka.com/img/producto/LH-00000448.webp"
						alt="product"
						style={{ width: "200px" }}
					/>
				</div>
			</ResponsiveGrid>
			<hr className="elevated bordered" />
			<ResponsiveGrid>{mkGrid()}</ResponsiveGrid>
		</>
	);
};
