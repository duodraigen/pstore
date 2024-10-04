import { API_URI } from "./const";

export async function getCategories() {
	return fetch(`${API_URI}categories`)
		.then(async (categoryData) => {
			return categoryData
				.json()
				.then((data) => {
					return data;
				})
				.catch((errorMsg) => {
					console.error(errorMsg);
				});
		})
		.catch((errorMsg) => {
			console.error(errorMsg);
		});
}

export async function listCategory(category) {
	return fetch(`${API_URI}category/${category}`)
		.then(async (products) => {
			return products
				.json()
				.then((data) => {
					return data;
				})
				.catch((errorMsg) => {
					console.error(errorMsg);
				});
		})
		.catch((errorMsg) => {
			console.error(errorMsg);
		});
}

export async function getProduct(productId) {
	return fetch(`${API_URI}products/${productId}`)
		.then(async (product) => {
			return product
				.json()
				.then((data) => {
					return data;
				})
				.catch((errorMsg) => {
					console.error(errorMsg);
				});
		})
		.catch((errorMsg) => {
			console.error(errorMsg);
		});
}

export async function getFromRequest(request) {
	return fetch(`${API_URI}products`)
		.then(async (product) => {
			return product
				.json()
				.then((data) => {
					return data.filter((item) => {
						return item.title.toLowerCase().includes(request.toLowerCase());
					});
				})
				.catch((errorMsg) => {
					console.error(errorMsg);
				});
		})
		.catch((errorMsg) => {
			console.error(errorMsg);
		});
}
