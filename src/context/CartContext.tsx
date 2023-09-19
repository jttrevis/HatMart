import React, { useState, createContext, useContext, useEffect, ReactNode } from 'react';
import { ToastOptions, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export type ItemType = {
	id: number
	image?: string
	price: number
	brand: string
	color: string
	quantity: number 
	size: string

	onClick?: () => void
}

type CartContextType = {
	cartItems: ItemType[]
	totalPrice: number
	totalItems: number
	

	addToCart: (item: ItemType) => void
	removeFromCart: (itemId: number) => void
	getItemQuantity: (itemId: number) => number
	deleteFromCart: (itemId: number) => void

}

const CartContext = createContext<CartContextType>({
	cartItems: [] as ItemType[],
	totalPrice: 0,
	totalItems: 0,
	addToCart: () => {},
	removeFromCart: () => {},
	getItemQuantity: () => 0,
	deleteFromCart: () => {}
})

type CartProviderProps = {
	children: ReactNode
}

export const useCart = () => {
	return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartItems, setCartItems] = useState<ItemType[]>(
		JSON.parse(localStorage.getItem('cartItems') || '[]' )
	);

	useEffect(() => {
		try {
			localStorage.setItem('cartItems', JSON.stringify(cartItems));
		} catch (error) {
			console.error('Error storing cart items:', error);
		}
	}, [cartItems]);

	const addToCart = (item: ItemType) => {
		const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
	
		if (existingItem) {
			setCartItems((prevCartItems) =>
				prevCartItems.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				)
			);
			toast.success(`${item.brand} Added to cart!`, {
				position: 'bottom-left',
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			} as ToastOptions);
		} else {
			setCartItems((prevCartItems) => [
				...prevCartItems,
				{ ...item, quantity: 1 },
			]);
			toast.success(`${item.brand} Added to cart!`, {
				position: 'bottom-left',
				autoClose: 3500,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'dark',
			} as ToastOptions);
		}
	};

	const removeFromCart = (itemId: number) => {
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

	const deleteFromCart = (itemId: number) => {
		setCartItems((prevCartItems) =>
			prevCartItems.filter((cartItem) => cartItem.id !== itemId)
		);
	};




	const getItemQuantity = (itemId: number) => {
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
