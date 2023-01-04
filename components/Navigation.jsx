import React, { useState } from 'react';

import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai';

import { RiArticleLine } from 'react-icons/ri';

import { BiCar, BiHealth } from 'react-icons/bi';

import { FaCity } from 'react-icons/fa';

import { FiBookOpen } from 'react-icons/fi';

import { GiAmpleDress, GiBasket, GiLipstick, GiSoccerBall, GiTicket } from 'react-icons/gi';

import { MdChildFriendly, MdHomeWork, MdLaptopMac } from 'react-icons/md';

const menuItems = [
	{
		name: 'Elektronika',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Moda',
		icon: <GiAmpleDress />,
	},
	{
		name: 'Dom i Ogród',
		icon: <AiOutlineHome />,
	},
	{
		name: 'Supermarket',
		icon: <GiBasket />,
	},
	{
		name: 'Dziecko',
		icon: <MdChildFriendly />,
	},
	{
		name: 'Uroda',
		icon: <GiLipstick />,
	},
	{
		name: 'Zdrowie',
		icon: <BiHealth />,
	},
	{
		name: 'Kultura i rozrywka',
		icon: <FiBookOpen />,
	},
	{
		name: 'Sport i turystyka',
		icon: <GiSoccerBall />,
	},
	{
		name: 'Motoryzacja',
		icon: <BiCar />,
	},
	{
		name: 'Nieruchomości',
		icon: <MdHomeWork />,
	},
	{
		name: 'Kolekcje i sztuka',
		icon: <RiArticleLine />,
	},
	{
		name: 'Firma i usługa',
		icon: <FaCity />,
	},
	{
		name: 'eBilet.pl',
		icon: <GiTicket />,
	},
	{
		name: 'Allegro Lokalnie',
		icon: <AiOutlineShop />,
	},
];

const benefitItems = [
	{
		name: 'Okazje',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Smart! okazje',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Strefy zakupowe',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Kupony',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Wszystko, czego szukasz',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Hity z reklam',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Premiery',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Karty Podarunkowe',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Allegro Inspiruje',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Allegro Smart!',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Raty',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Raty ZERO',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Allegro Family',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Akademia Allegro',
		icon: <MdLaptopMac />,
	},
	{
		name: 'Zbieraj Monety',
		icon: <MdLaptopMac />,
	},
];

const Icon = ({ icon }) => <span className='pr-3 py-2 text-2xl'>{icon}</span>;

const tabs = [
	{
		name: 'Działy',
	},
	{
		name: 'Korzyści',
	},
];

const NavHeader = ({ activeTab, onTabClicked }) => (
	<nav className='h-10 border-b-2 border-allegro_dark-light'>
		<ul className='relative flex items-center pb-4'>
			{tabs.map((tab, index) => (
				<li
					role='presentation'
					onClick={() => onTabClicked(index)}
					data-role='navigation-item'
					key={tab.name + index}
					className={`flex items-center min-h-[40px] max-w-[270px] text-sm  `}
				>
					<button
						type='button'
						onClick={() => onTabClicked(index)}
						className={`py-2 px-4 uppercase whitespace-nowrap ${
							activeTab === index ? 'text-orange-500' : 'text-white'
						} `}
					>
						{tab.name}
					</button>
				</li>
			))}
		</ul>
	</nav>
);

const Tab = ({ children, isActive }) => {
	return (
		<div
			className={`pt-4 top-0 left-0 ${isActive ? 'flex' : 'hidden'}  ${
				isActive ? 'opacity-100' : 'opacity-0'
			}  w-full ${isActive ? 'visible' : 'invisible'} ${isActive ? 'translate-y-0' : 'translate-y-5'}  transition-all`}
		>
			{children}
		</div>
	);
};

const NavButton = ({ name, icon }) => (
	<a href='/' className='flex items-center pl-4 hover:text-orange-500'>
		{icon && <Icon icon={icon} />}
		<span className='text-sm'>{name}</span>
	</a>
);

const Navigation = () => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClicked = tab => {
		setActiveTab(tab);
	};

	return (
		<nav className='hidden bg-allegro_dark md:flex flex-col h-full max-w-xs px-6 pt-2 md:col-end-1: md:col-start-1 md:row-start-1 md:row-end-4 '>
			<div>
				{/* Navigacja */}
				<NavHeader activeTab={activeTab} onTabClicked={handleTabClicked} />

				<div id='tab-dzialy' role='tab-panel' data-role='tab-panel-item' className='flex-auto relative h-full'>
					{/* Działy */}
					<Tab isActive={activeTab === 0}>
						<div className='grid w-full text-white '>
							{menuItems.map(item => (
								<NavButton name={item.name} icon={item.icon} />
							))}
						</div>
					</Tab>

					{/* Korzyści */}
					<Tab isActive={activeTab === 1}>
						<div className='grid w-full text-white '>
							{benefitItems.map(item => (
								<NavButton name={item.name} icon={item.icon} />
							))}
						</div>
					</Tab>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
