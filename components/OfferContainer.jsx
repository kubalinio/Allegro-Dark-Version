import React from 'react';

const OfferContainer = () => {
	return (
		<div className='hidden bg-allegro_dark h-full p-6 xl:grid col-start-5 col-end-5 row-start-3 row-end-3 grid-cols-[100%] grid-rows-[auto 1fr auto 1fr] '>
			<h5 className='flex justify-center text-white'>Oferta wybrana dla Ciebie</h5>

			{/* Product */}
			<div className='my-2 '></div>

			{/* Button */}
			<div className='py-4'>
				<hr className=' border-t-[1px] border-t-allegro_dark-light' />
				<a href='/strefaokazji' className='flex justify-center py-2 text-white'>
					Zobacz więcej ofert
				</a>
			</div>
		</div>
	);
};

export default OfferContainer;
