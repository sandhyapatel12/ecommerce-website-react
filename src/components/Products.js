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
    <div className=' flex justify-center lg:mb-10 '>

      {/* div for outer product box in which include two sections */}

      <div className="max-w-7xl lg:w-full lg:flex ">

        {/* Left Side: filter section */}
       
        <div className='hidden lg:flex lg:w-1/5  '>
          <FilterSection />
        </div>

        {/* Right Side: Products */}
        <div className="  px-3 lg:px-10  lg:ml-32  lg:w-full xl:w-4/5 xl:ml-20  ">

          {/* Right Side: row 1 */}
          <div className='mt-10'>
            <Sort />
          </div>


          {/* for smaller devices */}
          <div className='lg:hidden border border-green-800 px-5 py-2 rounded-md sm:w-fit'>

            <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)} >
              {isOpen ? (

                // div for filter section
                <div className="fixed overflow-y-scroll top-16   z-10 lg:hidden inset-0 duration-200		 bg-gray-100  transition-all ease-linear	 w-fit">

                  <div className="flex justify-between  mx-auto p-4 items-center">
                    <h1 className='font-semibold text-xl'> Filter Products</h1>
                    <i className="fa-solid fa-square-xmark text-2xl  "></i>
                  </div>

                  <div className=" flex  rounded-md p-5   justify-center   ">
                    <FilterSection />
                  </div>

                </div>) :

                (
                  <div className='flex space-x-3 text-green-800'>
                    <i className="fa-solid fa-filter text-xl "></i>
                    <p className='font-bold '>Filter Products</p>
                  </div>
                )}
            </button >

          </div>

          {/* Right Side: row 2 */}
          <div className='mt-3 '>
            <ProductList />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
