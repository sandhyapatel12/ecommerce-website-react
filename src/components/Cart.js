import React from 'react'
import { useCustomcartContext } from '../context/AddCartContext'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {

  //destructure
  const { cart, clearCart } = useCustomcartContext();


  //when add to cart page is empty
  if (cart.length === 0) {
    return <h1 className='text-xl text-center mt-10'>Not yet added any Product</h1>
  }

  //else 
  return (
    <>
      <div className="container mx-auto max-w-7xl px-3 lg:px-10">
        <h2 className="text-2xl font-bold mb-6 text-center mt-5">Shopping Cart</h2>
        {/* <div className="hidden lg:grid grid-cols-5 gap-4 font-bold mb-2">
        <div>Item</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Subtotal</div>
        <div className="text-center">Remove</div>
      </div>
      <div className='border border-b-1 border-gray-400'></div> */}

        {cart.map((curElem, index) => {
          return <CartItem key={index}  {...curElem} />
        })
        }

        <div className='flex justify-between my-5'>
          <NavLink to='/products'>
            <button className='bg-purple-900 hover:bg-purple-950 rounded-md text-gray-300 font-semibold px-5 py-2'>Countinue Shopping</button>
          </NavLink>

          <button 
          onClick={clearCart}
          className='bg-yellow-500 hover:bg-yellow-600 rounded-md text-black font-semibold px-5 py-2'>Clear Cart</button>
        </div>

      </div>
    </>
  )
}

export default Cart
