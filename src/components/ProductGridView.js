import React from 'react'
import Product from './Product'
import { useCustomProductContext } from '../context/ProductContext'



const ProductGridView = ({ filterProducts }) => {
   //destructure object from productContex which return through CustomProductContext
   const { isLoading } = useCustomProductContext();
   // console.log("featureProdcuts", featureProdcuts)
 
   //if products are not display
   if (isLoading) {
     return <div className='flex items-center justify-center mt-56 '>
     <img src='../images/loading.gif' />
   </div>
   }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {
          filterProducts.map((currentProduct) => {
            return <Product key={currentProduct.id} {...currentProduct} />
          })
        }
      </div>
    </>
  )
}

export default ProductGridView
