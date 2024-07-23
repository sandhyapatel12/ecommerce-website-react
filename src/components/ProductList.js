import React from 'react'
import { useCustomFilter } from '../context/FilterContext';
import ProductGridView from '../components/ProductGridView'
import ProductListView from '../components/ProductListView'


const ProductList = () => {

   //destructure
   const {filterProducts, gridView} = useCustomFilter();
  //  console.log(filterProducts)

  if(gridView  === true)
  {
    return <ProductGridView filterProducts={filterProducts} />
  }

  if(gridView === false)
    {
      return <ProductListView filterProducts={filterProducts} />
    }

}

export default ProductList