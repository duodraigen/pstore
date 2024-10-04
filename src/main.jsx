import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { pathMap } from "./utils/pathways";

import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const gProvider = createHashRouter(pathMap);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={gProvider} />,
);
