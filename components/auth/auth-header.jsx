import Image from 'next/image'
import Link from 'next/link'


const AuthHeader = () => {
    return (
        <div className='max-w-screen-2xl mx-auto'>

            <div className='flex flex-wrap justify-between items-center lg:flex-nowrap mx-6 px-4 py-4 lg:py-2'>

                {/* Logo */}
                <h2 className='pr-6 text-orange-500 text-2xl flex items-center order-1 lg:order-none '>
                    <Link href='/' className='p-2'>
                        <Image
                            src='https://assets.allegrostatic.com/metrum/metrum-brand/allegro-347440b030.svg'
                            width={100}
                            height={40}
                            className='w-full'
                            alt='logo Allegro'
                        />
                    </Link>
                </h2>

                {/* Right Nav */}
                <div className='uppercase text-gray-400 hover:text-gray-300 p-2 cursor-pointer'>
                    <a href="/">Change Language</a>
                </div>
            </div>
        </div>
    )
}

export default AuthHeader