import React from 'react';
import { Link } from 'react-router-dom';
import styles from './itemCard.module.scss';
import decor from '../../assets/decor1.svg';
import Button from './../Button/Button';
import { ItemType } from '../../context/CartContext';



const ItemCard = ({ brand, size, color, price, image, id, onClick }: ItemType) => {
	return (
		<>
			<div className={styles.itemContainer}>
				<Link to={'/hat/' + id}>
					<img className={styles.hatImage} src={image} alt="" />
				</Link>
				<div className={styles.item}>
					<div>
						<p>Brand: {brand}</p>
						<p>Color: {color}</p>
						<p>Size: {size}</p>
					</div>
					<img src={decor} alt="" />
					<Button onClick={onClick}>${price.toString()}</Button>
				</div>
			</div>
		</>
	);
};

export default ItemCard;
