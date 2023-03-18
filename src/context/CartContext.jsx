import { useState, createContext, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
	const [cartItems, setCartItems] = useState(
		JSON.parse(localStorage.getItem('cartItems')) || []
	);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (item) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

		if (existingItem) {
			setCartItems(
				(prevCartItems) =>
					prevCartItems.map((cartItem) =>
						cartItem.id === item.id
							? { ...cartItem, quantity: cartItem.quantity + 1 }
							: cartItem
					),
				toast.success(`${item.brand} Added on cart!`, {
					position: toast.POSITION.BOTTOM_LEFT,
				})
			);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{ ...item, quantity: 1 },
			]);
			toast.success(`${item.brand} Added on cart!`, {
				position: toast.POSITION.BOTTOM_LEFT,
			});
		}
	};

	const removeFromCart = (itemId) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === itemId);

		if (existingItem && existingItem.quantity > 1) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === itemId
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				)
			);
		} else {
			setCartItems((prevCartItems) =>
				prevCartItems.filter((cartItem) => cartItem.id !== itemId)
			);
		}
	};

	const deleteFromCart = (itemId) => {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((cartItem) => cartItem.id !== itemId)
		);
	};

	const getItemQuantity = (itemId) => {
		const item = cartItems.find((cartItem) => cartItem.id === itemId);
		return item ? item.quantity : 0;
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
				getItemQuantity,
				deleteFromCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
