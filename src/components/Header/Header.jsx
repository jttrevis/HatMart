import React from 'react';
import styles from './header.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<NavLink to="/">
					<h1>Hat Mart</h1>
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
