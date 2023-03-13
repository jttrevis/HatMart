import React from 'react';
import styles from './header.module.scss';
import logo from '../../assets/logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<NavLink className={styles.logoContainer} to="/">
					<img className={styles.logoImg} src={logo} />
					<h1>Frulak</h1>
				</NavLink>
				<div>
					<NavLink to="/">Home</NavLink>

					<NavLink to="/shop">Shop</NavLink>

					<NavLink to="">
						<AiOutlineShoppingCart size={30} />
					</NavLink>
				</div>
			</nav>
		</header>
	);
};

export default Header;
