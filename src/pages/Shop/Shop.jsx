import React, { useState } from 'react';
import styles from './shop.module.scss';
import decor from '../../assets/decor1.svg';
import { hats } from '../../db.json';
import { Link } from 'react-router-dom';
import Button from './../../components/Button/Button';
import { useCart } from './../../context/CartContext';
import { motion } from 'framer-motion';

const Shop = () => {
	const [selectedBrand, setSelectedBrand] = useState('');
	const [selectedColor, setSelectedColor] = useState('');
	const brandSet = new Set();
	const colorSet = new Set();
	hats.forEach((hat) => {
		brandSet.add(hat.brand);
		colorSet.add(hat.color);
	});
	const brandNames = Array.from(brandSet);
	const colorNames = Array.from(colorSet);

	const filterdHats = hats.filter(
		(hat) =>
			(!selectedBrand || hat.brand === selectedBrand) &&
			(!selectedColor || hat.color === selectedColor)
	);

	const { addToCart } = useCart();

	return (
		<div className={styles.shopContainer}>
			<section className={styles.selectorContainer}>
				<label htmlFor="brand">Brand</label>
				<select
					onChange={(e) => setSelectedBrand(e.target.value)}
					name="brand"
					id="brand"
				>
					<option value="">All</option>
					{brandNames.map((brand) => {
						return (
							<option key={brand} value={brand}>
								{brand}
							</option>
						);
					})}
				</select>

				<label htmlFor="color">Color</label>
				<select
					onChange={(e) => setSelectedColor(e.target.value)}
					name="color"
					id="color"
				>
					<option value="">All</option>
					{colorNames.map((color) => {
						return (
							<option key={color} value={color}>
								{color}
							</option>
						);
					})}
				</select>
			</section>

			<section className={styles.hatsContainer}>
				{filterdHats &&
					filterdHats.map((hat) => {
						return (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 1.5 }}
								key={hat.id}
								className={styles.itemsContainer}
							>
								<Link className={styles.itemsImage} to={'/hat/' + hat.id}>
									<img src={hat.image} alt="" />
								</Link>
								<div className={styles.item}>
									<h3>Brand: {hat.brand}</h3>
									<p>Color: {hat.color}</p>
									<p>Size: {hat.size}</p>
									<img src={decor} alt="" />
									<Button onClick={() => addToCart(hat)}>${hat.price}</Button>
								</div>
							</motion.div>
						);
					})}
			</section>
		</div>
	);
};

export default Shop;
