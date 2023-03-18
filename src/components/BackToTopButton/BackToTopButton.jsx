import { useState, useEffect } from 'react';
import { TbArrowBarToUp } from 'react-icons/tb';

export const BackToTopButton = () => {
	const [backToTopButton, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<div>
			{backToTopButton && (
				<button
					onClick={scrollUp}
					style={{
						color: '#b1422f',
						position: 'fixed',
						bottom: 15,
						right: 15,
						background: 'transparent',
						border: 'none',
						cursor: 'pointer',
					}}
				>
					<TbArrowBarToUp size={45} color={'#b1422f'} />
				</button>
			)}
		</div>
	);
};
