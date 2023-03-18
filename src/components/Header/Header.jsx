import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import Cart from '../Cart/Cart';
const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navbarStyle = {
		backgroundColor: scrolled ? 'black' : 'transparent',
	};

	const handleOpenCart = () => {
		setIsCartOpen(true);
	};

	const handleCloseCart = () => {
		setIsCartOpen(false);
	};
	return (
		<header style={navbarStyle} className={styles.header}>
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

					<NavLink onClick={handleOpenCart}>
						<AiOutlineShoppingCart size={30} />
					</NavLink>
				</div>
			</nav>
			<Cart isOpen={isCartOpen} onClose={handleCloseCart} />
		</header>
	);
};

export default Header;
