import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../utitilties/addToDB';

const BookDetails = () => {

    const { id } = useParams();
    // console.log(id)
    const bookId = parseInt(id);
    const data = useLoaderData();


    const singleBook = data.find(book => book.bookId === bookId);
    // console.log(singleBook)

    const { bookName, author, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBook;

    const handleMarkAsRead = (id) => {
        addToStoreDB(id);
    }

    return (
        <div className='max-w-11/12 mx-auto my-16 py-8 gap-9'>
            <div className="card lg:card-side bg-base-100 ">
                <div className='w-6/12 bg-base-300 flex justify-center rounded-3xl'>

                    <img
                        className='w-md p-12'
                        src={image}
                        alt="book" />

                </div>
                <div className="card-body">
                    <h1 className="card-title text-6xl font-bold text-emerald-800">{bookName}</h1>
                    <h3 className='text-2xl'><span className='text-cyan-400 font-bold'>By:</span> {author}</h3>

                    <hr className='text-cyan-200' />
                    <span className='flex items-center font-bold'> Category:<button className='btn w-fit text-xl text-cyan-600 ml-4'> {category}</button></span>
                    <hr className='text-cyan-200' />

                    <h2 className='w-3xl text-xl'><span className='text-cyan-500 font-bold'>Review:</span>{review}</h2>

                    <h2 className='text-xl'>
                        <span className='text-cyan-500 font-bold'>
                            Tag:{tags.map(tag => <button key={tag} className=' mx-3  text-red-500'>#{tag}</button>)}
                        </span></h2>
                    <hr className='text-cyan-200' />

                    <div className='flex gap-24 text-xl font-medium'>
                        <div>
                            <h3 className='text-gray-500'>Number of pages:</h3>
                            <h3 className='text-gray-500'>Publisher:</h3>
                            <h3 className='text-gray-500'>Year of publishing:</h3>
                            <h3 className='text-gray-500'>Rating:</h3>
                        </div>

                        <div className='font-bold'>
                            <h3>{totalPages}</h3>
                            <h3>{publisher}</h3>
                            <h3>{yearOfPublishing}</h3>
                            <h3>{rating}</h3>
                        </div>
                    </div>

                    <div className="space-x-4">
                        <button onClick={() => handleMarkAsRead(id)} className="btn btn-dash">Mark as Read</button>
                        <button className="btn btn-primary">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;