import React from 'react';
import Button from './Button';

const Header = ({sendData}) => {

    //object destructure(which is created at Home.js)   title,desc from sendData
    const {title, desc, img} = sendData;

  return (
    <header className=" py-8 mt-10">
      <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-10">
        {/* Left side: title, description, and button */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6">{desc}</p>
           <Button buttonTitle={'Shop Now'} />  
        </div>
        
        {/* Right side: image */}
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <figure>
             {img}
        </figure>
        </div>
      </div>
    </header>
  );
}

export default Header;
