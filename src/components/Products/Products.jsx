import React from 'react';
import styles from './products.module.scss';
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { hats } from '../../db.json';
import ItemCard from '../Item/ItemCard';
import { useCart } from './../../context/CartContext';
const Products = () => {
	const { addToCart } = useCart();
	return (
		<div className={styles.productContainer}>
			<Splide
				options={{
					rewind: true,
					width: 1400,
					perPage: 3,
					autoplay: true,

					arrows: true,
					drag: true,
					rewindByDrag: true,
				}}
			>
				{hats &&
					hats.map((item) => {
						return (
							<SplideSlide key={item.id}>
								<ItemCard
									brand={item.brand}
									id={item.id}
									image={item.image}
									color={item.color}
									price={item.price}
									size={item.size}
									onClick={() => addToCart(item)}
								/>
							</SplideSlide>
						);
					})}
			</Splide>
		</div>
	);
};

export default Products;
