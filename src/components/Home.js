import React, { useState } from 'react'
import Header from './Header'
import Button from './Button'
import FeatureProdcuts from './FeatureProdcuts'

const Home = () => {
  const data ={
    title: 'Welcome to Online Store',
    desc: 'Discover a world where fashion meets elegance. At Chic Trends Boutique, we believe in empowering you to express your unique style with confidence. Whether youre looking for the latest trends, timeless classics, or statement pieces, our curated collections are designed to cater to your every need.',
    img:  <img src="../images/header.jpg" alt="Your Image" className="w-full"  />
  }

  return (
<>
    <Header sendData={data} />
    <FeatureProdcuts />
</>
  )
}

export default Home
