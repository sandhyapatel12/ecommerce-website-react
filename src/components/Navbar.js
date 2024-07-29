import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useCustomcartContext } from '../context/AddCartContext';
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {
    //usestate for responsive
    const [isOpen, setIsOpen] = useState(false);      //set to  false toggle button

    //destructure total_items  that display total items in cart icon which is display on navbar
    const { total_items } = useCustomcartContext();

    const { loginWithRedirect, logout, isAuthenticated , user} = useAuth0();


    return (
        <>
            <div className='bg-black sticky top-0 left-0 right-0 '>
            {/* <div className='bg-black'> */}

                {/* for large devices */}
                <div className='max-w-7xl  items-center justify-between flex mx-auto py-4  text-white px-3 lg:px-10  '>
                    <h1 className='font-extrabold text-2xl text-green-700'>ONLINE STORE</h1>

                    <div className='hidden lg:flex lg:space-x-8 font-bold  items-center '>
                        {/* <NavLik exact to="/" className={getActiveLink('/')}   >Home</NavLik> */}
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'} >Home</NavLink>

                        <NavLink to="/products" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>Products</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>About</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>Contact</NavLink>

                        {/* if user login into app then display logout button otherwise login button */}
                        {
                            isAuthenticated ? (
                                <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg'>
                                    <NavLink to="/logout" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'} >logout</NavLink>
                                </div>
                            ) :
                                (<div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg'>
                                    <NavLink onClick={() => loginWithRedirect()}
                                        to="/login" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'} >Login</NavLink>
                                </div>)
                        }

                        <NavLink to="/cart" className={({ isActive }) => isActive ? "border border-green-700 rounded-md py-1 px-2" : 'text-white hover:text-gray-200'}>
                            <div className='flex '>
                                <div className='relative flex'>
                                    <i className="fa-solid fa-cart-shopping text-3xl "></i>
                                </div>

                                <div className='absolute -translate-y-2/4   bg-green-700 rounded-full flex justify-center items-center text-xs font-medium p-1.5'>
                                    <span className=''>{total_items}</span>
                                </div>
                            </div>

                        </NavLink>
                    </div>

                  


                    {/* for small devices */}
                    {/* if toggle button is open */}
                    <button className='lg:hidden' onClick={() => setIsOpen(!isOpen)} >
                        {isOpen ? (

                            <div className="fixed z-10 lg:hidden inset-0 bg-slate-900 text-white ">

                                <div className="nav-bar flex justify-between  mx-auto p-4 items-center">
                                    <h1 className='font-semibold text-xl'> ONLINE STORE</h1>
                                    <i className="fa-solid fa-square-xmark text-2xl "></i>    {/* close icon */}
                                </div>

                                <div className='py-8 px-10 flex flex-col space-y-5 items-center '>
                                    <NavLink to="/" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>Home</NavLink>
                                    <NavLink to="/products" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>Products</NavLink>
                                    <NavLink to="/about" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>About</NavLink>
                                    <NavLink to="/contact" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'}>Contact</NavLink>


                                    <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg w-fit'>
                                        <NavLink to="/login" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'} >Login</NavLink>
                                    </div>

                                    <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg w-fit'>
                                        <NavLink to="/signup" className={({ isActive }) => isActive ? "text-green-800" : 'text-white hover:text-gray-500'} >SignUp</NavLink>
                                    </div>

                                    <NavLink to="/cart" className={({ isActive }) => isActive ? "border border-green-700 rounded-md py-1 px-2" : 'text-white hover:text-gray-200'}>
                                        <div className='flex '>
                                            <div className='relative flex'>
                                                <i className="fa-solid fa-cart-shopping text-3xl "></i>
                                            </div>

                                            <div className='absolute -translate-y-2/4   bg-green-700 rounded-full flex justify-center items-center text-xs font-medium p-1.5'>
                                                <span className=''>{total_items}</span>
                                            </div>
                                        </div>

                                    </NavLink>
                                </div>
                            </div>) :

                            (
                                <i className="fa-solid fa-bars text-xl text-white"></i>
                            )}
                    </button >
                </div>
            </div>
        </>
    );
};

export default Navbar;
