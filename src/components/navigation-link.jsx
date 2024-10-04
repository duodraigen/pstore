import { NavLink } from "react-router-dom";

export const NavigationLink = ({ path, children }) => {
	function checkLinkStatus(isActive) {
		return `nav-link ${isActive ? "nav-link-active" : ""}`;
	}

	return (
		<NavLink to={path} className={({ isActive }) => checkLinkStatus(isActive)}>
			{children}
		</NavLink>
	);
};
