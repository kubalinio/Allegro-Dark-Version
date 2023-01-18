import React from 'react';

const UserContainer = () => {
	return (
		<div className='hidden bg-allegro_dark h-full p-1 py-6 xl:block xl:row-start-1 xl:row-end-1 xl:col-start-5'>
			{/* Container */}
			<div>
				{/* content  */}
				<div className='flex flex-col text-white'>
					<div className='flex grow p-2'>
						<a href='/' className='flex justify-center items-center'>
							<div className='flex justify-center items-center'>
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
					<div className='flex grow p-2'>
						<a href='/' className='flex justify-center items-center'>
							<div className='flex justify-center items-center'>
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

					<div className='flex grow p-2'>
						<a href='/' className='flex justify-center items-center'>
							<div className='flex justify-center items-center'>
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
				<div className='flex justify-center bg-orange-500 hover:bg-orange-400 mx-4 mt-3 text-white text-center rounded-sm'>
					<a href='/logowanie' className='uppercase px-16 py-2'>
						zaloguj się
					</a>
				</div>
			</div>
		</div>
	);
};

export default UserContainer;
