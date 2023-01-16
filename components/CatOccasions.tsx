import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';

type Props = {}

const responsive = {
    desktop2: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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


const CatOccasions = (props: Props) => {
    const [showArrow, setShowArrow] = useState(false);

    return (
        <div className='w-full h-full' >

            <div onMouseOver={() => setShowArrow(true)} onMouseLeave={() => setShowArrow(false)} className=' mt-16 '>
                {/* Swiper Carousel Free mode with navigation */}
                <Carousel centerMode={true} responsive={responsive} >
                    {tilesImages.map((item, i) => (

                        <div key={i} className='flex flex-col items-center justify-center h-36  max-w-[100px] '>

                            <div className='flex w-[84px]'>
                                <Image alt='' src={item.src} width={84} height={84} />
                            </div>

                            <div className='text-center' >
                                <span className='text-sm text-white'>{item.name}</span>
                            </div>
                        </div>

                    ))}
                </Carousel>

            </div>
        </div>
    )
}

export default CatOccasions