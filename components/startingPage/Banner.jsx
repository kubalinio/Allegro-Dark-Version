import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const slides = [
	{
		name: 'Tysiące produktów',
		img: 'https://a.allegroimg.com/original/12e895/e649bea640d5b98dcdbb4a9f3d25',
		link: '/',
	},
	{
		name: 'Allegro Smart',
		img: 'https://a.allegroimg.com/original/1248cd/92e4da2a458593f044ee66f85931',
		link: '/',
	},
	{
		name: 'Wiedźmin dla fanów',
		img: 'https://a.allegroimg.com/original/129c61/bf78765b42599116f0e0534d451b',
		link: '/',
	},
	{
		name: 'Wszystko na zimę',
		img: 'https://a.allegroimg.com/original/12cdea/9e6a54f84008943bb5dbde2563a0',
		link: '/',
	},
	{
		name: 'Częsci dla pojazdów',
		img: 'https://a.allegroimg.com/original/125a34/69bb2b964752b51a150e907ce029',
		link: '/',
	},
];

const Banner = () => {
	const [showArrow, setShowArrow] = useState(false);

	const customIndicators = (onClickHandler, isSelected, index, label) => {
		return (
			<button
				className={`bg-white mx-3 rounded-full w-3 h-3 lg:mx-0 
				 lg:w-full lg:h-[52px] lg:bg-transparent  lg:border-t-[3px] ${isSelected ? 'bg-orange-500 lg:rounded-none   lg:border-orange-500' : 'lg:border-transparent'
					} `}
				onClick={onClickHandler}
				onKeyDown={onClickHandler}
				value={index}
				key={index}
				role='button'
				tabIndex={0}
				aria-label={`${label} ${index + 1}`}
			>
				<div className={`hidden h-full text-center py-0  text-white text-sm lg:flex lg:justify-center lg:items-center`}>
					{slides[index].name}
				</div>
			</button>
		);
	};

	return (
		<div className='bg-allegro_dark-light md:col-start-3 md:row-end-1 md:row-start-1 md:min-h-[304px]'>
			<div onMouseOver={() => setShowArrow(false)} onMouseLeave={() => setShowArrow(false)} className='h-full'>
				<Carousel
					autoPlay
					showStatus={false}
					showThumbs={false}
					showArrows={showArrow}
					className='h-full bg-allegro_dark'
					renderIndicator={customIndicators}
				>
					{slides.map((slide, i) => (
						<a key={slide.name + i} href={slide.link}>
							<Image loading='lazy' width={800} height={255} src={slide.img} alt={slide.name} className='object-cover' />
						</a>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Banner;
