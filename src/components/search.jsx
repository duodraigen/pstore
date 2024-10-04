import { useNavigate } from "react-router-dom";
import { useSearchStore } from "../utils/storecall";

export const Search = ({ fieldName, placeholder }) => {
	const { overwrite } = useSearchStore();
	const navigate = useNavigate();

	function handleInput() {
		const inpt = document.getElementById("searchbox").value;
		if (inpt !== "") {
			overwrite(inpt);
			navigate("/search");
		} else {
			navigate("/");
		}
	}

	return (
		<div className="search-container rounded">
			<input
				id="searchbox"
				type="search"
				onInput={handleInput}
				aria-label={placeholder}
				className="search-input"
				placeholder={placeholder}
				name={fieldName}
			/>
			<i
				className="bi bi-search"
				style={{ paddingInline: "var(--spacing-small)" }}
			/>
		</div>
	);
};
