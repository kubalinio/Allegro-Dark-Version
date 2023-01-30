import type { GetStaticProps } from 'next';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import useOnScreen from '../hooks/useOnScreen'

import Layout from '../components/Layout'
import StartingPage from '../components/startingPage/index'

const MainSection = dynamic(() => import('../components/mainSection/index'), { loading: () => <p className='text-xl'>Loading ...</p> })

import { Product } from '../typings';
import { fetchProducts } from '../utils/fetchProducts';

type Props = {
	products: Product[];
};

export default function Home({ products }: Props) {


	return (
		<>
			<StartingPage products={products} />
			<MainSection products={products} />
		</>
	);
}

Home.getLayout = function getLayout(home: ReactElement) {
	return (
		<Layout>
			{home}
		</Layout>
	)
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const products: Product[] = await fetchProducts();

	return {
		props: {
			products,
		},
		revalidate: 300,
	};
};

