import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRoutes';
import { BackToTopButton } from './components/BackToTopButton/BackToTopButton';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import ProductPage from './pages/ProductPage/ProductPage';
import About from './pages/About/About';
// import { useLayoutEffect } from 'react';

function App() {
	// const location = useLocation();
	// useLayoutEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, [location.pathname]);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/hat/:id?" element={<ProductPage />} />
				<Route path="/about" element={<About />} />
			</Routes>
			<Footer />
			<BackToTopButton />
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
