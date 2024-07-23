import React from 'react'
import FormatPrice from '../helper/FormatPrice'
import { NavLink } from 'react-router-dom'
import Button from './Button'

const ProductListView = ({ filterProducts }) => {
  return (
    <>
      {/* div for main box in which display all products in listview */}
      <div className='grid gap-5'>
        {
          filterProducts.map((currentProduct) => {
            //destructure 
            const { id, name, image, price, description } = currentProduct

            //div for single product
            return <div className='border-2 border-green-800 flex'>

              <div className='w-2/5	'>
                <figure>
                  <img src={image} className='h-60 w-full p-3' />
                </figure>
              </div>

              <div className='card-data p-3 space-y-3   w-3/5'>

                <h1 className='text-xl font-bold'>{name}</h1>
                <h1 className='text-md font-semibold'>Price: {<FormatPrice price={price} />}</h1>
                <h1 className=''>{description.slice(0, 170)}...</h1>

                <div>
                  <NavLink to={`/singleproduct/${id}`}>
                    <Button buttonTitle={'Read More'} />
                  </NavLink>
                </div>

              </div>

            </div>
          })
        }
      </div>
    </>
  )
}

export default ProductListView