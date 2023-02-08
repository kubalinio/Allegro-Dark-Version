import { useEffect, useRef, useState } from 'react';

import UserPanel from './UserPanel'
import Basket from './Basket'
import Notifications from './Notifications'

import {
    EllipsisHorizontalCircleIcon,
    StarIcon,
    ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

// Czat
const Chat = ({ status, menuRef, menuBtnRef }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


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

    const ContentOnline = () => (
        <p className='text-2xl text-center'>Nie masz wiadomości</p>
    )

    const ContentOffline = () => (
        <>
            <p className='text-sm text-center'>Zaloguj się, aby zobaczyć swoje wiadomości.</p>

            {/* Button */}
            <div className='mt-6 mb-8'>
                <a href='/logowanie' className='px-6 py-2 text-center text-white uppercase bg-orange-500 rounded-sm hover:bg-orange-400 '>
                    zaloguj się
                </a>
            </div>
        </>
    )

    const navbarHeight = '60px';
    const footerHeight = '200px';

    return (
        <div className='relative'>
            <div ref={menuBtnRef} onClick={handleDropdown} className='mr-1'>
                <ChatBubbleLeftRightIcon className='icon-nav' />
            </div>

            <div style={{ height: `calc(100vh - ${navbarHeight} - ${footerHeight})` }} ref={menuRef} className={`absolute ${!isDropdownOpen ? 'hidden' : 'flex'} top-12 right-10 xl:right-8 translate-x-1/2 w-[300px]  bg-allegro_dark-light border-2 border-black z-50`}>
                <div className='flex flex-col items-center justify-center w-full text-white'>

                    {status === 'authenticated' ? (<ContentOnline />) : (<ContentOffline />)}
                </div>
            </div>

        </div>
    )
}
//// Chat End 

const Navbar = ({ status }) => {
    const menuRef = useRef(null);
    const menuBtnRef = useRef(null);

    return (
        <nav className='relative flex items-center order-2 ml-auto lg:order-none md:ml-4 xl:ml-6'>

            <div className='mr-1'>
                <EllipsisHorizontalCircleIcon className='icon-nav' />
            </div>

            <div className='mr-1'>
                <a href='/'>
                    <StarIcon className='icon-nav' />
                </a>
            </div>

            <Chat status={status} menuRef={menuRef} menuBtnRef={menuBtnRef} isDropdownOutside={isDropdownOutside} />

            <Notifications status={status} menuRef={menuRef} menuBtnRef={menuBtnRef} />

            <Basket status={status} menuRef={menuRef} menuBtnRef={menuBtnRef} />

            <UserPanel status={status} menuRef={menuRef} menuBtnRef={menuBtnRef} />
        </nav>
    )
}

export default Navbar