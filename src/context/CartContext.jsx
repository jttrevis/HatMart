import { useState, createContext, useContext } from 'react';

const CartContext = createContext({
	cartItems: [],
	totalPrice: 0,
	totalItems: 0,
	addToCart: () => {},
	removeFromCart: () => {},
	updateQuantity: () => {},
});

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

		if (existingItem) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{ ...item, quantity: 1 },
			]);
		}
	};

	const removeFromCart = (itemId) => {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((cartItem) => cartItem.id !== itemId)
		);
	};

	const updateQuantity = (itemId, quantity) => {
		if (quantity === 0) {
			removeFromCart(itemId);
		} else {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === itemId ? { ...cartItem, quantity } : cartItem
				)
			);
		}
	};

	const totalPrice = cartItems.reduce(
		(total, cartItem) => total + cartItem.price * cartItem.quantity,
		0
	);

	const totalItems = cartItems.reduce(
		(total, cartItem) => total + cartItem.quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				totalItems,
				totalPrice,
				updateQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
