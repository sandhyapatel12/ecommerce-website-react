import React from 'react'
import Product from './Product'

const ProductGridView = ({ filterProducts }) => {
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
