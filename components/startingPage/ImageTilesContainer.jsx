import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';

const responsive = {
	desktop2: {
		breakpoint: { max: 3000, min: 1024 },
		items: 5
	},
	desktop1: {
		breakpoint: { max: 1024, min: 900 },
		items: 3
	},
	desktop: {
		breakpoint: { max: 900, min: 768 },
		items: 2
	},
	tablet2: {
		breakpoint: { max: 768, min: 600 },
		items: 3
	},
	tablet: {
		breakpoint: { max: 600, min: 464 },
		items: 2
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const tilesImages = [
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
	{
		name: 'Moda w niskich cenach',
		src: 'https://a.allegroimg.com/original/12e4b1/113dc54a44ae96175c6426d5ee5a',
	},
];

// Z sliderem spróbować z left;0 gdyz na orginale wszystkie 

const ImageTilesContainer = () => {
	const [showArrow, setShowArrow] = useState(false);

	return (
		<div className=' bg-allegro_dark md:col-start-3 md:row-start-3 md:row-end-3 h-full py-6 px-6'>
			<div>
				<h5 className='mb-4 font-bold text-white'>Warto zobaczyć</h5>

				<div onMouseOver={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)} className='mt-5'>
					{/* Swiper Carousel Free mode with navigation */}
					<Carousel centerMode={true} responsive={responsive} >
						{tilesImages.map((item, i) => (

							<div key={i} style={{ width: 160 }} className='flex flex-col items-center justify-center h-52 min-w-[160px] max-w-[160px]'>
								<div className='flex w-[132px]'>
									<Image alt='' src={item.src} width={130} height={130} />
								</div>
								<div className='flex justify-center w-full basis-full'>
									<span className='text-center text-white'>{item.name}</span>
								</div>
							</div>

						))}
					</Carousel>

				</div>
			</div>
		</div>
	);
};

export default ImageTilesContainer;
