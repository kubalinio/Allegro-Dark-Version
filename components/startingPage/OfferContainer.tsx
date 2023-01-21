import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { urlFor } from '../../sanity';
import { Product } from '../../typings';

type Props = {
	products: Product[]
}

const OfferContainer = ({ products }: Props) => {
	return (

		<div className='hidden relative bg-allegro_dark h-full px-6 pt-4 pb-10 xl:grid col-start-5 col-end-5 row-start-3 row-end-3 grid-cols-[100%] grid-rows-[auto 1fr auto 1fr] '>

			<h5 className=' text-white font-bold'>Oferta wybrana dla Ciebie</h5>

			{/* Product */}
			<div>
				{/* Product */}
				{products.slice(0, 1).map((product) => (
					// To ma być link, ogarnąć Hydration 
					<div key={product._id}>

						{/* // Product Card */}
						<div className='flex'>
							{/* //  Left Side */}
							<div className='relative mt-2'>
								{/* Super cena */}
								{product.superPrice &&
									<div className='absolute top-0 left-0 ml-1'>
										<span className='text-white text-xs uppercase bg-green-700 px-1 py-[2px]'>SuperCena</span>
									</div>
								}
								{/* zdjecie */}
								<div className='w-24 h-36' >
									<Image src={urlFor(product?.mainImage).url()} alt={product?.title} width={100} height={190} className='w-full h-full object-cover mt-5' />
								</div>
							</div>

							{/* right Side */}
							<div className='text-white ml-2 leading-5'>
								<ul>
									{/* Smart Okazja */}
									<li className='pt-2'>
										{product.smart && <>
											<span className='text-sm mr-2 bg-blue-900 px-1 py-[2px]'>Smart! okazja</span>
											<span className='text-xs text-gray-400 line-through'>55,99 zł</span>
										</>}
									</li>

									{/* Cena */}
									<li className='inline-block mt-3 mr-2'>
										<span className='text-2xl font-medium'>{product.price}<span className='text-sm ml-1'>zł</span></span>
									</li>

									{/* Smart */}
									<li className='inline-block'>
										{product.smart &&
											<a href='/smart' className='flex'>
												<img
													src='https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg'
													alt='Smart'
													title='smart'
													className='w-[48px] h-[16px] ml-1'
												/>
											</a>}
									</li>
									{/* Title Product */}
									<li>
										<Link href={`/oferta/${product.slug.current}`} className='text-xs font-bold'>
											{product.title}
										</Link>
									</li>
									{/* Time to delivery */}
									<li>
										<span className='text-xs text-green-500' >dostawa pojutrze</span>
									</li>
									{/* Pay later */}
									<li>
										{product.payLater &&
											<>
												<span className='inline-block mr-2 text-xs' >zapłać później z</span>
												<Image src='https://assets.allegrostatic.com/metrum/icon/pay-badge-473bd255d2.svg' width={36} height={18} alt='pay' className='inline-block' />
											</>
										}
									</li>

								</ul>
							</div>

						</div>


					</div>

				))}

			</div>

			{/* Button */}
			< div className='absolute bottom-0 w-full px-6' >

				<hr className=' border-t-[1px] border-t-allegro_dark-light' />
				<a href='/strefaokazji' className='flex justify-center py-2 uppercase text-gray-200 hover:text-white'>
					Zobacz więcej ofert
				</a>

			</div >

		</div>

	);
};

export default OfferContainer;
