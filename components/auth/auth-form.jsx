import Image from 'next/image';
import { useRouter } from 'next/router';
import { signIn, getSession } from 'next-auth/react';
import React, { useRef, useState } from 'react'



const AuthForm = () => {
    // const emailInputRef = useRef();
    // const passwordInputRef = useRef();

    const [enteredEmail, setEnteredEmail] = useState(false)
    const [enteredPassword, setEnteredPassword] = useState(false)
    const [isLogin, setIsLogin] = useState(true);
    const router = useRouter();

    // function switchAuthModeHandler() {
    //     setIsLogin(prevState => !prevState);
    // }

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

        // optional: Add validation

        if (isLogin) {
            // log user in
            const result = await signIn('credentials', { redirect: false, email: setEnteredEmail, password: setEnteredPassword });

            if (!result.error) {
                //set some Auth state
                router.push('/profile');
            }
        } else {
            // create new user
            try {
                const result = await createUser(enteredEmail, enteredPassword);
                // Frontend Show Client Success result of creating account
                console.log(result);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <section className='flex justify-center text-white' >
            <div className=' bg-allegro_dark flex grow w-full basis-full max-w-full sm:w-[84%] sm:basis-[84%] sm:max-w-[84%] md:w-[74%] md:basis-[74%] md:max-w-[540px] '  >
                <div className='w-full p-6'>
                    <h2 className='mb-4 text-2xl'>Zaloguj się</h2>

                    {/* CheckBox */}
                    <div className='flex items-center justify-start gap-2'>
                        <input value='email' id='email' type='radio' defaultChecked />
                        <label>Login lub e-mail</label>
                    </div>

                    {/* Form */}
                    <form onSubmit={submitHandler} className='flex flex-col '>

                        <div className='relative w-full mt-6'>
                            <input type='email' id='email' required onChange={handleEnteredEmail}
                                className={`peer bg-allegro_dark outline-none border-2 border-orange-400 hover:border-orange-600 w-full h-10 pl-2 rounded-md focus:placeholder:text-transparent focus:border-orange-500 ${enteredEmail === '' ? 'border-b-[3px] border-b-red-700' : ''} `} placeholder='login lub email' />

                            <label
                                className={`absolute top-[10px] left-2 px-2 text-sm overflow-hidden bg-allegro_dark select-none transition peer-focus:opacity-100 peer-focus:translate-y-[-21px] ${enteredEmail ? 'translate-y-[-21px] opacity-100 visible' : 'opacity-0'}`} >login lub hasło</label>

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
                            <button type='button' className='w-full px-6 py-2 text-center text-white uppercase bg-orange-500 rounded-sm hover:bg-orange-400'>
                                zaloguj się
                            </button>
                        </div>
                    </form>

                    {/* lub */}
                    <div className='flex items-center justify-center text-gray-300 select-none'>
                        <hr className='h-[1px] w-full' />
                        <span className='px-2'>lub</span>
                        <hr className='h-[1px] w-full' />
                    </div>

                    {/* Providers Google i Fb */}
                    <div className='mt-4 text-base'>

                        <button onClick={() => signIn()} className='relative flex items-center justify-center h-10 w-full bg-allegro_dark-light focus:bg-[#323232]'>
                            <Image src='https://assets.allegrostatic.com/metrum/icon/google-e101bd3c2c.svg' width={40} height={40} alt='logo Google'
                                className='absolute left-0 p-1'
                            />
                            <span>Zaloguj się używając Google</span>
                        </button>

                        <button className='relative flex items-center justify-center h-10 w-full bg-allegro_dark-light mt-4 focus:bg-[#323232]'>
                            <Image src='https://assets.allegrostatic.com/metrum/icon/facebook-0899000a10.svg' width={40} height={40} alt='logo Google'
                                className='absolute left-0 p-1'
                            />
                            <span>Zaloguj się używając Facebooka</span>
                        </button>


                    </div>
                </div>
            </div>

        </section>
    )
}

export default AuthForm

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