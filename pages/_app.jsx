import { Provider } from 'react-redux';
import Layout from '../components/Layout';
// import { SessionProvider } from 'next-auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		// <SessionProvider session={session}>
		// <Provider store={store}>
		<Layout>
			<Component {...pageProps} />
		</Layout>
		// </Provider>
		// </SessionProvider>
	);
}

export default MyApp;
