// src/components/ProductPage.js
import React, { useState } from 'react';
import FilterSection from './FilterSection';
import Sort from './Sort'
import ProductList from './ProductList'

const ProductPage = () => {

  //usestate for responsive
  const [isOpen, setIsOpen] = useState(false);      //set to  false toggle button

  return (
    //outer box
    <div className='max-w-7xl mx-auto items-center mt-5 lg:px-5 '>

      {/* div for outer product box in which include two sections */}

      <div className="flex ">

        {/* Left Side: filter section */}
        <div className="hidden lg:flex lg:w-1/4 p-8 bg-gray-100 mt-5 rounded-md   justify-center ">
          <FilterSection />
        </div>

        {/* Right Side: Products */}
        <div className="w-full lg:w-3/4 p-4">

          {/* Right Side: row 1 */}
          <div>
            <Sort />
          </div>

          <div className='lg:hidden border border-green-800 px-5 py-2 rounded-md sm:w-fit'>

            {/* <i className="fa-solid fa-filter"></i> */}

            <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)} >
              {isOpen ? (

                // div for filter section
                <div className="fixed z-10 lg:hidden inset-0 bg-gray-900 text-white w-fit">

                  <div className="flex justify-between  mx-auto p-4 items-center">
                    <h1 className='font-semibold text-xl'> Filter Products</h1>
                    <i className="fa-solid fa-square-xmark text-2xl  "></i>
                  </div>

                  <div className="flex rounded-md p-5   justify-center   ">
                    <FilterSection />
                  </div>

                </div>) :

                (
                  <div className='flex space-x-3 text-green-800'>
                    <i class="fa-solid fa-filter text-xl "></i>
                    <p className='font-bold '>Filter Products</p>
                  </div>
                )}
            </button >

          </div>

          {/* Right Side: row 2 */}
          <div className='mt-3'>
            <ProductList />
          </div>

        </div>
      </div>

      {/* for small devices */}
      {/* if toggle button is open */}

    </div>
  );
};

export default ProductPage;
