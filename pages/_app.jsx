
import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {

	{/* // <Provider store={store}> */ }
	const getLayout = Component.getLayout || ((page) => page)

	const ApplicationLayout = () => {
		return getLayout(<Component {...pageProps} />)
	}


	return (
		<SessionProvider getLayout={getLayout} session={session}>
			<ApplicationLayout />
		</SessionProvider>
	)

	{/* // </Provider> */ }

}

export default MyApp
