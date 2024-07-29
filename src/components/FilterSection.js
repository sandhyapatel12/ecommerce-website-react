import React from 'react'
import { useCustomFilter } from '../context/FilterContext'
import '../App.css'
import FormatPrice from '../helper/FormatPrice';

const FilterSection = () => {

  //destructure
  const { filterData: { text, colorVal, price, maxPrice, minPrice, category }, updateFilter, allProducts, clearFilters } = useCustomFilter();

  //function for fetch only category from whole api data
  const getUniqueData = (allProducts, property) => {

    let newVal = allProducts.map((curElem) => {

      //if propery is category or company
      return curElem[property];
    })

    //if property is color
    if (property === "colors") {

      //unique colors from whole colors data
      newVal = newVal.flat()    //flat method gives new array with unique data
    }

    //unique data from whole specific property data
    return (newVal = ["all", ...new Set(newVal)])
  }

  //given two  argument for getCategoryData function
  const categoryData = getUniqueData(allProducts, "category");  //first argument is all api data --> second is only category data

  //companyData
  const companyData = getUniqueData(allProducts, "company");  //first argument is all api data --> second is only category data

  //colorsData
  const colorsData = getUniqueData(allProducts, "colors");  //first argument is all api data --> second is only category data

  return (
    <>
    <div className="lg:h-screen lg:px-8 xl:px-10 lg:pb-36 lg:pt-10   bg-gray-100  rounded-md  lg:fixed top-24  lg:overflow-y-scroll  ">
      <h1 className='hidden lg:flex text-xl font-bold  justify-center mt-0'>Filter Products</h1>

        {/* search bar */}
        <div className='space-y-1 mt-5  '>

            <h1 className='text-sm'>Search Product</h1>

            <form onSubmit={(e) => e.preventDefault}>
              <input
                type='text'
                name='text'
                value={text}
                onChange={updateFilter}
                placeholder='SEARCH'
                className='border border-green-700 rounded-md text-black px-5 py-1'
              />
            </form>
          </div>

          {/* category */}
          <h1 className='text-md mt-5 bg-green-600 px-5 py-1 rounded-md text-gray-100 font-bold w-full border-b-2  border-green-600  mb-3'>category</h1>
          <div className='border-2 border-green-600 rounded-md px-5 py-1'>
            {
              categoryData.map((curCategory, index) => {
                return <h1 className='font-semibold ' key={index}>
                  <button
                    type='button'
                    name='category'
                    value={curCategory}
                    onClick={updateFilter}
                    className={` ${category === curCategory ? `text-green-600` : 'text-black hover:text-gray-400'}`}
                  >
                    {curCategory}
                  </button>
                </h1>
              })
            }
          </div>

          {/* company */}
          <form action='#' className='mt-5'>
            <select name='company' id='company' onClick={updateFilter} className='border border-green-800 px-5 py-1 rounded-md w-full'>
              {
                companyData.map((curCompany, index) => {
                  return <option
                    key={index}
                    value={curCompany}
                    name='company'>
                    {curCompany}
                  </option>
                })
              }
            </select>
          </form>

          {/* colors */}
          <h1 className='text-md mt-5 bg-green-600 px-5 py-1 rounded-md text-gray-100 font-bold w-full border-b-2  border-green-600  mb-3'>colors</h1>
          <div className='flex items-center justify-center border-2 border-green-600 py-1 rounded-md'>
            {
              colorsData.map((curColor, index) => {
                if (curColor === "all") {
                  return <h1 key={index}>
                    <button
                      type='button'
                      value={curColor}
                      name='colorVal'
                      onClick={updateFilter}
                      className={`hover:opacity-65 ml-3 ${colorVal === curColor ? `ring-1  ring-offset-1 px-2 rounded-sm ring-black` : 'null'}`}

                    >
                      All
                    </button>
                  </h1>
                }
                return <h1 key={index}>
                  <button
                    type='button'
                    style={{ background: curColor, color: curColor }}
                    value={curColor}
                    name='colorVal'
                    className={`w-4 h-4 rounded-full  hover:opacity-65 ml-3 ${colorVal === curColor ? `ring-1  ring-offset-2 ring-black` : 'null'}`}
                    onClick={updateFilter}
                  >
                    {colorVal === curColor ? "" : null}
                  </button>
                </h1>
              })
            }
          </div>

          {/* price */}
          <h1 className='text-md mt-5 bg-green-600 px-5 py-1 rounded-md text-gray-100 font-bold w-full border-b-2  border-green-600  mb-3'>price</h1>
          <div className="px-5">
            <p>
              <FormatPrice price={price} />
            </p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilter}
            />
          </div>

          {/* clear all filters */}
          <button className="bg-yellow-500 font-bold text-black py-2 px-5 w-full rounded hover:bg-green-900 mt-5" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
    </>
  )
}

export default FilterSection

