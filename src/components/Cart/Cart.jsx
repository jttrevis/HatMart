import React from 'react';
import styles from './cart.module.scss';
import { useCart } from './../../context/CartContext';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Button from './../Button/Button';
import { Link } from 'react-router-dom';
const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

const Cart = ({ isOpen, onClose }) => {
	const {
		cartItems,
		totalPrice,
		totalItems,
		getItemQuantity,
		removeFromCart,
		addToCart,
	} = useCart();
	return (
		<div className={`${styles.cart} ${isOpen ? styles.open : ''}`}>
			<div className={styles.cartHeader}>
				<h2>Cart</h2>
				<IoMdClose size={27} onClick={onClose} />
			</div>
			<div className={styles.cartItems}>
				{cartItems &&
					cartItems.map((item) => (
						<div key={item.id}>
							<div className={styles.item}>
								<Link to={'/hat/' + item.id}>
									<img src={item.image} alt="" />
								</Link>
								<div className={styles.itemInfo}>
									<h1>{item.brand}</h1>
									<p>${item.price}</p>
									<div className={styles.quantityContainer}>
										<AiOutlineMinusCircle
											onClick={() => removeFromCart(item.id)}
											size={18}
										/>
										<span>{getItemQuantity(item.id)}</span>
										<AiOutlinePlusCircle
											onClick={() => addToCart(item)}
											size={18}
										/>
									</div>
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
