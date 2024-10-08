import React, { useState } from 'react'

//destructure object
const Ratings = ({ stars, reviews }) => {
    // console.log(stars, reviews)


    const ratingStars = Array.from({ length: 5 }, (e, index) => {
        let number = index + 0.5  //add 0.5 into index because of display half star

        // i as a index i=0, i=1, i=2, i=3, i=4 generated by arry.from method
        return (
            <span key={index}>
                {
                    //like stars is  4.4 >= 0 + 1= 1 ->condition is true -> display first full star   ----> same like others  i=1, i=2.....
                    stars >= index + 1 ? <i className="fa-solid fa-star text-yellow-600"></i> :  //full star
                        stars >= number ? <i className="fa-solid fa-star-half-stroke text-yellow-600"></i> :  //half star
                            <i className="fa-regular fa-star text-yellow-600"></i>  //blank star
                }
            </span>
        )
    })

    return (
        <>
            {/* div for ratingStars */}
            <div className='flex space-x-3'>

                <div>
                    {ratingStars}  
                </div>

                <p>({reviews} customer reviews)</p>

            </div>
        </>
    )
}

export default Ratings
