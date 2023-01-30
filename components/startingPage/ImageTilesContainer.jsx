import { useState } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



import Image from 'next/image';

// const responsive = {
// 	desktop2: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 4
// 	},
// 	desktop1: {
// 		breakpoint: { max: 1024, min: 900 },
// 		items: 3
// 	},
// 	desktop: {
// 		breakpoint: { max: 900, min: 768 },
// 		items: 2
// 	},
// 	tablet2: {
// 		breakpoint: { max: 768, min: 600 },
// 		items: 3
// 	},
// 	tablet: {
// 		breakpoint: { max: 600, min: 464 },
// 		items: 2
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1
// 	}
// };

const settings = {
	className: "slider variable-width",
	dots: false,
	infinite: true,
	centerMode: false,
	slidesToShow: 1,
	slidesToScroll: 3,
	variableWidth: true
};

const tilesImages = [
	{
		name: 'Zimowa wyprzedaż',
		src: 'https://a.allegroimg.com/original/12eb8a/7de47ecd4f269d353e9d2ca1d9d4',
	},
	{
		name: 'Wszystko na zimę',
		src: 'https://a.allegroimg.com/original/12f390/2e5a96cf4c91a5949650ad933aa2',
	},
	{
		name: 'Darmowe dostawy',
		src: 'https://a.allegroimg.com/original/122be9/0da8057547d0aa56df7a62d41ff2',
	},
	{
		name: 'Pomagaj z WOŚP',
		src: 'https://a.allegroimg.com/original/12c95d/d6917e8f42cb9f7278b3c2d8a604',
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
		<div className='h-full px-6 py-6 bg-allegro_dark md:col-start-3 md:row-start-3 md:row-end-3'>
			<div>
				<h5 className='mb-4 font-bold text-white'>Warto zobaczyć</h5>

				<div onMouseOver={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)} className='mt-5'>

					<Slider {...settings}>
						{tilesImages.map((item, i) => (

							<div key={i} style={{ width: 159 }} className='flex flex-col items-center justify-center h-52 '>
								<div className='flex justify-center w-[150px]'>
									<Image alt='' src={item.src} width={130} height={130} />
								</div>
								<div className='flex justify-center w-full basis-full'>
									<span className='text-center text-white'>{item.name}</span>
								</div>
							</div>

						))}
					</Slider>


				</div>
			</div>
		</div>
	);
};

export default ImageTilesContainer;


{/* Swiper Carousel Free mode with navigation */ }
{/* <Carousel centerMode={true} responsive={responsive} >
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
					</Carousel> */}