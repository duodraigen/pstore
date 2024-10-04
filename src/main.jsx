import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { pathMap } from "./utils/pathways";

import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const gProvider = createBrowserRouter(pathMap);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={gProvider} />
	</StrictMode>,
);
