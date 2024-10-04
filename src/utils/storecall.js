import { create } from "zustand";

export const useSearchStore = create((set, get) => ({
	query: "",
	overwrite: (req) => set((state) => ({ query: req })),
}));

export const useProds = create((set) => ({
	prods: [],
	setprods: (ps) => set((state) => ({ prods: ps })),
}));

export const useProduct = create((set) => ({
	product: {},
	setproduct: (p) => set((state) => ({ product: p })),
}));
