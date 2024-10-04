import { PromotionPage } from "../pages/promotions";
import { StartPage } from "../pages/start";
import { MainPage } from "../pages/main";
import { SearchPage } from "../pages/search";

export const pathMap = [
	{
		path: "/",
		element: <MainPage />,
		children: [
			{
<<<<<<< HEAD
=======
				default: true,
>>>>>>> b521e8d (initial)
				path: "/start",
				element: <StartPage />,
			},
			{
				path: "/promotions",
				element: <PromotionPage />,
			},
			{
				path: "/search/*",
				element: <SearchPage />,
			},
		],
	},
];
