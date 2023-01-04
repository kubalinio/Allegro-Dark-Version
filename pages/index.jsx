import Banner from '../components/Banner';
import ImageTilesContainer from '../components/ImageTilesContainer';
import Navigation from '../components/Navigation';
import OfferContainer from '../components/OfferContainer';
import UserContainer from '../components/UserContainer';

export default function Home() {
	return (
		// Layout start page
		<div className='md:grid md:grid-cols-[296px_16px_minmax(0,1fr)_0] xl:grid-cols-[296px_16px_minmax(0,1fr)_16px_23%]  md:grid-rows-[auto_16px_1fr] '>
			<Navigation />
			<Banner />
			<UserContainer />
			<OfferContainer />
			<ImageTilesContainer />
		</div>
	);
}
