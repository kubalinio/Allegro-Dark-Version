import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Carousel from 'react-multi-carousel'
import { urlFor } from '../../sanity';
import { Product } from '../../typings'

const responsive = {
    desktop2: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    desktop1: {
        breakpoint: { max: 1280, min: 900 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 900, min: 768 },
        items: 1
    },
    tablet2: {
        breakpoint: { max: 768, min: 600 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 600, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

type Props = {
    products: Product[]
}

const MainOccasions = ({ products }: Props) => {
    return (

        <div className="flex flex-col  flex-grow p-6 basis-full max-w-full w-full bg-allegro_dark sm:basis-[48%] sm:max-w-[48%] sm:w-[48%] xl:basis-[33%] xl:max-w-[33%] xl:w-[33%]">

            <div className='flex flex-col w-full'>

                <div className='w-full'>
                    <h5 className='mb-4 text-xl font-bold text-white'>Warto zobaczyć</h5>
                    {/* Swiper Carousel Free mode with navigation */}
                    <Carousel centerMode={true} responsive={responsive}  >
                        {products.map((product) => (

                            <div key={product._id} className='flex flex-col min-w-[225px] max-w-[225px] '>
                                {/* //  Left Side */}
                                <div className='relative w-full'>
                                    {/* Super cena */}
                                    {product.superPrice &&
                                        <div className='absolute top-0 left-0 mt-2 ml-[6px]'>
                                            <span className='text-white text-xs uppercase bg-green-700 px-1 py-[2px]'>SuperCena</span>
                                        </div>
                                    }
                                    {/* zdjecie */}
                                    <div className='h-[250px]' >
                                        <Image src={urlFor(product?.mainImage).url()} alt={product?.title} width={100} height={190} className='w-full h-full object-contain mt-5' />
                                    </div>
                                </div>

                                {/* right Side */}
                                <div className='text-white leading-5 ml-2 mb-2'>
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
                                            <Link href={`/oferta/${product.slug.current}`} className='text-xs font-bold '>
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

                        ))}
                    </Carousel>

                </div>
            </div>

            {/* See more */}
            <div className='text-gray-200 text-center px-6 mt-4'>
                <hr className='border-t-[1px] border-t-gray-400 mb-3' />
                <Link href='/' className='uppercase tracking-wider' >Zobacz więcej</Link>
            </div>
        </div>
    )
}

export default MainOccasions