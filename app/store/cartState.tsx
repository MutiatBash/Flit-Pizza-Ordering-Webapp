// import { create } from "zustand";
// import { popularDishes } from "../data";

// interface CartItem {
// 	id: number;
// 	quantity: number;
// 	title: string;
// 	imageUrl: string;
// 	price: number;
// }

// interface CartState {
// 	items: CartItem[];
// 	addToCart: (productId: number, quantity: number) => void;
// 	removeFromCart: (productId: number) => void;
// 	removeAllFromCart: () => void;
// 	// getAllItems: () => void; f
// }

// const getProductDetails = (productId: number) => {
// 	return popularDishes.find((product) => product.id === productId);
// };

// const useCartState = create<CartState>((set) => ({
// 	items: [],
// 	addToCart: (productId: number, quantity: number) =>
// 		set((state) => {
// 			const existingItem = state.items.find((item) => item.id === productId);

// 			if (existingItem) {
// 				// If the item already exists, update its quantity
// 				return {
// 					items: state.items.map((item) =>
// 						item.id === productId
// 							? { ...item, quantity: item.quantity + quantity }
// 							: item
// 					) as CartItem[],
// 				};
// 			} else {
// 				const productDetails = getProductDetails(productId);
// 				if (productDetails) {
// 					const newItem: CartItem = {
// 						id: productId,
// 						quantity: quantity,
// 						title: productDetails.title,
// 						price: productDetails.price,
// 						imageUrl: productDetails.src,
// 					};
// 					return {
// 						items: [...state.items, newItem] as CartItem[],
// 					};
// 				} else {
// 					return state;
// 				}
// 			}
// 		}),

// 	removeFromCart: (productId: number) =>
// 		set((state) => ({
// 			items: state.items.filter((item) => item.id !== productId),
// 		})),
// 	removeAllFromCart: () => set({ items: [] }),
// }));

// export default useCartState;


// Import create from zustand
import { create } from "zustand";
import { popularDishes } from "../data";

// Define the CartItem and CartState interfaces
interface CartItem {
  id: number;
  quantity: number;
  title: string;
  imageUrl: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  removeAllFromCart: () => void;
//   getAllItems: () => void;
}

// Define a key for storing the cart state in local storage
const getLocalStorageKey = "cart";


const getProductDetails = (productId: number) => {
  return popularDishes.find((product) => product.id === productId);
};

const useCartState = create<CartState>((set) => {
  // Try to retrieve the cart state from localStorage on initialization
  const storedCartState = localStorage.getItem(getLocalStorageKey);
  const initialState: CartState = storedCartState
    ? JSON.parse(storedCartState)
    : { items: [] };

  return {
		...initialState,
		addToCart: (productId: number, quantity: number) =>
			set((state) => {
				const existingItem = state.items.find(
					(item) => item.id === productId
				);

				if (existingItem) {
					// If the item already exists, update its quantity
					const updatedItems = state.items.map((item) =>
						item.id === productId
							? { ...item, quantity: item.quantity + quantity }
							: item
					);
					const updatedState = { items: updatedItems };
					localStorage.setItem(
						getLocalStorageKey,
						JSON.stringify(updatedState)
					);
					return updatedState;
				} else {
					const productDetails = getProductDetails(productId);
					if (productDetails) {
						const newItem: CartItem = {
							id: productId,
							quantity: quantity,
							title: productDetails.title,
							price: productDetails.price,
							imageUrl: productDetails.src,
						};
						const updatedState = { items: [...state.items, newItem] };
						localStorage.setItem(
							getLocalStorageKey,
							JSON.stringify(updatedState)
						);
						return updatedState;
					} else {
						return state;
					}
				}
			}),
		removeFromCart: (productId: number) =>
			set((state) => {
				const updatedItems = state.items.filter(
					(item) => item.id !== productId
				);
				const updatedState = { items: updatedItems };
				localStorage.setItem(
					getLocalStorageKey,
					JSON.stringify(updatedState)
				);
				return updatedState;
			}),
		removeAllFromCart: () => {
			localStorage.removeItem(getLocalStorageKey);
			return { items: [] };
		},
		// getAllItems: () => get().items.length,
		// getAllItems: () => set((state) => state.items.length),
  };
});


export default useCartState;
