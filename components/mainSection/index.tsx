import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Product } from '../../typings'
import TilesGroup from './TilesGroup'
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
                <Link href='/strefaokazji/wyprzedaz' target='_blank' className='absolute top-0 bottom-0 left-0 right-0' />
            </div>

            <div className='flex flex-wrap w-full gap-4 my-4 '>
                <HitsOffer products={products} />

                <MainOccasions products={products} />

                <TilesGroup />
            </div>

        </section>
    )
}

export default MainSection

