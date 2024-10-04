import { closeDialog } from "../utils/dialog";
import { animate, motion } from "framer-motion";

export const Dialog = ({ eid, children }) => {
	return (
		<motion.dialog id={eid} className="dialog-surface padded rounded">
			<div className="flex-container">
				<button
					type="button"
					className="circled ghost"
					style={{ padding: "0.2rem 0.3rem", marginLeft: "auto" }}
					onClick={() => {
						closeDialog(eid);
					}}
				>
					<i
						className="bi bi-x"
						style={{ fontSize: "var(--text-md)", padding: "-0.2rem" }}
					/>
				</button>
			</div>
			{children}
		</motion.dialog>
	);
};
