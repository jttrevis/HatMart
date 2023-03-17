import React from 'react';
import decor from '../../assets/decor.svg';
import styles from './hero.module.scss';
import { InViewSection, InViewSection2 } from '../InViewSection';
const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroText}>
				<InViewSection>
					<img className={styles.heroImage} src="/bone.png" alt="" />
				</InViewSection>
				<div className={styles.callHero}>
					<InViewSection2>
						<h1>
							<strong>S</strong>napbacks for every occasion<span>.</span>
						</h1>
						<div className={styles.buttonContainer}>
							<img src={decor} alt="" />
							<button>Avaible now</button>
						</div>
					</InViewSection2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
