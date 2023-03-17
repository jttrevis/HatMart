import React from 'react';
import { Link } from 'react-router-dom';
import styles from './itemCard.module.scss';
import decor from '../../assets/decor1.svg';
import Button from './../Button/Button';
import { InViewSection } from '../InViewSection';

const ItemCard = ({ brand, size, color, price, image, id, onClick }) => {
	return (
		<InViewSection>
			<div className={styles.itemContainer}>
				<Link to={'/hat/' + id}>
					<img className={styles.hatImage} src={image} alt="" />
				</Link>
				<div className={styles.item}>
					<h3>Brand: {brand}</h3>
					<p>Color: {color}</p>
					<p>Size: {size}</p>
					<img src={decor} alt="" />
					<Button onClick={onClick}>${price}</Button>
				</div>
			</div>
		</InViewSection>
	);
};

export default ItemCard;
