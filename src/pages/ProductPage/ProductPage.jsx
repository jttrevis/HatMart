import React from 'react';
import styles from './productPage.module.scss';
import { hats } from '../../db.json';
import decor from '../../assets/decor1.svg';
import { useParams } from 'react-router-dom';
import ItemCard from './../../components/Item/ItemCard';
const ProductPage = () => {
	const { id } = useParams();
	const hat = hats.find((h) => h.id === parseInt(id));

	if (!hat) {
		return <div>Item not found</div>;
	}

	return (
		<div className={styles.itemContainer}>
			<img className={styles.hatImage} src={hat.image} alt="" />

			<ItemCard
				brand={hat.brand}
				id={hat.id}
				color={hat.color}
				price={hat.price}
				size={hat.size}
			/>
		</div>
	);
};

export default ProductPage;
