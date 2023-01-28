import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TilesGroup = () => {
    return (
        <div className='flex flex-grow justify-center basis-full max-w-full w-full  xl:basis-[32.8%] xl:max-w-[32.8%] xl:w-[32.8%]'>

            <ul className='grid list-none gap-4 grid-cols-2 md:grid-cols-4 xl:flex-auto xl:grid-cols-2'  >
                <li className='bg-gray-300 w-full overflow-hidden relative'>
                    <Image src='https://a.allegroimg.com/original/1272dc/40cb0b4542a2a22144c9eef497f1' width={300} height={300} alt='' className='object-cover w-full h-full' />
                    <Link href='/' className='absolute inset-0' />
                </li>
                <li className='bg-gray-300 w-full overflow-hidden relative'>
                    <Image src='https://a.allegroimg.com/original/1272dc/40cb0b4542a2a22144c9eef497f1' width={300} height={300} alt='' className='object-cover w-full h-full' />
                    <Link href='/' className='absolute inset-0' />
                </li>
                <li className='bg-gray-300 w-full overflow-hidden relative'>
                    <Image src='https://a.allegroimg.com/original/1272dc/40cb0b4542a2a22144c9eef497f1' width={300} height={300} alt='' className='object-cover w-full h-full' />
                    <Link href='/' className='absolute inset-0' />
                </li>
                <li className='bg-gray-300 w-full h-auto overflow-hidden relative'>
                    <Image src='https://a.allegroimg.com/original/1272dc/40cb0b4542a2a22144c9eef497f1' width={300} height={300} alt='' className='object-cover w-full h-full' />
                    <Link href='/' className='absolute inset-0' />
                </li>
            </ul>
        </div>
    )
}

export default TilesGroup
