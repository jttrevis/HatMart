import React from 'react';
import styles from './products.module.scss';
import decor from '../../assets/decor1.svg';
import '@splidejs/react-splide/css';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import { hats } from '../../db.json';
import { Link } from 'react-router-dom';
const Products = () => {
	return (
		<div className={styles.productContainer}>
			<Splide
				options={{
					perPage: 3,
					rewind: true,
					pauseOnHover: true,
					arrows: false,
					autoplay: true,
					lazyLoad: 'nearby',
				}}
			>
				{hats &&
					hats.map((item) => {
						return (
							<SplideSlide key={item.id}>
								<div className={styles.itemContainer}>
									<Link to={'/hat/' + item.id}>
										<img src={item.image} alt="" />
									</Link>
									<div className={styles.item}>
										<h3>Brand: {item.brand}</h3>
										<p>Color: {item.color}</p>
										<p>Size: {item.size}</p>
										<img src={decor} alt="" />
										<button>$ {item.price}</button>
									</div>
								</div>
							</SplideSlide>
						);
					})}
			</Splide>
		</div>
	);
};

export default Products;
