import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AppRoutes from './AppRoutes';
import { BackToTopButton } from './components/BackToTopButton/BackToTopButton';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AppRoutes />
			<Footer />
			<BackToTopButton />
		</BrowserRouter>
	);
}

export default App;
