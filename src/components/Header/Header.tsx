import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import Badge from 'react-bootstrap/Badge';
import Cart from '../Cart/Cart';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCart } from './../../context/CartContext';
import { memo } from 'react';

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

	const handleOpenCart = () => {
		setIsCartOpen(true);
	};

	const handleCloseCart = () => {
		setIsCartOpen(false);
	};
	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
			<nav>
				<Link onClick={handleCloseCart} className={styles.logoContainer} to="/">
					<img className={styles.logoImg} src={logo} alt='logo'/>
					<h1>Hat Store</h1>
				</Link>
				<div>
					<Link onClick={handleCloseCart} to="/" >
						Home
					</Link>

					<Link onClick={handleCloseCart} to="/shop" >
						Shop
					</Link>
					<Link onClick={handleCloseCart} to="/about" >
						About
					</Link>

					<Link to={''} className={styles.cartIcon} onClick={handleOpenCart}>
						<Badge>
							{' '}
							<AiOutlineShoppingCart size={30} />
							{totalItems}
						</Badge>
					</Link>
				</div>
			</nav>
			<Cart isOpen={isCartOpen} onClose={handleCloseCart} />
		</header>
	);
};

export default memo(Header);
