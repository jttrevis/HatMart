import React from 'react'
import styles from './button.module.scss'

interface ButtonProps {
	children: JSX.Element | string
 	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({ children, onClick } : ButtonProps) => {
	return (
		<>
			<button onClick={onClick} className={styles.button}>
				{children}
			</button>
		</>
	);
};

export default Button;
