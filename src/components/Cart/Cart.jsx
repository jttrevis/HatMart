import React from 'react';
import styles from './cart.module.scss';
import { useCart } from './../../context/CartContext';
import Button from './../Button/Button';
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

const Cart = ({ isOpen, onClose }) => {
	const { cartItems, totalPrice, totalItems, updateQuantity } = useCart();
	return (
		<div className={`${styles.cart} ${isOpen ? styles.open : ''}`}>
			<div className={styles.cartHeader}>
				<h2>Cart</h2>
				<button onClick={onClose}>Close</button>
			</div>
			<div className={styles.cartItems}>
				{cartItems &&
					cartItems.map((item) => (
						<div key={item.id}>
							<div className={styles.item}>
								<img src={item.image} alt="" />
								<div className={styles.itemInfo}>
									<h1>{item.brand}</h1>
									<p>${item.price}</p>
									<input
										type="number"
										min="0"
										value={item.quantity}
										onChange={(e) => updateQuantity(item.id, e.target.value)}
									/>
								</div>
							</div>
						</div>
					))}
				<div className={styles.cartValues}>
					<h4>item(s): {totalItems}</h4>
					<h1>{formatter.format(totalPrice)}</h1>
					<Button>Checkout</Button>
				</div>
			</div>
		</div>
	);
};

export default Cart;
