import type { GetStaticProps } from 'next';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import useOnScreen from '../hooks/useOnScreen'

import Layout from '../components/Layout'
import StartingPage from '../components/startingPage/index'
// import MainSection from '../components/mainSection';
const MainSection = dynamic(() => import('../components/mainSection/index'), { ssr: false })

import { Product } from '../typings';
import { fetchProducts } from '../utils/fetchProducts';


type Props = {
	products: Product[];
};


export default function Home({ products }: Props) {
	const mainSectionRef = useRef();
	const mainSectionValue = useOnScreen(mainSectionRef)
	const [isMainSectionRef, setIsMainSectionRef] = useState(false)

	useEffect(() => {

		if (!isMainSectionRef) {
			setIsMainSectionRef(mainSectionValue)
		}

	}, [mainSectionValue])


	return (
		<>
			<StartingPage products={products} />
			<div ref={mainSectionRef} >
				{isMainSectionRef ?
					(<MainSection products={products} />)
					:
					(<div>Loading ...</div>)}
			</div>
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
		revalidate: 3000,
	};
};