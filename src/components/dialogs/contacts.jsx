import { Dialog } from "../../layouts/dialog";
import { useState } from "react";

export const ContactDialog = ({ eid }) => {
	const [contactInfo, setContactInfo] = useState([]);

	if (contactInfo.length < 1) {
		(async () => {
			await fetch("data/contact.json").then(async (p) => {
				await p.json().then((data) => {
					setContactInfo(data);
				});
			});
		})();
	}

	function mkList() {
		return contactInfo.map((i) => {
			return (
				<li className="thin-card rounded bordered padded" key={i.social}>
					<a
						style={{ display: "contents" }}
						href={i.url}
						rel="noreferrer"
						target="_blank"
					>
						<i
							className="bi bi-link-45deg"
							style={{
								fontSize: "25px",
								display: "grid",
								alignContent: "center",
							}}
						/>
						<section>
							<h3 style={{ margin: "0px" }}>{i.social}</h3>
							<p
								style={{
									margin: "0.25rem 0px",
									fontSize: "var(--text-xs)",
									color: "var(--text-unhinted-color)",
								}}
							>
								{i.note}
							</p>
						</section>
						<i
							className="bi bi-box-arrow-up-right"
							style={{
								fontSize: "var(--text-md)",
								display: "grid",
								alignContent: "center",
								marginLeft: "auto",
							}}
						/>
					</a>
				</li>
			);
		});
	}

	return (
		<Dialog eid={eid}>
			<ul className="thin-card-list padded">
				<h2>Informacion de Contacto</h2>
				{mkList()}
			</ul>
		</Dialog>
	);
};
