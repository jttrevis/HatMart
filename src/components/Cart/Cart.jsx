import React from 'react';
import styles from './cart.module.scss';
import { useCart } from './../../context/CartContext';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import Button from './../Button/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Cart = ({ isOpen, onClose }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	const shippingCost = 15;

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
								<Link to={'/hat/' + item.id} onClick={onClose}>
									<img src={item.image} alt="" />
								</Link>
								<div className={styles.itemInfo}>
									<h1>{item.brand}</h1>
									<p>
										<span>{formatter.format(item.price)}</span>
									</p>
									<div className={styles.quantityContainer}>
										<AiOutlineMinusCircle
											onClick={() => removeFromCart(item.id)}
											size={22}
										/>
										<span>{getItemQuantity(item.id)}</span>
										<AiOutlinePlusCircle
											onClick={() => addToCart(item)}
											size={22}
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

				{cartItems.length > 0 ? (
					<div className={styles.cartValues}>
						<h4>
							Quantity : <span>{totalItems}</span>
						</h4>
						{totalPrice < 100 && cartItems.length > 0 ? (
							<h4>
								Shipping : <span>{formatter.format(shippingCost)}</span>
							</h4>
						) : (
							<h4>
								Shipping : <span>{formatter.format(0)}</span>
							</h4>
						)}
						<h1>
							Items : <span>{formatter.format(totalPrice)}</span>
						</h1>
						<h1>
							Total :
							{totalPrice < 100 && cartItems.length > 0 ? (
								<span>{formatter.format(totalPrice + shippingCost)}</span>
							) : (
								<p>
									<span>{formatter.format(totalPrice)}</span>
								</p>
							)}
						</h1>
						<div className={styles.progressBar}>
							<p>
								Free shipping above: <span>$100</span>
							</p>
							{totalPrice < 100 ? (
								<ProgressBar
									variant="danger"
									now={totalPrice.toFixed(2)}
									label={`${totalPrice.toFixed(2)}%`}
								/>
							) : (
								<div>
									<ProgressBar
										variant="sucess"
										now={totalPrice}
										label={'SHIPPING FREE'}
									/>
								</div>
							)}
						</div>
						<Button>Checkout</Button>
					</div>
				) : (
					<div className={styles.emptyCart}>
						<h1>Cart Empty</h1>
						<Button onClick={onClose}>Back</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
