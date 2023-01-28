import Head from 'next/head';
import Header from './Header';
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
			<main className='w-full mx-auto mt-4 max-w-screen-2xl bg-allegro_dark-light'>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
