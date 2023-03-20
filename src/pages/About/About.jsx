import React from 'react';
import styles from './about.module.scss';
import Button from './../../components/Button/Button';
import { motion } from 'framer-motion';
import {
	InViewSection,
	InViewSection2,
} from './../../components/InViewSection/index';
import { Link } from 'react-router-dom';
const About = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className={styles.aboutContainer}
			>
				<div>
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5, delay: 2 }}
						className={styles.aboutTitle}
					>
						<h1>
							A<br />
							B<br />O<br />U<br />T
						</h1>
					</motion.section>

					<section className={styles.aboutInfo}>
						<InViewSection>
							<p>
								Welcome to our SnapBack store, where fashion meets function! We
								are passionate about providing our customers with the latest and
								greatest in snapback hats, while also ensuring top-notch quality
								and service.
							</p>
						</InViewSection>

						<InViewSection2>
							<p>
								Our store was founded with a simple mission: to offer a wide
								selection of snapback hats from the world's leading brands,
								while providing our customers with exceptional customer service
								and a hassle-free shopping experience. Whether you're looking
								for a stylish accessory to complete your outfit or a practical
								way to shield your eyes from the sun, we've got you covered.
							</p>
						</InViewSection2>

						<InViewSection>
							<p>
								At our store, we believe that customer satisfaction is the key
								to success. That's why we offer a hassle-free shopping
								experience, with fast and reliable shipping, easy returns, and
								exceptional customer service. We are always available to answer
								your questions and help you find the perfect snapback hat for
								your needs.
							</p>
						</InViewSection>

						<InViewSection2>
							<p>
								So whether you're a fashion-forward trendsetter or a practical
								shopper looking for a stylish way to protect your eyes, we
								invite you to browse our collection of snapback hats and
								experience the best in quality and service. Thank you for
								choosing our store, and we look forward to serving you!
							</p>
						</InViewSection2>

						<Link to={'/shop'}>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 2.5, delay: 4 }}
							>
								<Button>Shop now</Button>
							</motion.div>
						</Link>
					</section>
				</div>
			</motion.div>
		</>
	);
};

export default About;
