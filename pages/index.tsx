import type { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Banner from '../components/Banner';
import ImageTilesContainer from '../components/ImageTilesContainer';
import Navigation from '../components/Navigation';
import OfferContainer from '../components/OfferContainer';
import UserContainer from '../components/UserContainer';
import HitsOffer from '../components/HitsOffer';

import { Product } from '../typings';
import { fetchProducts } from '../utils/fetchProducts';

type Props = {
	products: Product[];
};

export default function Home({ products }: Props) {
	return (
		<>
			{/* // Layout start page */}
			<section className='md:grid md:grid-cols-[296px_16px_minmax(0,1fr)_0] xl:grid-cols-[296px_16px_minmax(0,1fr)_16px_23%]  md:grid-rows-[auto_16px_1fr] '>
				<Navigation />
				<Banner />
				<UserContainer />
				<OfferContainer products={products} />
				<ImageTilesContainer />
			</section>

			{/* // Layout main section FLEX WRAP */}
			<section className='mt-4' >
				{/* Banner Full width */}
				<div className='relative'>
					<Image src='https://a.allegroimg.com/original/120eb4/b2bda4ea42dfac8d62033241a897' alt='Zimowa Wyprzedaż' width={1370} height={85} className='w-full h-full' />
					<Link href='/strefaokazji/wyprzedaz' target='_blank' className='absolute top-0 right-0 bottom-0 left-0' />
				</div>
				{/* Left Side Hit z reklamy */}
				<HitsOffer />
				{/* Right side Sprawdz najlepsze okazje */}
				{/**/}  {/* Carousela product  */}
				{/**/}  {/* Carousela z kategoriami ktore maja przeceny */}
			</section>
		</>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const products: Product[] = await fetchProducts();

	return {
		props: {
			products,
		},
		revalidate: 10,
	};
};
