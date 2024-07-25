import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useCustomcartContext } from '../context/AddCartContext';


const Navbar = () => {
    //usestate for responsive
    const [isOpen, setIsOpen] = useState(false);      //set to  false toggle button

    //destructure total_items  that display total items in cart icon which is display on navbar
    const {total_items} = useCustomcartContext();

    //useLocation hook for active links
    let location = useLocation();

    const getActiveLink = (path) => {
        return location.pathname === path ? 'text-green-700' : 'text-white';   //if link is active then  text color is blue
    };

    return (
        <>
            <div className='bg-black '>

                {/* for large devices */}
                <div className='max-w-7xl  items-center justify-between flex mx-auto py-4  text-white px-10  '>
                    <h1 className='font-extrabold text-2xl text-green-700'>ONLINE STORE</h1>

                    <div className='hidden lg:flex lg:space-x-8 font-bold  items-center '>
                        <NavLink to="/" className={getActiveLink('/')}>Home</NavLink>
                        <NavLink to="/products" className={getActiveLink('/products')}>Products</NavLink>
                        <NavLink to="/about" className={getActiveLink('/about')}>About</NavLink>
                        <NavLink to="/contact" className={getActiveLink('/contact')}>Contact</NavLink>

                        <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg'>
                            <NavLink to="/login" className={getActiveLink('/login')} >Login</NavLink>
                        </div>

                        <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg'>
                            <NavLink to="/signup" className={getActiveLink('/signup')} >SignUp</NavLink>
                        </div>

                        <NavLink to="/cart" className={getActiveLink('/cart')}>
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

                            <div className="fixed z-10 lg:hidden inset-0 bg-slate-900 text-white">

                                <div className="nav-bar flex justify-between  mx-auto p-4 items-center">
                                    <h1 className='font-semibold text-xl'> ONLINE STORE</h1>
                                    <i className="fa-solid fa-square-xmark text-2xl "></i>    {/* close icon */}
                                </div>

                                <div className='py-8 px-10 flex flex-col space-y-5 '>
                                    <NavLink to="/" className={getActiveLink('/')}>Home</NavLink>
                                    <NavLink to="/products" className={getActiveLink('/products')}>Products</NavLink>
                                    <NavLink to="/about" className={getActiveLink('/about')}>About</NavLink>
                                    <NavLink to="/contact" className={getActiveLink('/contact')}>Contact</NavLink>


                                    <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg'>
                                        <NavLink to="/login" className={getActiveLink('/login')} >Login</NavLink>
                                    </div>

                                    <div className='border-2 border-gray-500 px-5 py-2 font-bold rounded-lg'>
                                        <NavLink to="/signup" className={getActiveLink('/signup')} >SignUp</NavLink>
                                    </div>

                                    <NavLink to="/cart" className={getActiveLink('/cart')}>
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
