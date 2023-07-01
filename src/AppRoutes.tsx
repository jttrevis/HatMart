import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductPage from './pages/ProductPage/ProductPage';
import About from './pages/About/About';


const AppRoutes = () => {
	const location = useLocation();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);
	return (
		<Routes>
			<Route path="/hat/:id?" element={<ProductPage />} />
			<Route path="/about"  element={<About />} />
			<Route path="/shop"  element={<Shop />} />
			<Route path="/"  element={<Home />} />
		</Routes>
	);
};

export default AppRoutes;
