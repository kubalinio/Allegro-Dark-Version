import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Navbar from './Navbar'
import Search from './Search'


const Header = () => {
	const { data: session, status } = useSession()

	return (
		<div className='mx-auto max-w-screen-2xl'>
			<div className='flex flex-wrap justify-between px-4 py-4 lg:flex-nowrap lg:py-2'>
				{/* Logo */}
				<h2 className='flex items-center order-1 pr-6 text-2xl text-orange-500 lg:order-none '>
					<a href='/'>
						<Image
							src='https://assets.allegrostatic.com/metrum/metrum-brand/allegro-347440b030.svg'
							width={100}
							height={40}
							className='w-full'
							alt=''
						/>
					</a>
				</h2>
				<Search />
				<Navbar status={status} />
			</div>
		</div>
	);
};

export default Header;
