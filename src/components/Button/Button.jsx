import React from 'react';
import styles from './button.module.scss';
const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	);
};

export default Button;
