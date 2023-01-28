import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Basket = () => {
    const [showBasketProducts, setShowBasketProducts] = useState(false)

    const handleShowProduct = (show) => {
        const width = window.innerWidth

        if (width >= 768) {
            setShowBasketProducts(show)
        }
    }
    return (
        <>
            {/* Basket */}
            <div className='relative mr-1 '>
                {/* Basket icon */}
                <div onMouseEnter={() => handleShowProduct(true)} onMouseLeave={() => handleShowProduct(false)} className='relative cursor-pointer group/span' >

                    <ShoppingBagIcon className={`icon-nav group-hover/span:text-orange-500 ${showBasketProducts ? 'text-orange-500' : ''}`} />
                    <span className='absolute bottom-0 flex items-center justify-center w-2 h-2 p-2 text-xs text-white bg-orange-500 cursor-pointer right-4 rounded-xl'>
                        0
                    </span>

                </div>

                {/* Dynamic List Product */}

                <AnimatePresence>
                    {showBasketProducts ?
                        <motion.section
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ ease: 'easeInOut', duration: 0.25 }}
                            onMouseEnter={() => handleShowProduct(true)} onMouseLeave={() => handleShowProduct(false)} className={`absolute right-0 w-[460px] top-12 bg-allegro_dark-light text-white border-2 border-black z-50  `}>

                            <div className='relative'>
                                <h3 className='w-full py-2 pl-4 text-base font-bold bg-allegro_dark '>Twój koszyk</h3>
                                <div className='p-4 my-4 text-sm text-center text-gray-300 bg-allegro_dark'>
                                    <h4 className='mb-4 text-2xl' >Twoj koszyk jest pusty</h4>
                                    <p className='mt-4'>Dodaj do koszyka przedmioty i kup je szybko i wygodnie.</p>
                                    <p className='mt-4'>Przez koszyk możesz kupić za jednym razem do 50 przedmiotów od różnych sprzedawców.</p>
                                </div>

                                {/* Buffor */}
                                <div className='absolute left-[-10px] top-0 bottom-0' />
                                <div className='absolute right-[-10px] top-0 bottom-0' />
                                <div className='absolute left-0 h-[10px] top-[-10px] right-0' />
                                <div className='absolute left-0 h-[10px] bottom-[-10px] right-0' />
                            </div>

                        </motion.section>
                        : ''}
                </AnimatePresence>



            </div>
        </>
    )
}

export default Basket