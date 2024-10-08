import React from 'react'
import FormatPrice from '../helper/FormatPrice'
import AmountToggle from './AmountToggle'
import { useCustomcartContext } from '../context/AddCartContext'

const CartItem = ({ id, name, image, productColor, price, productQuantity }) => {

    //destructure
    const { removeProduct, setIncrese, setDecrese } = useCustomcartContext();

    return (
        <>
            <div className="container mx-auto max-w-7xl">

                {/* div for small devices */}
                <div className='grid grid-cols-2 border border-green-800 rounded-md mt-5 md:max-w-xl lg:max-w-2xl mx-auto'>

                    {/* product image */}
                    <div className='w-full py-2 px-3 space-y-2'>
                        <figure>
                            <img src={image} className='h-28  ' />
                        </figure>

                        <button onClick={() => removeProduct(id)}
                            className='bg-yellow-500 font-semibold px-5 py-1 w-fit rounded-md'>Remove</button>

                    </div>

                    <div className='w-full py-2  space-y-1'>
                        {/* product name */}
                        <p className='text-lg font-semibold'>{name}</p>

                        {/* color */}
                        <div className='flex items-center space-x-2'>
                            <p >color:</p>
                            <p style={{ backgroundColor: productColor, color: productColor }} className='h-4 w-4 rounded-full overflow-hidden'>color: {productColor}</p>
                        </div>

                        {/* price */}
                        <p className='text-lg font-extrabold'><FormatPrice price={price} /></p>

                        {/* quantity  */}
                        <div className=''>
                            <AmountToggle
                                productQuantity={productQuantity}
                                setIncrese={() => setIncrese(id)}
                                setDecrese={() => setDecrese(id)} />
                        </div>


                        {/* Subtotal */}
                        <p className='font-bold'>Total: <FormatPrice price={price * productQuantity} /></p>



                    </div>

                </div>

            </div>


        </>
    )
}

export default CartItem