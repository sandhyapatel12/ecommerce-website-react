import React from 'react'
import { useCustomcartContext } from '../context/AddCartContext'
import CartItem from './CartItem';

const Cart = () => {

  //destructure
  const {cart} = useCustomcartContext();
  console.log(cart)
  return (
    <>
     <div className="container mx-auto max-w-7xl px-10">
     <h2 className="text-2xl font-bold mb-6 text-center mt-5">Shopping Cart</h2>
     <div className="grid grid-cols-5 gap-4 font-bold mb-2">
        <div>Item</div>
        <div className="text-center">Price</div>
        <div className="text-center">Quantity</div>
        <div className="text-center">Subtotal</div>
        <div className="text-center">Remove</div>
      </div>
      <div className='border border-b-1 border-gray-400'></div>

      {
        cart?.map((curElem) =>
        {
          return <CartItem key={curElem.id} {...curElem } />
        })
      }
   
     
    </div>
    </>
  )
}

export default Cart
