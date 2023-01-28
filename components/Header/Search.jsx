import React, { useEffect, useRef, useState } from 'react'

import {
    MagnifyingGlassIcon as SearchIcon,
    ChevronDownIcon,
    ArrowTrendingUpIcon

} from '@heroicons/react/24/outline';

import { HiOutlineArrowTrendingUp } from 'react-icons/hi'
import Link from 'next/link';

const popularSearched = [
    {
        title: 'iphone 13 pro max'
    },
    {
        title: 'iphone 13 pro max'
    },
    {
        title: 'iphone 13 pro max'
    },
    {
        title: 'iphone 13 pro max'
    },
    {
        title: 'iphone 13 pro max'
    }
]

const Search = () => {
    const [searchActive, setSearchActive] = useState(false)
    const searchRef = useRef(null)
    const searchInputRef = useRef(null);

    const handleSearchActive = () => {
        setSearchActive(true)
    }

    const handleClickOutside = (e) => {
        if (searchInputRef.current.contains(e.target)) {
            setSearchActive(true);
        } else if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearchActive(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, []);

    return (


        <div className='lg:mx-4h-10 w-full lg:w-[54%] rounded-sm flex-grow  order-3 lg:order-none my-3 border border-orange-500 '>
            <form className='relative z-50 flex items-center bg-allegro_dark-light'>

                <input ref={searchInputRef} onClick={handleSearchActive}
                    className='flex-grow flex-shrink h-full px-4 py-1 overflow-hidden text-white rounded-l-sm bg-allegro_dark-light basis-0 focus:outline-none '
                    type='text'
                    placeholder='czego szukasz?'
                />

                {/* Sugesstion List */}
                <div ref={searchRef} className={`${searchActive ? 'block' : 'hidden'} absolute left-0 right-0 z-40 text-white top-[41px] bg-allegro_dark-light border border-t-0 border-orange-300`}>
                    {popularSearched.map((result) => (

                        <Link href='/' className='flex px-3 py-[2px] hover:bg-[#333333] '>
                            <ArrowTrendingUpIcon className='w-5 mr-4' />
                            <div className='flex flex-col'>
                                <div className='text-base' >{result.title}</div>
                                <div className='text-xs font-bold text-gray-400'>Popular</div>
                            </div>
                        </Link>
                    ))
                    }

                    {/* <div>
                        <input type="checkbox" />
                        <label>szukaj też w opisach ofert</label>
                    </div> */}

                </div>


                {/* Multi Search button  */}
                <div className='py-2 pr-2 text-gray-400 hover:text-gray-200 '>
                    <a href="#multisearch" >szukaj wielu</a>
                </div>
                {/* Search Filter */}

                <div className='hidden relative sm:flex grow items-center border-l h-[40.2px] min-w-[130px] max-w-[185px] border-orange-600 text-white'>

                    <span className='absolute top-0 bottom-0 left-0 py-2 pl-3 right-10 '>Wszędzie</span>
                    <div className='w-full h-full bg-[#292929] cursor-pointer'>
                        <select className='w-full h-full pl-2 pr-10 border-2 border-black outline-none opacity-0 cursor-pointer bg-inherit '>
                            <option value="/listing" >Wszystkie kategorie</option>
                            <optgroup label='Kategorie'>
                                <option value="/kategoria/">Dom i ogród</option>
                                <option value="/kategoria/">Dziecko</option>
                                <option value="/kategoria/">Elektronika</option>
                                <option value="/kategoria/">Firma i usługi</option>
                                <option value="/kategoria/">Kolekcje i sztuka</option>
                                <option value="/kategoria/">Kultura i rozrywka</option>
                                <option value="/kategoria/">Moda</option>
                                <option value="/kategoria/">Motoryzacja</option>
                                <option value="/kategoria/">Nieruchomości</option>
                                <option value="/kategoria/">Sport i turystyka</option>
                                <option value="/kategoria/">Supermarket</option>
                                <option value="/kategoria/">Uroda</option>
                                <option value="/kategoria/">Zdrowie</option>
                            </optgroup>
                            <optgroup label='Inne opcje'>
                                <option value="/charytatywni/">Cele charytatywne</option>
                                <option value="/charytatywni/">Organizacje charytatywne</option>
                                <option value="/uzytkownik/">Sprzedawcy</option>
                                <option value="/zakonczenie/">Zakończone</option>

                            </optgroup>
                        </select>
                        <ChevronDownIcon className='absolute top-0 right-0 h-full p-1 overflow-hidden text-gray-400 pointer-events-none' />
                    </div>
                </div>

                {/* Button */}
                <button className='h-full p-1 text-white bg-orange-500 md:py-2 md:px-4 hover:bg-orange-600'>
                    <SearchIcon className='w-8 h-8 p-1 text-white md:hidden' />
                    <span className='hidden uppercase md:block'>szukaj</span>
                </button>
            </form >
        </div >

    )
}

export default Search