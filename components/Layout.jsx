import Head from 'next/head';
import Header from '../components/Header';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className='layout'>
			<Head>
				<title>Allegro Dark</title>
			</Head>
			<header className=' bg-allegro_dark'>
				<Header />
			</header>
			<main className='max-w-screen-2xl w-full mt-4 mx-auto bg-allegro_dark-light'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
