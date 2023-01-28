import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import {

    ChevronDownIcon,
    UserIcon

} from '@heroicons/react/24/outline';

import { signOut } from 'next-auth/react';

const UserPanelOffline = () => {

    return (
        <div className='flex flex-col p-4'>
            {/* Image */}
            <div>
                <Image src='https://a.allegroimg.com/original/122180/20799df0408198ded7d97a1c0167' width={287} height={184} alt='' className='object-contain w-full' />
            </div>

            {/* Hello */}
            <div className='text-center text-white'>
                <h3 className='my-3 text-xl font-semibold' >Witaj w Allegro!</h3>
                <p className='text-sm text-left text-gray-300 ' >Zaloguj się i zobacz swoje zakupy, obserwowane oferty i powiadomienia. W Allegro jesteś u siebie!</p>
            </div>

            {/* Button */}
            <div className='flex justify-center mt-6 text-center text-white bg-orange-500 rounded-sm hover:bg-orange-400'>
                <a href='/logowanie' className='px-16 py-2 uppercase'>
                    zaloguj się
                </a>
            </div>
        </div>


    )
}

const UserPanelOnline = () => {

    return (


        <div className='flex flex-col p-4'>

            {/* Button */}
            <div className='flex justify-center mt-6 text-center text-white bg-orange-500 rounded-sm hover:bg-orange-400'>
                <button onClick={() => signOut()} className='px-16 py-2 uppercase'>
                    wyloguj się
                </button>
            </div>
        </div>


    )
}


const UserPanel = ({ status }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null)
    const menuBtnRef = useRef(null);

    const handleDropdown = (e) => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
            setIsDropdownOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, []);

    return (
        <div className='relative mt-2 xl:ml-2'>
            {/* Button */}
            <button ref={menuBtnRef} type='button' onClick={handleDropdown} className='flex items-center py-2 text-white'>
                <UserIcon className='mr-0 icon-nav xl:hidden' />
                <span className='hidden mr-2 text-sm xl:block whitespace-nowrap'>Moje Allegro</span>
                <ChevronDownIcon className={`h-5 hidden xl:block ${!isDropdownOpen ? '' : 'rotate-180'} `} />
            </button>

            {/* Smart Icon */}
            <div className='hidden xl:block whitespace-nowrap absolute text-xs text-white right-6 top-[-19%] '>
                <a href='/smart' className='flex'>
                    <span>bądź</span>
                    <img
                        src='https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg'
                        alt='Smart'
                        title='smart'
                        className='w-[48px] h-[16px] ml-1'
                    />
                </a>
            </div>

            {/* Panel Logowania/klienta  */}
            <div ref={menuRef} data-role='dropdown-drop' className={`absolute top-14 xl:top-10 right-0 w-[288px] h-[400px] border-2 border-black bg-allegro_dark-light z-50 ${!isDropdownOpen ? 'hidden' : 'flex'}`}>

                {status === 'authenticated' ?
                    (<UserPanelOnline />) :
                    (<UserPanelOffline />)}

            </div>

        </div >
    )
}

export default UserPanel