import React from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl font-medium text-gray-600">Page Not Found</p>
        <p className="mt-4 text-gray-500">Sorry, the page you are looking for does not exist.</p>
        <NavLink to='/'>
            <Button  buttonTitle={'Go to Home Page'}/>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
