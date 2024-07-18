import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helper/FormatPrice';

const Product = (productElement) => {

    //destructure object from productElement
    const { id, image, name, price, category } = productElement;

    return (
        <>
            {/* when click on any product of this page redirect at single product page */}
            <NavLink to={`/singleproduct/${id}`}>
            
                {/* div for single items */}
                <div className='card bg-gray-200 px-5 py-5 rounded-md'>

                    <figure>
                        <img  src={image} className='rounded-md' />
                        <figcaption className='bg-green-800 text-white text-md px-5 py-1 w-fit mt-5 rounded-md'>{category}</figcaption>
                    </figure>

                    <div className='card-data'>
                        <h1 className='text-xl font-bold'>{name}</h1>
                        <h1 className='text-md font-semibold'>Price: {<FormatPrice price={price}/>}</h1>
                    </div>

                </div>
            </NavLink>

        </>
    )
}

export default Product
