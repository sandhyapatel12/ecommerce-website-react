import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";


const UserProfile = () => {

    const { isAuthenticated, user } = useAuth0();

    return (
        <>
            {/* if user logged in then display user profile */}
            {isAuthenticated && (
                <div className='bg-green-300 rounded-md bgrounded-md max-w-3xl flex items-center lg:mx-auto mx-3 px-2  py-1 md:px-10 mt-1 space-x-5'>
                    <img src={user.picture} className='w-10 h-10 rounded-md' />
                    <h2 className='font-semibold'>Welcome <span className='font-bold'>{user.name}</span> at our online store. Enjoy Your Shopping</h2>
                </div>
            )}
        </>
    )
}

export default UserProfile