import React from 'react'

const AmountToggle = ({ productQuantity, setIncrese, setDecrese }) => {
    return (
        <>
            <div className='space-x-4 border-2 border-green-700 flex w-fit items-center justify-between px-5 '>

                <div className='-mt-1'>
                    <button onClick={() => setDecrese()} className='font-bold text-xl active:text-green-600'>-</button>
                </div>
                <div className='bg-green-700 px-5 text-white'>
                    {productQuantity}
                </div >
                <div className='-mt-1'>
                    <button onClick={() => setIncrese()} className='font-bold text-xl active:text-green-600'>+</button>
                </div>

            </div>


        </>
    )
}

export default AmountToggle
