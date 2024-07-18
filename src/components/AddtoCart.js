import React, { useState } from 'react'

const AddtoCart = ({ singleproductData }) => {

    //destructure
    const { id, colors, stock } = singleproductData;

    //usestate for selected product color
    const [productColor, setproductColor] = useState(colors[0])

    return (
        <>
            {/* div for display colors  */}
            <div className='space-x-2 flex items-center font-bold'>Colors:
                {
                    colors.map((currentColor, index) => {
                        //backgroundColor and currentColor both are same
                        return <button
                            key={index}

                            //when  user select any color that color match with productcolor at that time display ring of that selected color other wise all colors are null
                            className={`w-4 h-4 rounded-full hover:opacity-65 ml-3 ${currentColor === productColor ? `ring-1  ring-offset-2 ring-black` : 'null'}`}

                            //backgroundColor and currentColor both are same and text also
                            style={{ backgroundColor: currentColor, color: currentColor }}

                            //when user click on  any color set ring to that color
                            onClick={()=> setproductColor(currentColor)}
                        >
                        </button>
                    })
                }
            </div>

        </>
    )
}

export default AddtoCart
