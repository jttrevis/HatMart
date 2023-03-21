import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import AppRoutes from './AppRoutes';
import { BackToTopButton } from './components/BackToTopButton/BackToTopButton';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<AppRoutes />
			<Footer />
			<BackToTopButton />
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
