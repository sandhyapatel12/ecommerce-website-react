import React, { useState } from 'react'

//set image url empty (because of error map undefined) ->image is an array[], image define as object{} image property url  -> [{ url: "" }]
const ImageGallery = ({ image = [{ url: "" }] }) => {
    // console.log(image);  //get 4 image

    //usestate for set main image
    const [mainImage, setmainImage] = useState(image[0])

    return (
        <>
            {/* div for image gallery main box in which include all images */}
            <div className="grid grid-cols-2">

                {/* div for array of images */}
                <div className="grid grid-rows-4 gap-2 ">
                    {
                        image.map((imageElem) => {
                            return <figure>
                                <img
                                    key={imageElem.id}
                                    src={imageElem.url}
                                    onClick={() => setmainImage(imageElem)}  //when click on any img update that img into main img
                                    className='h-32 w-56  hover:border-2 hover:border-gray-500 hover:px-1 hover:py-1 hover:rounded-md' />
                            </figure>
                        })
                    }
                </div>

                {/* div for main  image*/}
                <div className='flex items-center justify-center'>
                    <img src={mainImage.url} className='h-56 w-full mr-24' />  
                </div>

            </div>


        </>
    )
}

export default ImageGallery
