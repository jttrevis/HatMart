import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PrismicProvider } from '@prismicio/react';
import { client } from './services/prismic';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<CartProvider>
		<PrismicProvider client={client}>
			<App />
		</PrismicProvider>
	</CartProvider>
);
