import React from 'react'
import { useCustomFilter } from '../context/FilterContext'
import '../App.css'

const Sort = () => {

  const { filterProducts, gridView, setGridView, setListView , sorting} = useCustomFilter();
  return (
    <>
      <div className=' flex justify-between border border-green-800 rounded-md px-2 lg:px-10 mb-3 py-3 items-center'>

        {/* div for grid-list view */}
        <div className='hidden md:flex md:space-x-2'>

          <button onClick={setGridView}>
            {/* if gridview is active then display grid icon or actived color which define at app.css */}
            <i className={gridView ? "active fa-solid fa-grip-vertical bg-gray-200 px-3 items-center justify-center rounded-md py-1 text-lg" : "fa-solid fa-grip-vertical bg-gray-200 px-2 rounded-md py-1 text-lg"} />
          </button>

          <button onClick={setListView}>
            {/* if gridview is not active then display grid icon but without active color and list view icon display with actived color which define at app.css */}
            <i className={!gridView ? "active fa-solid fa-list bg-gray-200 px-2 rounded-md py-1 text-lg" : "fa-solid fa-list bg-gray-200 px-2 rounded-md py-1 text-lg"} />
          </button>


        </div>

        {/* div for total products*/}
        <div>
          {`${filterProducts.length} Products are available`}
        </div>

        {/* div for drop down  */}
        <div className="sort-selection">
          <form action="#" className="">

            <select name="sort" id="sort" onClick={sorting}>
              <option value="lowest" >Price(lowest)</option>
              <option value="highest">Price(highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>

          </form>
        </div>
      </div>
    </>
  )
}

export default Sort
