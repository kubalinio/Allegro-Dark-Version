import Image from 'next/image';
import { useRouter } from 'next/router';
import { signIn, getSession } from 'next-auth/react';
import React, { useRef, useState } from 'react'
import Link from 'next/link';

const createUser = async (login, email, password) => {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ login, email, password }),
        headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
};


const AuthCreateForm = () => {


    const [enteredLogin, setEnteredLogin] = useState(false)
    const [enteredEmail, setEnteredEmail] = useState(false)
    const [enteredPassword, setEnteredPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    // function switchAuthModeHandler() {
    //     setIsLogin(prevState => !prevState);
    // }

    const handleEnteredLogin = (e) => {

        if (e.target.value) {
            setEnteredLogin(e.target.value)
        } else {
            setEnteredLogin('')
        }

    }
    const handleEnteredEmail = (e) => {

        if (e.target.value) {
            setEnteredEmail(e.target.value)
        } else {
            setEnteredEmail('')
        }

    }
    const handleEnteredPassword = (e) => {
        // console.log(e.target.value)

        if (e.target.value) {
            setEnteredPassword(e.target.value)

        } else {
            setEnteredPassword('')
        }

    }


    const submitHandler = async event => {
        event.preventDefault();
        // create new user
        const enteredLoginInput = enteredLogin
        const enteredEmailInput = enteredEmail
        const enteredPasswordInput = enteredPassword
        console.log(enteredEmailInput)

        try {
            const result = await createUser(enteredLoginInput, enteredEmailInput, enteredPasswordInput);
            // Frontend Show Client Success result of creating account
            console.log(result);
        } catch (error) {
            console.log(error);
        }

    }


    return (
        <section className='flex justify-center text-white' >
            <div className=' bg-allegro_dark flex grow w-full basis-full max-w-full sm:w-[84%] sm:basis-[84%] sm:max-w-[84%] md:w-[74%] md:basis-[74%] md:max-w-[540px] '  >
                <div className='w-full p-6'>
                    <h2 className='mb-4 text-2xl'>Stwórz Demo Konto</h2>

                    {/* CheckBox */}
                    <div className='flex items-center justify-start gap-2'>
                        <input value='email' id='email' type='radio' defaultChecked />
                        <label>E-mail</label>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler} className='flex flex-col '>

                        {/* Name */}
                        <div className='relative w-full mt-6'>
                            <input type='name' id='name' required onChange={handleEnteredLogin}
                                className={`peer bg-allegro_dark outline-none border-2 border-orange-400 hover:border-orange-600 w-full h-10 pl-2 rounded-md focus:placeholder:text-transparent focus:border-orange-500 ${enteredLogin === '' ? 'border-b-[3px] border-b-red-700' : ''} `} placeholder='Login' />

                            <label
                                className={`absolute top-[10px] left-2 px-2 text-sm overflow-hidden bg-allegro_dark select-none transition peer-focus:opacity-100 peer-focus:translate-y-[-21px] ${enteredEmail ? 'translate-y-[-21px] opacity-100 visible' : 'opacity-0'}`} >Login</label>

                            {enteredLogin === '' &&
                                <div className='mt-2 text-xs text-red-700' >Podaj login</div>
                            }
                        </div>
                        {/* Email */}
                        <div className='relative w-full mt-6'>
                            <input type='email' id='email' required onChange={handleEnteredEmail}
                                className={`peer bg-allegro_dark outline-none border-2 border-orange-400 hover:border-orange-600 w-full h-10 pl-2 rounded-md focus:placeholder:text-transparent focus:border-orange-500 ${enteredEmail === '' ? 'border-b-[3px] border-b-red-700' : ''} `} placeholder='email' />

                            <label
                                className={`absolute top-[10px] left-2 px-2 text-sm overflow-hidden bg-allegro_dark select-none transition peer-focus:opacity-100 peer-focus:translate-y-[-21px] ${enteredEmail ? 'translate-y-[-21px] opacity-100 visible' : 'opacity-0'}`} >e-mail</label>

                            {enteredEmail === '' &&
                                <div className='mt-2 text-xs text-red-700' >Podaj login lub email</div>
                            }
                        </div>

                        <div className='w-full mt-4 '>
                            <input type='password' id='password' required onChange={handleEnteredPassword} className={`w-full h-10 pl-2 border-2 border-orange-400 rounded-md outline-none bg-allegro_dark ${enteredPassword === '' ? 'border-b-[3px] border-b-red-700' : ''}`} placeholder='hasło' />

                            {enteredPassword === '' &&
                                <div className='mt-2 text-xs text-red-700'>Podaj hasło</div>
                            }

                        </div>

                        <div className='w-full mt-8 mb-4'>
                            <button type='submit' className='w-full px-6 py-2 text-center text-white uppercase bg-orange-500 rounded-sm hover:bg-orange-400'> stwórz demo konto
                            </button>
                        </div>
                    </form>

                    {/* lub */}
                    <div className='flex items-center justify-center text-gray-300 select-none'>
                        <hr className='h-[1px] w-full' />
                        <span className='px-2'>lub</span>
                        <hr className='h-[1px] w-full' />
                    </div>

                    {/* PRzekierowanie do logowania */}
                    <div className='w-full mt-4 mb-4'>
                        <Link href='/logowanie' type='button' className='w-full px-6 py-2 text-center text-white uppercase rounded-sm hover:text-gray-400 '>
                            zaloguj się
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
};

export default AuthCreateForm

// export const getStaticProps = async context => {
//     const session = await getSession(context)

//     if (session) {

//         return {
//             redirect: {
//                 destination: '/',
//                 permanent: false,
//             },
//         };
//     }

//     return {
//         props: { session },
//     };
// };