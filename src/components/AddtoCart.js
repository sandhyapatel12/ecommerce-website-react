import React, { useState } from 'react'
import AmountToggle from './AmountToggle';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import { useCustomcartContext } from '../context/AddCartContext';

const AddtoCart = ({ singleproductData }) => {

    //destructure
    const { id, colors, stock } = singleproductData;

    //destructure
    const {AddtoCartFunc} = useCustomcartContext();

    //usestate for selected product color
    const [productColor, setproductColor] = useState(colors[0])

    //usestate for set productQuantity
    const [productQuantity, setproductQuantity] = useState(1)

    const setIncrese = () => {
        // if productQuantity == or smaller than stock --> than user increse quantity of productQuantity when stock value = productQuantity then not increse
        productQuantity < stock ? setproductQuantity(productQuantity + 1) : setproductQuantity(stock)

    }

    const setDecrese = () => {
        //if productQuantity more than 1 --> than user can decrese quantity into productQuantity when remain product 1 otherwise not decrese
        productQuantity > 1 ? setproductQuantity(productQuantity - 1) : setproductColor(1)
    }

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
                            onClick={() => setproductColor(currentColor)}
                        >
                        </button>
                    })
                }
            </div>

            {/* div for AmountToggle button  */}
            <div>
                <AmountToggle
                    productQuantity={productQuantity}
                    setIncrese={setIncrese}
                    setDecrese={setDecrese} />
            </div>

            {/* div for add to cart button  */}
            <div className='mt-10 '>
                <NavLink to='/cart' onClick={() => AddtoCartFunc(id, productColor, productQuantity, singleproductData)}>
                    <Button buttonTitle={'Add to Cart'} />
                </NavLink>
            </div>
        </>
    )
}

export default AddtoCart
