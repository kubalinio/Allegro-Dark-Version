import Image from "next/image"
import Link from "next/link"
import { urlFor } from "../../sanity"
import { Product } from "../../typings"


type Props = {
    products: Product[]
}

const HitsOffer = ({ products }: Props) => {
    return (
        <div className="flex flex-grow basis-full max-w-full w-full sm:basis-1/2 sm:max-w-[50%] sm:w-1/2 xl:basis-[34%] xl:max-w-[34%] xl:w-[34%]">
            <div className="px-8 py-6" >
                <h4 className="mb-4 text-xl font-bold text-white">Hity z reklamy</h4>

                {/* Product List */}
                <div className="flex flex-col gap-4 md:gap-2 ">
                    {products.slice(0, 4).map((product) => (
                        // Link
                        <div key={product._id} >
                            {/* // Product Card */}
                            <div className='flex'>
                                {/* //  Left Side */}
                                <div className='relative'>
                                    {/* Super cena */}
                                    {product.superPrice &&
                                        <div className='absolute top-0 left-0 mt-2 ml-[6px]'>
                                            <span className='text-white text-xs uppercase bg-green-700 px-1 py-[2px]'>SuperCena</span>
                                        </div>
                                    }
                                    {/* zdjecie */}
                                    <div className='w-24 h-[135px]' >
                                        <Image src={urlFor(product?.mainImage).url()} alt={product?.title} width={100} height={190} className='w-full h-full object-cover mt-5' />
                                    </div>
                                </div>

                                {/* right Side */}
                                <div className='text-white leading-5 ml-2 mb-2'>
                                    <ul>
                                        {/* Smart Okazja */}
                                        <li className='pt-2'>
                                            {product.smart && <>
                                                <span className='text-sm mr-2 bg-blue-900 px-1 py-[2px]'>Smart! okazja</span>
                                                <span className='text-xs text-gray-400 line-through'>55,99 zł</span>
                                            </>}
                                        </li>

                                        {/* Cena */}
                                        <li className='inline-block mt-3 mr-2'>
                                            <span className='text-2xl font-medium'>{product.price}<span className='text-sm ml-1'>zł</span></span>
                                        </li>

                                        {/* Smart */}
                                        <li className='inline-block'>
                                            {product.smart &&
                                                <a href='/smart' className='flex'>
                                                    <img
                                                        src='https://assets.allegrostatic.com/metrum/icon/smart-098a60541f.svg'
                                                        alt='Smart'
                                                        title='smart'
                                                        className='w-[48px] h-[16px] ml-1'
                                                    />
                                                </a>}
                                        </li>
                                        {/* Title Product */}
                                        <li>
                                            <Link href={`/oferta/${product.slug.current}`} className='text-xs font-bold '>
                                                {product.title}
                                            </Link>
                                        </li>
                                        {/* Time to delivery */}
                                        <li>
                                            <span className='text-xs text-green-500' >dostawa pojutrze</span>
                                        </li>
                                        {/* Pay later */}
                                        <li>
                                            {product.payLater &&
                                                <>
                                                    <span className='inline-block mr-2 text-xs' >zapłać później z</span>
                                                    <Image src='https://assets.allegrostatic.com/metrum/icon/pay-badge-473bd255d2.svg' width={36} height={18} alt='pay' className='inline-block' />
                                                </>
                                            }
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HitsOffer