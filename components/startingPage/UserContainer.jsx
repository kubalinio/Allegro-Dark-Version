import { useSession } from 'next-auth/react'
import Link from 'next/link';

const UserContainer = () => {
	const { data: session, status } = useSession()

	return (
		<div className='hidden h-full p-1 py-6 bg-allegro_dark xl:block xl:row-start-1 xl:row-end-1 xl:col-start-5'>
			{/* Container */}
			<div>

				{/* content  */}
				<div className='flex flex-col text-white'>
					{status === 'authenticated' ?
						(<div className='flex p-2 grow'>
							<p className='ml-2 text-base font-semibold'>Cześć, {session?.user.name}</p>
						</div>) : ''
					}

					<div className='flex p-2 grow'>
						<a href='/' className='flex items-center justify-center'>
							<div className='flex items-center justify-center'>
								<img
									src='https://a.allegroimg.com/original/12316d/2268070d49aaab12c8e5983855b0'
									alt='Sprawdź Allegro Smart!'
									className='w-12 h-12 mx-2'
								/>
							</div>
							<div>
								<p className='ml-2 text-sm'>Darmowe dostawy z Allegro Smart!</p>
							</div>
						</a>
					</div>
					<div className='flex p-2 grow'>
						<a href='/' className='flex items-center justify-center'>
							<div className='flex items-center justify-center'>
								<img
									src='https://a.allegroimg.com/original/12092f/c3813a694866ac18da107e5fa5e0'
									alt='Zbieraj Monety'
									className='w-12 h-12 mx-2'
								/>
							</div>
							<div>
								<p className='ml-2 text-sm'>Zbieraj Monety!</p>
							</div>
						</a>
					</div>

					<div className='flex p-2 grow'>
						<a href='/' className='flex items-center justify-center'>
							<div className='flex items-center justify-center'>
								<img
									src='https://a.allegroimg.com/original/126037/31bef5314fee997dbfbd66142ee7'
									alt='Oceń produkty'
									className='w-12 h-12 mx-2'
								/>
							</div>
							<p className='ml-2 text-sm'>Oceń produkty</p>
						</a>
					</div>
				</div>

				{/* Button */}
				<div className='relative flex justify-center mx-4 mt-3 overflow-hidden text-center text-white duration-200 bg-orange-500 rounded-sm hover:bg-orange-400'>

					{status === "authenticated" ?
						'' : (
							<Link href='/logowanie' className='px-16 py-2 uppercase transition-colors duration-200 button-after'>
								<span className='relative z-10 '>zaloguj się</span>
							</Link>
						)}
				</div>

			</div>
		</div >
	);
};



export default UserContainer;
