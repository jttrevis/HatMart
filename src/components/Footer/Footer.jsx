import React from 'react';
import styles from './footer.module.scss';
import { FaFacebookSquare, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContainer}>
				<div className={styles.footerSection}>
					<h4>Contact Us</h4>
					<p>123 Main Street</p>
					<p>City, State 12345</p>
					<p>Phone: (123) 456-7890</p>
					<p>Email: info@snapbackstore.com</p>
				</div>
				<div className={styles.footerSection}>
					<h4>Follow Us</h4>
					<div className={styles.footerIcons}>
						<a href="https://www.facebook.com/">
							<i className="">
								<FaFacebookSquare size={25} />
							</i>
						</a>
						<a href="https://www.linkedin.com/in/jrtrevisol/">
							<i className="">
								<FaLinkedinIn size={25} />
							</i>
						</a>
						<a href="https://www.instagram.com/">
							<i className="">
								<FaInstagram size={25} />
							</i>
						</a>
					</div>
				</div>
				<div className={styles.footerSection}>
					<h4>Navigation</h4>
					<ul>
						<li>
							<a href={'/'}>Home</a>
						</li>
						<li>
							<Link to={'/shop'}>Shop</Link>
						</li>
						<li>
							<Link to={'/about'}>About Us</Link>
						</li>
					</ul>
				</div>
				<div className={styles.footerSection}>
					<h4>Legal</h4>
					<ul>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
						<li>
							<a href="#">Terms and Conditions</a>
						</li>
						<li>
							<a href="#">Shipping and Returns</a>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.footerBottom}>
				<p>&copy; 2023 Snapback Store. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
