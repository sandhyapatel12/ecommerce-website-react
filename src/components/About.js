import React from 'react';
import Button from './Button';
import Header from './Header';

const About = () => {

   const data = {
    title: 'About Us - Online Store',
    desc: 'Welcome to Chic Trends Boutique, where fashion is more than just clothing—its an expression of individuality and confidence. Founded in [Year], our boutique was born from a passion for style and a desire to bring the latest trends to fashion-forward individuals everywhere.',
    img:  <img src="../images/about.jpg" alt="Your Image" className="w-full"  />

   }

  return (
   <Header sendData={data} />
  );
}

export default About;
