import React from 'react';
import styles from './cart.module.scss';
import { useCart } from './../../context/CartContext';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import Button from './../Button/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Cart = ({ isOpen, onClose }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	const {
		cartItems,
		totalPrice,
		totalItems,
		getItemQuantity,
		removeFromCart,
		addToCart,
		deleteFromCart,
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
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1.5 }}
							key={item.id}
						>
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
								<div
									onClick={() => deleteFromCart(item.id)}
									className={styles.delete}
								>
									<MdDeleteForever size={25} />
								</div>
							</div>
						</motion.div>
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
