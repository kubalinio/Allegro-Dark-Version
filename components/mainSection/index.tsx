import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Product } from '../../typings'
import CatOccasions from './CatOccasions'
import HitsOffer from './HitsOffer'
import MainOccasions from './MainOccasions'

type Props = {
    products: Product[];
};

const MainSection = ({ products }: Props) => {
    return (
        <section className='mt-4' >
            {/* Banner Full width */}
            <div className='relative'>
                <Image src='https://a.allegroimg.com/original/120eb4/b2bda4ea42dfac8d62033241a897' alt='Zimowa Wyprzedaż' width={1370} height={85} className='w-full h-full' />
                <Link href='/strefaokazji/wyprzedaz' target='_blank' className='absolute top-0 right-0 bottom-0 left-0' />
            </div>

            <div className='flex flex-wrap'>
                {/* Left Side Hit z reklamy */}
                <HitsOffer products={products} />

                {/* Right side Sprawdz najlepsze okazje */}
                <div className='flex flex-col flex-grow p-6 basis-full max-w-full w-full sm:basis-1/2 sm:max-w-[50%] sm:w-1/2 xl:basis-[66%] xl:max-w-[66%] xl:w-[66%]'>
                    {/**/}  {/* Carousela product  */}
                    <MainOccasions products={products} />
                    {/**/}  {/* Carousela z kategoriami ktore maja przeceny */}
                    <CatOccasions />
                </div>

            </div>

        </section>
    )
}

export default MainSection

