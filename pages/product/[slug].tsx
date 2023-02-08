import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import { groq } from 'next-sanity'
import { Product } from '../../typings'
import { sanityClient, urlFor } from '../../sanity';
import Layout from '../../components/Layout';

type Props = {
	product: Product[];
};

const ProductDetails = ({ product }) => {
	const { title, mainImage, price, smart, superPrice, hit, payLater } = product
	return (

		<div className='w-full mx-auto max-w-[1245px]'>
			<div className='flex flex-wrap '>
				{/* // Left Section */}
				<div className='w-full basis-full max-w-full md:w-[58%] md:basis-[58%] md:max-w-[58%] lg:w-[66%] lg:basis-[66%] lg:max-w-[66%] flex flex-col flex-grow pr-2 bg-white h-60'></div>

				{/* // Right Section */}
				<div className='w-full basis-full max-w-full md:w-[42%] md:basis-[42%] md:max-w-[42%] lg:w-[34%] lg:basis-[34%] lg:max-w-[34%] flex flex-col flex-grow pl-2 bg-red-500'>
					<div className='sticky'></div>
				</div>
			</div>
		</div>

	)
}

export const getStaticPaths = async () => {
	const query = groq`*[_type == "product"] {
		slug {
			current
		}
	}`;

	const products = await sanityClient.fetch(query);

	console.log(products)
	const paths = products.map(product => ({
		params: {
			slug: product.slug.current,
		},
	}));

	return {
		paths,
		fallback: 'blocking',
	};
};


export const getStaticProps: GetStaticProps<Props> = async ({ params: { slug } }) => {
	// const products: Product[] = await fetchProducts();

	const query = groq`*[_type == "product" && slug.current == '${slug}'][0]`;

	const product = await sanityClient.fetch(query)


	return {
		props: {
			product,
		},
		revalidate: 300,
	};
};




// export const getServerSideProps = async ({ params: { slug } }) => {

//     const query = groq`*[_type == "product" && slug.current == '${slug}'][0]`;
//     const productsQuery = '*[_type == "product"]';

//     const product = await sanityClient.fetch(query)


//     return {
//         props: { product }
//     }
// }

ProductDetails.getLayout = function getLayout(home: ReactElement) {
	return (
		<Layout>
			{home}
		</Layout>
	)
}

export default ProductDetails