import { Dialog } from "../../layouts/dialog";
import { useState } from "react";

export const AboutDialog = ({ eid }) => {
	const [aboutInfo, setAboutInfo] = useState([]);

	if (aboutInfo.length < 1) {
		(async () => {
			await fetch("data/locate.json").then(async (p) => {
				await p.json().then((data) => {
					setAboutInfo(data);
				});
			});
		})();
	}

	function mkList() {
		return aboutInfo.map((i) => {
			return (
				<li className="thin-card rounded bordered padded" key={i.local}>
					<a
						style={{ display: "contents" }}
						href={i.url}
						rel="noreferrer"
						target="_blank"
					>
						<i
							className="bi bi-map"
							style={{
								fontSize: "25px",
								display: "grid",
								alignContent: "center",
							}}
						/>
						<section>
							<h3 style={{ margin: "0px" }}>{i.local}</h3>
							<p
								style={{
									margin: "0.25rem 0px",
									fontSize: "var(--text-xs)",
									color: "var(--text-unhinted-color)",
								}}
							>
								{i.type}
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
				<h2>Donde ubicarnos</h2>
				{mkList()}
			</ul>
		</Dialog>
	);
};
