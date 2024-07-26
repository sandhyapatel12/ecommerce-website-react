import React from 'react'
import { NavLink , useLocation} from 'react-router-dom'

const PageNavigation = ({ name, id }) => {

   //useLocation hook for active links
   let location = useLocation();

  const getActiveLink = (path) => {
    return location.pathname === path ? 'text-green-700' : 'text-black';   //if link is active then  text color is blue
};

  return (
    <>
      <div className='max-w-8xl  items-center font-semibold flex mx-auto py-4  bg-gray-200 px-10'>
        <NavLink to='/' className={`hover:text-green-600 ${getActiveLink('/')}`}>
          Home
        </NavLink> /
        <NavLink to='/?id=${id}' className={`hover:text-green-600 {getActiveLink('/?id=${id}}')`} >
          {name}
        </NavLink>
      </div>
    </>
  )
}

export default PageNavigation
