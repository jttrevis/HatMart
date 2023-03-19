import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import Badge from 'react-bootstrap/Badge';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useCart } from './../../context/CartContext';
const Header = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { totalItems } = useCart();

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
				<Link onClick={handleCloseCart} className={styles.logoContainer} to="/">
					<img className={styles.logoImg} src={logo} />
					<h1>Hat Store</h1>
				</Link>
				<div>
					<Link onClick={handleCloseCart} to="/">
						Home
					</Link>

					<Link onClick={handleCloseCart} to="/shop">
						Shop
					</Link>

					<Link className={styles.cartIcon} onClick={handleOpenCart}>
						<AiOutlineShoppingCart size={30} />
						{totalItems ? <Badge>-{totalItems}-</Badge> : ''}
					</Link>
				</div>
			</nav>
			<Cart isOpen={isCartOpen} onClose={handleCloseCart} />
		</header>
	);
};

export default Header;
