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
import { useEffect, useRef, useState } from 'react';

// Wyszukiwanie
const Search = () => {

	return (
		<div className='lg:mx-4h-10 w-full lg:w-[54%] rounded-sm flex-grow  order-3 lg:order-none my-3 border border-orange-500 '>
			<form className='flex items-center bg-allegro_dark-light '>

				<input
					className='py-1 h-full flex-grow text-white bg-allegro_dark-light basis-0 flex-shrink focus:outline-none px-4 rounded-l-sm overflow-hidden '
					type='text'
					placeholder='czego szukasz?'
				/>

				{/* Sugesstion List */}


				{/* Multi Search button  */}
				<div className='py-2 pr-2 text-gray-400 hover:text-gray-200 '>
					<a href="#multisearch" >szukaj wielu</a>
				</div>
				{/* Search Filter */}

				<div className='hidden relative sm:flex grow items-center border-l h-[40.2px] min-w-[130px] max-w-[185px] border-orange-600 text-white'>

					<span className='absolute left-0 top-0 bottom-0 right-10 pl-3 py-2 '>Wszędzie</span>
					<div className='w-full h-full'>
						<select className='w-full h-full cursor-pointer bg-[#292929] pr-10 pl-2 border-2 border-black bg-inherit opacity-0 '>
							<option value="/listing" selected>Wszystkie kategorie</option>
							<optgroup label='Kategorie'>
								<option value="/kategoria/">Dom i ogród</option>
								<option value="/kategoria/">Dziecko</option>
								<option value="/kategoria/">Elektronika</option>
								<option value="/kategoria/">Firma i usługi</option>
								<option value="/kategoria/">Kolekcje i sztuka</option>
								<option value="/kategoria/">Kultura i rozrywka</option>
								<option value="/kategoria/">Moda</option>
								<option value="/kategoria/">Motoryzacja</option>
								<option value="/kategoria/">Nieruchomości</option>
								<option value="/kategoria/">Sport i turystyka</option>
								<option value="/kategoria/">Supermarket</option>
								<option value="/kategoria/">Uroda</option>
								<option value="/kategoria/">Zdrowie</option>
							</optgroup>
							<optgroup label='Inne opcje'>
								<option value="/charytatywni/">Cele charytatywne</option>
								<option value="/charytatywni/">Organizacje charytatywne</option>
								<option value="/uzytkownik/">Sprzedawcy</option>
								<option value="/zakonczenie/">Zakończone</option>

							</optgroup>
						</select>
						<ChevronDownIcon className='h-full p-1 pointer-events-none absolute right-0 top-0 overflow-hidden text-gray-400' />
					</div>
				</div>

				{/* Button */}
				<button className='text-white h-full p-1 md:py-2 md:px-4 bg-orange-500 hover:bg-orange-600'>
					<SearchIcon className='h-8 w-8 p-1 text-white md:hidden' />
					<span className='hidden md:block uppercase'>szukaj</span>
				</button>
			</form>
		</div>
	)
}

// Czat
const Chat = () => {

	return (
		<div className='mr-1'>
			<ChatBubbleLeftRightIcon className='icon-nav' />
		</div>
	)
}


// const Component = () => {

//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const menuRef     = useRef(null);
//     const menuBtnRef  = useRef(null);

//     const handleDropdown = (e) => {
//         setIsDropdownOpen(!isDropdownOpen);
//     }

//     const handleClickOutside = (e) => {
//         if (menuRef.current && !menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
//             setIsDropdownOpen(false);
//         }
//     }

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside, true);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside, true);
//         };
//     }, []);

//     return (

//            <button ref={menuBtnRef} onClick={handleDropdown}></button>

//            <div ref={menuRef} className={`${isDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
//                 // ...dropdown items
//            </div>
//     )
// }


// Powiadomienia
const Notifications = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const ref = useRef(null);



	return (
		<div className='relative mr-1'>
			{/* Icon */}
			<div onClick={handleClickOutside} >
				<span className='absolute bottom-0 right-4 bg-orange-500 text-white text-xs w-2 h-2 flex items-center p-2 justify-center rounded-xl'>
					0
				</span>
				<BellIcon className={`icon-nav ${!dropdownOpen ? '' : 'text-orange-500'} `} />
			</div>

			{/* Notification Content Offline */}

			<div ref={ref} className={`absolute ${!dropdownOpen ? 'hidden' : 'flex'} top-12 right-10 xl:right-8 translate-x-1/2 w-[300px] bg-white z-50 `}>
				<div className='w-full text-center text-sm text-white bg-allegro_dark-light border-2 border-black p-4' >

					<p>Zaloguj się, aby zobaczyć <br /> swoje powiadomienia.</p>

					{/* Button */}
					<div className='mt-4 mb-8'>

						<a href='/logowanie' className='uppercase px-6 py-2 bg-orange-500 hover:bg-orange-400 text-white text-center rounded-sm '>
							zaloguj się
						</a>
					</div>


					<p>Nie masz jeszcze konta?</p>

					<a href="/" className='leading-10 py-2 px-4 uppercase tracking-widest text-gray-400 hover:text-gray-300'>Zarejestruj się</a>
				</div>
			</div>

		</div>
	)
}

