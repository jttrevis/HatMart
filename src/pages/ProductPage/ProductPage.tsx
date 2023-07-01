import React from 'react';
import styles from './productPage.module.scss';
import { hats } from '../../db.json';

import { useParams } from 'react-router-dom';
import ItemCard from './../../components/Item/ItemCard';
import { ItemType, useCart } from './../../context/CartContext';


export interface HatProps {
	id: number
	image: string
	about: string
	brand: string	
	color: string
	price: number
	size: string
	quantity: number
	
}



const ProductPage = () => {
	const { id } = useParams<{id: string}>();
	const hat: HatProps | undefined = hats.find((h) => h.id === parseInt(id ?? '')) ;
	const { addToCart } = useCart();

	if (!hat) {
		return <div>Item not found</div>;
	}

	return (
		<div className={styles.itemContainer}>
			<img className={styles.hatImage} src={hat.image} alt="" />
			<div>
				<div className={styles.hatAbout}>{hat.about}</div>
				<ItemCard
					brand={hat.brand}
					id={hat.id}
					quantity={1}
					color={hat.color}
					price={hat.price}
					size={hat.size}
					onClick={() => addToCart(hat)}
				/>
			</div>
		</div>
	);
};

export default ProductPage;
