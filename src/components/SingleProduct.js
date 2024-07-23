import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useCustomProductContext } from '../context/ProductContext';
import PageNavigation from './PageNavigation';
import ImageGallery from './ImageGallery';
import FormatPrice from '../helper/FormatPrice'
import Ratings from './Ratings';
import AddtoCart from './AddtoCart';

//define api 
const API = "https://api.pujakaitem.com/api/products";



const SingleProduct = () => {

  //destructure object from productContex which return through CustomProductContext
  const { isSingleLoading, getsingleProducts, singleproductData } = useCustomProductContext();
  // console.log(singleproductData)

  //destructure id from usePrams which provided by react-router-dom
  const { id } = useParams();

  //destructure data from singleproductData
  //id as a productid because we cant't use same varible two times
  const { id: productId, name, price, company, description, category, stock, reviews, stars, image } = singleproductData;

  //for single page
  useEffect(() => {
    getsingleProducts(`${API}?id=${id}`)  //for single page
  }, [])

  //if products are not display
  if (isSingleLoading) {
    return <div className='flex items-center justify-center mt-56 '>
      <img src='../images/loading.gif' />
    </div>
  }

  return (
    <>
      <PageNavigation name={name} />

      <div className='grid grid-cols-1 p-4 lg:grid-cols-2 gap-5 max-w-7xl mx-auto mt-5 justify-center items-center  ' >

        {/* display image gallery */}
        <div className=''>
          <ImageGallery image={image} />
        </div>

        {/* display single product data */}

        <div className='space-y-3 '>

          <h2 className='text-3xl font-semibold'>{name}</h2>

          <div className=''>
            <Ratings stars={stars} reviews={reviews} />
          </div>

          <p className='font-bold'>MRP:
            <del>
              <FormatPrice price={price + 2500} />
            </del>
          </p>

          <h1 className='font-bold text-green-600'>Deal of the Day: <FormatPrice price={price} /></h1>
          <p>{description}</p>
          <p>Available: <span className='font-bold'>{stock > 0 ? "In stock" : "Not Available"}</span></p>
          <p>Id: <span className='font-bold'>{productId}</span></p>
          <p>Brand: <span className='font-bold'>{company}</span> </p>

          <hr />

          {/* if stock is Available then display color selection and AddtoCart */}
          {stock > 0 && <AddtoCart singleproductData={singleproductData} />}
        </div>
      </div>
    </>
  )
}

export default SingleProduct
