import React from 'react';
import styles from './productPage.module.scss';
import { hats } from '../../db.json';
import decor from '../../assets/decor1.svg';
import { useParams } from 'react-router-dom';
const ProductPage = () => {
	const { id } = useParams();
	const hat = hats.find((h) => h.id === parseInt(id));

	if (!hat) {
		return <div>Item not found</div>;
	}

	return (
		<div className={styles.itemContainer}>
			<img src={hat.image} alt="" />
			<div className={styles.item}>
				<h3>Brand: {hat.brand}</h3>
				<p>Color: {hat.color}</p>
				<p>Size: {hat.size}</p>
				<div>
					<img src={decor} alt="" />
					<button>$ {hat.price}</button>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
