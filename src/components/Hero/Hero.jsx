import React from 'react';
import decor from '../../assets/decor.svg';
import styles from './hero.module.scss';
const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroText}>
				<h1>
					<strong></strong>napbacks for every occasion<span>.</span>
				</h1>
				<div className={styles.buttonContainer}>
					<img src={decor} alt="" />
					<button>Avaible now</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
