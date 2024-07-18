import React from 'react'

const Button = ({buttonTitle}) => {
  return (
   <>
          <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-900">
          {buttonTitle}
        </button>
   </>
  )
}

export default Button
