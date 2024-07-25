import React from 'react'
import { useCustomcartContext } from '../context/AddCartContext'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice';

const Cart = () => {

  //destructure
  const { cart, clearCart, total_price, shipping_fee, total_items } = useCustomcartContext();


  //when add to cart page is empty
  if (cart.length === 0) {
    return <h1 className='text-xl text-center mt-10'>Not yet added any Product</h1>
  }

  //else 
  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center mt-5">Shopping Cart</h2>

      <div className="container mx-auto max-w-7xl px-3 pb-10 lg:px-10 grid grid-cols-1  lg:grid-cols-2 w-full  	 ">

        {/* left side */}
        <div className=' w-full'>
          {cart.map((curElem, index) => {
            return <CartItem key={index}  {...curElem} />
          })
          }

          <div className='space-y-3 mt-5   '>
            <NavLink to='/products'>
              <button className='bg-purple-900 hover:bg-purple-950 rounded-md text-gray-300 font-semibold px-5 py-2 w-full md:max-w-xl md:mx-auto md:flex md:justify-center '>Countinue Shopping</button>
            </NavLink>

            <button
              onClick={clearCart}
              className='bg-yellow-500 hover:bg-yellow-600 rounded-md text-black font-semibold px-5 py-2 w-full md:max-w-xl md:mx-auto md:flex md:justify-center'>Clear Cart</button>
          </div>
        </div>

        {/* right side */}

        {/* display total order */}
        <div className=' bg-white border border-gray-400 shadow-md h-fit space-y-5  mt-5 rounded-md  py-2 w-full  lg:w-4/5 lg:ml-10 md:max-w-sm md:mx-auto md:flex md:flex-col md:items-center '>

          <h1 className='text-2xl font-bold px-5 text-center'>Order Details</h1>

          <div className='border border-b-gray-400 '></div>

          <div className='grid  grid-cols-2 px-10 md:px-20 lg:px-5  '>

            <div className='space-y-3 text-md'>
              <h1>Total Items:</h1>
              <h1>Subtotal:</h1>
              <h1>Shipping Fee:</h1>
            </div>

            <div className='space-y-3 font-bold text-md'>
              <h1>{total_items} items</h1>
              <h1><FormatPrice price={total_price} /></h1>
              <h1><FormatPrice price={shipping_fee} /></h1>
            </div>
          </div>

          <div className='border border-b-gray-400 '></div>

          <div className='grid  grid-cols-2 px-10 md:px-20 lg:px-5'>
            <h1 className='font-bold text-md'>Grand Total:</h1>
            <p className='font-bold'><FormatPrice price={total_price + shipping_fee} /></p>
          </div>

        </div>

      </div>
    </>
  )
}

export default Cart
