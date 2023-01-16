import Image from 'next/image';

import {
	MagnifyingGlassIcon as SearchIcon,
	EllipsisHorizontalCircleIcon,
	StarIcon,
	ChatBubbleLeftRightIcon,
	BellIcon,
	ShoppingBagIcon,
	UserIcon,
	ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const Header = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleDropDown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<div className=' max-w-screen-2xl mx-auto'>
			{/* Top Header */}
			<div className='flex flex-wrap justify-between lg:flex-nowrap px-4 py-4 lg:py-2'>
				{/* Logo */}
				<h2 className='pr-6 text-orange-500 text-2xl flex items-center order-1 lg:order-none '>
					<a href='/'>
						<Image
							src='https://assets.allegrostatic.com/metrum/metrum-brand/allegro-347440b030.svg'
							width={100}
							height={40}
							className='w-full'
						/>
					</a>
				</h2>

				{/* Search */}
				<div className='flex lg:mx-4 items-center h-10 w-full lg:w-[54%] rounded-sm flex-grow bg-orange-500 hover:bg-orange-600 order-3 lg:order-none my-4 border border-orange-500 '>
					<input
						className='p-2 h-full flex-grow text-white bg-allegro_dark-light flex-shrink focus:outline-none px-4 rounded-l-sm overflow-hidden '
						type='text'
						placeholder='czego szukasz?'
					/>

					<button className='text-white p-1 md:py-0 md:px-4'>
						<SearchIcon className=' h-10 w-10 p-1 text-white md:hidden' />
						<span className='hidden md:block uppercase '>szukaj</span>
					</button>
				</div>

				{/* Right Nav */}
				<nav className='relative flex items-center order-2 lg:order-none ml-auto md:ml-4 xl:ml-6'>
					<div className='mr-1'>
						<EllipsisHorizontalCircleIcon className='icon-nav' />
					</div>

					<a href='/' className='mr-1'>
						<StarIcon className='icon-nav' />
					</a>

					<div className='mr-1'>
						<ChatBubbleLeftRightIcon className='icon-nav' />
					</div>

					<div className='relative mr-1'>
						<span className='absolute bottom-0 right-4 bg-orange-500 text-white text-xs w-2 h-2 flex items-center p-2 justify-center rounded-xl'>
							0
						</span>
						<BellIcon className='icon-nav' />
					</div>

					<div className='relative mr-1'>
						<span className='absolute bottom-0 right-4 bg-orange-500 text-white text-xs w-2 h-2 flex items-center p-2 justify-center rounded-xl'>
							0
						</span>
						<ShoppingBagIcon className='icon-nav' />
					</div>

					<div className='relative mt-2 xl:ml-4'>
						<button type='button' onClick={handleDropDown} className='flex  text-white items-center py-2'>
							<UserIcon className='icon-nav mr-0 xl:hidden' />
							<span className='hidden xl:block whitespace-nowrap text-sm mr-2'>Moje Allegro</span>
							<ChevronDownIcon className={`h-5 hidden xl:block ${!dropdownOpen ? '' : 'rotate-180'} `} />
						</button>
						{/* Panel Logowania/klienta  */}

						<div data-role='dropdown-drop' className='absolute top-10 right-0 flex w-[350px] h-[400px] border border-white bg-allegro_dark-light  z-50'>
							<div className='flex flex-col p-4'>
								{/* Image */}
								<div>
									<Image src='https://a.allegroimg.com/original/122180/20799df0408198ded7d97a1c0167' width={287} height={184} alt='' className='w-full object-contain' />
								</div>

								{/* Hello */}
								<div className='text-center text-white'>
									<h3 className='my-2 text-xl font-semibold' >Witaj w Allegro!</h3>
									<p className='text-sm text-left' >Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</p>
								</div>

								{/* Button */}
								<div>button</div>
							</div>

						</div>
					</div>

					{/* smart absolute */}
					<div className='hidden xl:block whitespace-nowrap absolute text-xs text-white right-6 bottom-[57%] '>
						<a href='/smart' className='flex'>
							<span>bądź</span>
							<img
								src='https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg'
								alt='Smart'
								title='smart'
								className='w-[48px] h-[16px] ml-1'
							/>
						</a>
					</div>
				</nav>
			</div>

			{/* Bottom Header */}
			{/* <div className='border-t-[1px] text-white border-allegro_dark-light'>
				<div className='flex items-center justify-between mx-auto'> */}
			{/* Bottom Header Dropdown Categorie */}
			{/* <div className='text-lg '>
						<button type='button' className='flex items-center py-3 pl-6 pr-5 w-40'>
							Kategorie
							<ChevronDownIcon className='h-6 ml-2 text-white' />
						</button>
					</div> */}

			{/* Bottom Header Scrollbar */}
			{/* <div className='text-lg w-full flex items-center justify-start whitespace-nowrap overflow-x-hidden  border-l border-allegro_dark-light max-w-full'>
						<div className='flex w-auto max-w-full items-center text-sm text-gray-400  '>
							<a href='/' className='p-3 hover:text-gray-300'>
								Okazje
							</a>
							<a href='/' className='p-3 hover:text-gray-300'>
								Promocje z Monetami
							</a>
							<a href='/' className='p-3 hover:text-gray-300'>
								Allegro Biznes
							</a>
							<a href='/' className='p-3 hover:text-gray-300'>
								Allegro Lokalnie
							</a>
							<a href='/' className='p-3 hover:text-gray-300'>
								Premiery
							</a>
						</div>
					</div> */}
			{/* </div>
			</div> */}
		</div>
	);
};

export default Header;
