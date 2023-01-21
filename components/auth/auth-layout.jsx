import Head from 'next/head';

import Footer from '../Footer';
import AuthHeader from './auth-header';

const AuthLayout = ({ children }) => {
    return (
        <div className='layout'>
            <Head>
                <title>Allegro Dark Logowanie</title>
            </Head>

            <header className=' bg-allegro_dark'>
                <AuthHeader />
            </header>

            <main className='max-w-screen-2xl w-full mt-4 mx-auto bg-allegro_dark-light'>{children}</main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AuthLayout;
