import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';

import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

const ImageTilesContainer = () => {
	const [showArrow, setShowArrow] = useState(false);

	return (
		<div className=' bg-allegro_dark md:col-start-3 md:row-start-3 md:row-end-3 h-full py-12 px-6'>
			<div className=''>
				<h5 className='mb-4 font-bold text-white'>Warto zobaczyć</h5>

				<div onMouseOver={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
					{/* Swiper Carousel Free mode with navigation */}
					<Swiper
						slidesPerView={6}
						spaceBetween={0}
						freeMode={true}
						navigation={showArrow}
						modules={[FreeMode, Navigation]}
						className='mySwiper '
					>
						{tilesImages.map(item => (
							<SwiperSlide>
								<div className='flex flex-col items-center justify-center min-w-[160px] max-w-[160px]'>
									<div className='flex w-32'>
										<Image src={item.src} width={130} height={130} />
									</div>
									<div className='flex justify-center w-full basis-full'>
										<span className='text-center text-white'>{item.name}</span>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default ImageTilesContainer;
