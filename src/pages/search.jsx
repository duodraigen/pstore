import { ResponsiveGrid } from "../layouts/grid";
import { ProductCard } from "../components/product-card";
import { useProds, useSearchStore } from "../utils/storecall";

export const SearchPage = () => {
	const { query } = useSearchStore();
	const { prods } = useProds();

	function handleSearch() {
		if (query !== "") {
			return prods.filter((i) => {
				return i.title.toLowerCase().includes(query.toLowerCase());
			});
		}

		return prods;
	}

	const productsCopy = handleSearch();

	function mkGrid() {
		return productsCopy.map((i) => {
			return (
				<ProductCard
					key={i.id}
					category={i.category}
					imgSrc={i.img}
					id={i.id}
					price={i.price}
					title={i.title}
				/>
			);
		});
	}

	return <ResponsiveGrid>{mkGrid()}</ResponsiveGrid>;
};
