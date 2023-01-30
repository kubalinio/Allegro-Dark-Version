import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

import UserPanel from './UserPanel'
import Basket from './Basket'
import Notifications from './Notifications'
import Search from './Search'

import {
	EllipsisHorizontalCircleIcon,
	StarIcon,
	ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

// Czat
const Chat = ({ status }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const menuRef = useRef(null);
	const menuBtnRef = useRef(null);

	const handleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	}

	const handleClickOutside = (e) => {
		if (menuRef.current && !menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
			setIsDropdownOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside, true);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside, true);
		};
	}, []);


	const ContentOnline = () => (
		<p className='text-2xl text-center'>Nie masz wiadomości</p>
	)

	const ContentOffline = () => (
		<>
			<p className='text-sm text-center'>Zaloguj się, aby zobaczyć swoje wiadomości.</p>

			{/* Button */}
			<div className='mt-6 mb-8'>
				<a href='/logowanie' className='px-6 py-2 text-center text-white uppercase bg-orange-500 rounded-sm hover:bg-orange-400 '>
					zaloguj się
				</a>
			</div>
		</>
	)

	const navbarHeight = '60px';
	const footerHeight = '200px';

	return (
		<div className='relative'>
			<div ref={menuBtnRef} onClick={handleDropdown} className='mr-1'>
				<ChatBubbleLeftRightIcon className='icon-nav' />
			</div>

			<div style={{ height: `calc(100vh - ${navbarHeight} - ${footerHeight})` }} ref={menuRef} className={`absolute ${!isDropdownOpen ? 'hidden' : 'flex'} top-12 right-10 xl:right-8 translate-x-1/2 w-[300px]  bg-allegro_dark-light border-2 border-black z-50`}>
				<div className='flex flex-col items-center justify-center w-full text-white'>

					{status === 'authenticated' ? (<ContentOnline />) : (<ContentOffline />)}
				</div>
			</div>

		</div>
	)
}
//// Chat End 


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
				{/* Right Nav */}
				<nav className='relative flex items-center order-2 ml-auto lg:order-none md:ml-4 xl:ml-6'>

					<div className='mr-1'>
						<EllipsisHorizontalCircleIcon className='icon-nav' />
					</div>

					<div className='mr-1'>
						<a href='/'>
							<StarIcon className='icon-nav' />
						</a>
					</div>

					<Chat status={status} />
					<Notifications status={status} />
					<Basket status={status} />
					<UserPanel status={status} />
				</nav>

			</div>
		</div>
	);
};

export default Header;
