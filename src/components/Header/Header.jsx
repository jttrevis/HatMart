import React from 'react';
import styles from './header.module.scss';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Header = () => {
	return (
		<header className={styles.header}>
			<nav>
				<h1>Hat Mart</h1>
				<ul>
					<li>
						<a href="">Home</a>
					</li>
					<li>
						<a href="">Shop</a>
					</li>
					<li>
						<a href="">
							<AiOutlineShoppingCart size={30} />
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