// Koszyk
const Basket = () => {
	const [showBasketProducts, setShowBasketProducts] = useState(false)

	const handleShowProduct = (show) => {
		const width = window.innerWidth

		if (width >= 768) {
			setShowBasketProducts(show)
		}
	}

	return (
		<>
			{/* Basket */}
			<div className='relative mr-1'>
				{/* Basket icon */}
				<div onMouseEnter={() => handleShowProduct(true)} onMouseLeave={() => handleShowProduct(false)} >
					<span className='absolute bottom-0 right-4 bg-orange-500 text-white text-xs w-2 h-2 flex items-center p-2 justify-center rounded-xl'>
						0
					</span>
					<ShoppingBagIcon className='icon-nav' />
				</div>

				{/* Dynamic List Product */}

				{showBasketProducts ?
					<section onMouseEnter={() => handleShowProduct(true)} onMouseLeave={() => handleShowProduct(false)} className='absolute top-12 right-0 w-[460px]  bg-allegro_dark-light text-white border-2 border-black z-50'>
						<div className='relative'>
							<h3 className='bg-allegro_dark w-full text-base font-bold pl-4 py-2 '>Twój koszyk</h3>
							<div className='bg-allegro_dark text-gray-300 my-4 text-sm text-center p-4'>
								<h4 className='mb-4 text-2xl' >Twoj koszyk jest pusty</h4>
								<p className='mt-4'>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
								<p className='mt-4'>Przez koszyk możesz kupić za jednym razem do 50 przedmiotów od różnych sprzedawców.</p>
							</div>

							{/* Buffor */}
							<div className='absolute left-[-10px] top-0 bottom-0' />
							<div className='absolute right-[-10px] top-0 bottom-0' />
							<div className='absolute left-0 h-[20px] top-[-20px] right-0' />
							<div className='absolute left-0 h-[10px] bottom-[-10px] right-0' />
						</div>

					</section> : ''}

			</div>
		</>
	)
}

// UserPanel
const UserPanel = () => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const ref = useRef(null);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	const handleDropDown = () => {
		setDropdownOpen(!dropdownOpen);
	};

	return (
		<div className='relative mt-2 xl:ml-2'>
			{/* Button */}
			<button ref={ref} type='button' onClick={handleDropDown} className='flex  text-white items-center py-2'>
				<UserIcon className='icon-nav mr-0 xl:hidden' />
				<span className='hidden xl:block whitespace-nowrap text-sm mr-2'>Moje Allegro</span>
				<ChevronDownIcon className={`h-5 hidden xl:block ${!dropdownOpen ? '' : 'rotate-180'} `} />
			</button>
			{/* Smart Icon */}
			<div className='hidden xl:block whitespace-nowrap absolute text-xs text-white right-6 top-[-19%] '>
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

			{/* Panel Logowania/klienta  */}

			<div ref={ref} data-role='dropdown-drop' className={`absolute top-14 xl:top-10 right-0 w-[288px] h-[400px] border-2 border-black bg-allegro_dark-light z-50 ${!dropdownOpen ? 'hidden' : 'flex'}`}>

				<div className='flex flex-col p-4'>
					{/* Image */}
					<div>
						<Image src='https://a.allegroimg.com/original/122180/20799df0408198ded7d97a1c0167' width={287} height={184} alt='' className='w-full object-contain' />
					</div>

					{/* Hello */}
					<div className='text-center text-white'>
						<h3 className='my-3 text-xl font-semibold' >Witaj w Allegro!</h3>
						<p className='text-sm text-left text-gray-300 ' >Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</p>
					</div>

					{/* Button */}
					<div className='flex justify-center bg-orange-500 hover:bg-orange-400  mt-6 text-white text-center rounded-sm'>
						<a href='/logowanie' className='uppercase px-16 py-2'>
							zaloguj się
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

const Header = () => {

	return (
		<div className=' max-w-screen-2xl mx-auto'>

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
				<Search />

				{/* Right Nav */}
				<nav className='relative flex items-center order-2 lg:order-none ml-auto md:ml-4 xl:ml-6'>

					<div className='mr-1'>
						<EllipsisHorizontalCircleIcon className='icon-nav' />
					</div>

					<a href='/' className='mr-1'>
						<StarIcon className='icon-nav' />
					</a>

					<Chat />

					<Notifications />

					<Basket />

					<UserPanel />
				</nav>

			</div>


		</div>
	);
};

export default Header;
