import React, { useEffect, useRef, useState } from 'react'

import { BellIcon } from '@heroicons/react/24/outline';

const NotificationOnline = () => (
    <div className='w-full p-4 text-sm text-center text-white border-2 border-black bg-allegro_dark-light' >

        <p>Nie masz żadnych nowych powiadomień.</p>

    </div>
)

const NotificationOffline = () => (
    <div className='w-full p-4 text-sm text-center text-white border-2 border-black bg-allegro_dark-light' >

        <p>Zaloguj się, aby zobaczyć <br /> swoje powiadomienia.</p>

        {/* Button */}
        <div className='mt-4 mb-8'>

            <a href='/logowanie' className='px-6 py-2 text-center text-white uppercase bg-orange-500 rounded-sm hover:bg-orange-400 '>
                zaloguj się
            </a>
        </div>


        <p>Nie masz jeszcze konta?</p>

        <a href="/" className='px-4 py-2 leading-10 tracking-widest text-gray-400 uppercase hover:text-gray-300'>Zarejestruj się</a>
    </div>
)

const Notifications = ({ status }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);
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

        <div className='relative mr-1'>
            {/* Icon */}
            <div ref={menuBtnRef} onClick={handleDropdown} className='cursor-pointer group/span' >

                <BellIcon className={`icon-nav ${!isDropdownOpen ? '' : 'text-orange-500'} group-hover/span:text-orange-500 `} />
                <span className='absolute bottom-0 flex items-center justify-center w-2 h-2 p-2 text-xs text-white bg-orange-500 right-4 rounded-xl'>
                    0
                </span>
            </div>

            {/* Notification Content Offline */}

            <div ref={menuRef} className={`absolute ${!isDropdownOpen ? 'hidden' : 'flex'} top-12 right-10 xl:right-8 translate-x-1/2 w-[300px] z-50 `}>

                {status === 'authenticated' ? (<NotificationOnline />) : (<NotificationOffline />)}


            </div>

        </div>
    )
}

export default Notifications