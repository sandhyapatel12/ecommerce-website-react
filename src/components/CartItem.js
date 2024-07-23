import React from 'react'
import FormatPrice from '../helper/FormatPrice'
import AmountToggle from './AmountToggle'

const CartItem = ({ id, name, image, productColor, price, productQuantity }) => {

    
    //usestate for set productQuantity
    // const [productQuantity, setproductQuantity] = useState(1)

    const setIncrese = () => {
        // if productQuantity == or smaller than stock --> than user increse quantity of productQuantity when stock value = productQuantity then not increse
        // productQuantity < stock ? setproductQuantity(productQuantity + 1) : setproductQuantity(stock)

    }

    const setDecrese = () => {
        //if productQuantity more than 1 --> than user can decrese quantity into productQuantity when remain product 1 otherwise not decrese
        // productQuantity > 1 ? setproductQuantity(productQuantity - 1) : setproductColor(1)
    }

    return (
        <>
            <div className="container mx-auto max-w-7xl">

                <div className="grid grid-cols-5 gap-5  font-semibold mb-2 mt-5 ">


                    {/* items */}
                    <div className=''>

                        <figure>
                            <img src={image} className='h-20 w-36' />
                        </figure>


                        <div className='mt-2'>

                            <p>{name}</p>

                            <div className='flex items-center space-x-2'>

                                <p >color:</p>
                                <p style={{ backgroundColor: productColor, color: productColor }} className='h-4 w-4 rounded-full overflow-hidden'>color: {productColor}</p>

                            </div>

                        </div>
                    </div>

                    {/* price */}


                    <p className='text-center'><FormatPrice price={price} /></p>

                    {/* quantity  */}
                    <div className='ml-12'>
                        <AmountToggle
                            productQuantity={productQuantity}
                            setIncrese={setIncrese}
                            setDecrese={setDecrese} />
                    </div>

                    {/* Subtotal */}
                    <p className='text-center'><FormatPrice price={price * productQuantity} /></p>

                    {/* remove */}
                    <i className="fa-solid fa-trash text-lg text-green-700 cursor-pointer hover:text-green-800 text-center"></i>

                </div>
            </div>


        </>
    )
}

export default CartItem