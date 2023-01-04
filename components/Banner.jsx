import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
	const [showArrow, setShowArrow] = useState(false);

	return (
		<div className='bg-allegro_dark-light md:col-start-3 md:row-end-1 md:row-start-1 '>
			<div onMouseOver={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)}>
				<Carousel autoPlay showStatus={false} showThumbs={false} showArrows={showArrow} className='pb-14'>
					<div className='flex min-h-[250px]'>
						<img loading='lazy' src='https://a.allegroimg.com/original/12e895/e649bea640d5b98dcdbb4a9f3d25' alt='' />
					</div>

					<div className='flex min-h-[250px]'>
						<img loading='lazy' src='https://a.allegroimg.com/original/1248cd/92e4da2a458593f044ee66f85931' alt='' />
					</div>

					<div className='flex min-h-[250px]'>
						<img loading='lazy' src='https://a.allegroimg.com/original/129c61/bf78765b42599116f0e0534d451b' alt='' />
					</div>

					<div className='flex min-h-[250px]'>
						<img loading='lazy' src='https://a.allegroimg.com/original/12cdea/9e6a54f84008943bb5dbde2563a0' alt='' />
					</div>

					<div className='flex min-h-[250px]'>
						<img loading='lazy' src='https://a.allegroimg.com/original/125a34/69bb2b964752b51a150e907ce029' alt='' />
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Banner;
