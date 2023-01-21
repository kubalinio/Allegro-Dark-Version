import Banner from './Banner'
import Navigation from './Navigation'
import UserContainer from './UserContainer'
import OfferContainer from './OfferContainer'
import ImageTilesContainer from './ImageTilesContainer'
import { Product } from '../../typings';


type Props = {
    products: Product[];
};

const StartingPage = ({ products }: Props) => {
    return (
        <section className='md:grid md:grid-cols-[296px_16px_minmax(0,1fr)_0] xl:grid-cols-[296px_16px_minmax(0,1fr)_16px_23%]  md:grid-rows-[auto_16px_1fr] '>
            <Navigation />
            <Banner />
            <UserContainer />
            <OfferContainer products={products} />
            <ImageTilesContainer />
        </section>
    )
}

export default StartingPage

