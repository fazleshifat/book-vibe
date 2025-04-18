import React from 'react';

const Banner = () => {
    return (
        <div className="">
            <div className='bg-base-300 rounded-4xl flex w-11/12 gap-8 py-16 my-16 items-center justify-center mx-auto'>
                <div className=' w-6/12 space-y-8'>
                    <h1 className='text-7xl font-bold'>Books to freshen up <br />
                     your bookshelf</h1>
                    <button className='btn bg-green-500 text-white text-lg rounded-lg font-bold'>View The List</button>
                </div>

                
                    <img className='w-3/12' src="/public/pngwing 1.png" alt="banner" />
                
            </div>
        </div>
    );
};

export default Banner;