/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['links.papareact.com', 'fakestoreapi.com', 'a.allegroimg.com', 'cdn.sanity.io'],
	},
	env: {
		stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
	},
};
