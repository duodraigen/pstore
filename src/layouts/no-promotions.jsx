import { motion } from "framer-motion";

export const NoPromos = () => {
	return (
		<article
			className="full-sized"
			style={{
				display: "grid",
				height: "100dvh",
				textAlign: "center",
				alignContent: "center",
			}}
		>
			<motion.i
				className="bi bi-bag-x"
				animate={{ scale: 1.2 }}
				transition={{ delay: 0 }}
				style={{
					fontSize: "160px",
					textAlign: "center",
					color: "var(--text-unhinted-color)",
				}}
			/>
			<h2>Aun no hay promociones</h2>
			<p style={{ margin: "0px", color: "var(--text-unhinted-color)" }}>
				Cuando esten disponibles, las promociones se mostraran aqui
			</p>
		</article>
	);
};
