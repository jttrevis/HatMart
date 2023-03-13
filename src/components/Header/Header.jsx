import React, { useState } from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const handleOpenCart = () => {
		setIsCartOpen(true);
	};

	const handleCloseCart = () => {
		setIsCartOpen(false);
	};
	return (
		<header className={styles.header}>
			<nav>
				<NavLink
					onClick={handleCloseCart}
					className={styles.logoContainer}
					to="/"
				>
					<img className={styles.logoImg} src={logo} />
					<h1>Frulak</h1>
				</NavLink>
				<div>
					<NavLink onClick={handleCloseCart} to="/">
						Home
					</NavLink>

					<NavLink onClick={handleCloseCart} to="/shop">
						Shop
					</NavLink>

					<NavLink>
						<AiOutlineShoppingCart onClick={handleOpenCart} size={30} />
					</NavLink>
				</div>
			</nav>
			<Cart isOpen={isCartOpen} onClose={handleCloseCart} />
		</header>
	);
};

export default Header;
