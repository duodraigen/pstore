import { Outlet } from "react-router-dom";

import { Search } from "../components/search";
import { GhostAction } from "../components/ghost-action";
import { NavigationLink } from "../components/navigation-link";

import { ContactDialog } from "../components/dialogs/contacts";

import { openDialog } from "../utils/dialog";
import { AboutDialog } from "../components/dialogs/about";

import { CONTACT_DLG_EID, INFO_DLG_EID } from "../utils/const";

import { useNavigate } from "react-router-dom";

export const MainPage = () => {
	return (
		<>
			<ContactDialog eid={CONTACT_DLG_EID} />
			<AboutDialog eid={INFO_DLG_EID} />
			<header
				className="sticky"
				style={{
					boxShadow: "0px var(--shadow-blur) 3px #15151510",
					backgroundColor: "var(--body-color)",
				}}
			>
				<div
					className="padded flex-container"
					style={{
						backgroundColor: "var(--decor-color)",
						paddingInline: "var(--spacing-large)",
					}}
				>
					<picture>
						<img
							src="svg/brandicon.svg"
							alt="brand-icon"
							style={{
								maxWidth: "var(--brand-icon-size)",
								maxHeight: "var(--brand-icon-size)",
							}}
						/>
					</picture>
					<Search fieldName={"product-search"} placeholder={"Buscar..."} />
					<section
						className="gapped-section"
						style={{ gap: "var(--spacing-normal)" }}
					>
						<GhostAction callback={() => {}}>
							<i
								className="bi bi-cart"
								style={{
									fontSize: "var(--text-sm)",
									color: "var(--text-color)",
								}}
							/>
						</GhostAction>
					</section>
				</div>
				<nav
					className="padded flex-container"
					style={{
						gap: "var(--spacing-large)",
						paddingBottom: "0px",
						paddingInline: "calc(var(--spacing-large) * 2)",
						height: "2rem",
					}}
				>
					<section className="gapped-section">
						<NavigationLink path={"/start"}>Inicio</NavigationLink>
						<NavigationLink path={"/promotions"}>Promociones</NavigationLink>
					</section>
					<section
						className="gapped-section"
						style={{
							gap: "var(--spacing-normal)",
							marginBottom: "0.75em",
						}}
					>
						<GhostAction
							callback={() => {
								openDialog(INFO_DLG_EID);
							}}
						>
							<i
								className="bi bi-info-circle"
								style={{
									fontSize: "var(--text-sm)",
									color: "var(--text-color)",
								}}
							/>
						</GhostAction>
						<GhostAction
							callback={() => {
								openDialog(CONTACT_DLG_EID);
							}}
						>
							<i
								className="bi bi-telephone"
								style={{
									fontSize: "var(--text-sm)",
									color: "var(--text-color)",
								}}
							/>
						</GhostAction>
					</section>
				</nav>
			</header>
			<main style={{ minHeight: "100dvh" }}>
				<Outlet />
			</main>
			<footer
				className="padded"
				style={{
					backgroundColor: "var(--primary-color)",
					color: "var(--body-color)",
					textAlign: "center",
					fontSize: "18px",
				}}
			>
				Tienda - 2024
			</footer>
		</>
	);
};
