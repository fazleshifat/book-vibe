import React from 'react';

const ErrorPage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>
            <img src="/public/errorimage.jpg" className='mx-auto w-5/12' alt="error" />
            <h2 className="text-center text-5xl text-red-500 font-bold">opps! Page NOT found</h2>
        </div>
    );
};

export default ErrorPage;