import React from 'react'
import { useCustomProductContext } from '../context/ProductContext'
import Product from './Product';

const FeatureProdcuts = () => {

    //destructure object from productContex which return through CustomProductContext
    const { isLoading, featureProdcuts } = useCustomProductContext();

    //if products are not display
    if(isLoading)
    {
        return <div>loading....</div>
    }
    return (
        <>
            <h2 className="text-2xl font-bold mb-6 text-center mt-10">Feature Prodcuts</h2>

            {/* div for feature Prodcuts main box in which include all products */}
            <div className='flex justify-center max-w-8xl px-10 mx-auto items-center mb-10 '>

                    <div className="grid grid-cols-3 gap-4">
                        {
                            //map function return an array
                            featureProdcuts.map((productElement) =>
                            {
                                //key is must return because key define unique id
                                return <Product key={productElement.id} {...productElement}   />    //...is a spread operator which return whole data which geted through api call
                            })
                        }
                    </div>

            </div>
            

{/* 
    <div className="grid grid-cols-3 gap-4">
      <div className="p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 1"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 2"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="p-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Product 3"
          className="w-full h-auto object-cover"
        />
      </div>
    </div> */}



        </>
    )
}

export default FeatureProdcuts
