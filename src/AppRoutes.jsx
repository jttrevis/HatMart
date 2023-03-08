import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductPage from './pages/ProductPage/ProductPage';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/hat/:id?" element={<ProductPage />} />
		</Routes>
	);
};

export default AppRoutes;
