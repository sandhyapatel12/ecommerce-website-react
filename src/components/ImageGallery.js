import React, { useState } from 'react'

//set image url empty (because of error map undefined) ->image is an array[], image define as object{} image property url  -> [{ url: "" }]
const ImageGallery = ({ image = [{ url: "" }] }) => {

    //usestate for set main image
    const [mainImage, setmainImage] = useState(image[0])

    return (
        <>
            {/* div for image gallery main box in which include all images */}
            <div className="grid lg:grid-cols-2 lg:gap-16 xl:gap-1 ">

                {/* div for array of images */}
                <div className="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-4 gap-2 ">
                    {
                        image.map((imageElem, index) => {
                            return <figure  key={index}>
                                <img
                                   
                                    src={imageElem.url}
                                    onClick={() => setmainImage(imageElem)}  //when click on any img update that img into main img
                                    className='w-full h-36 md:h-48 lg:h-32 lg:w-56  hover:border-2 hover:border-gray-500 hover:px-1 hover:py-1 hover:rounded-md' />
                            </figure>
                        })
                    }
                </div>

                {/* div for main  image*/}
                <div className='flex items-center justify-center'>
                    <img src={mainImage.url} className='lg:h-56 md:h-72 w-full mt-3 lg:mr-24' />  
                </div>

            </div>


        </>
    )
}

export default ImageGallery
