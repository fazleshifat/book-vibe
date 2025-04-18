import React, { use } from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    // const books = use(book)
    // console.log( book);
    const { bookName, bookId, author, image, tags, review, rating } = book;
    // console.log(bookName)

    return (
        <div className='mx-auto'>
            <Link to={`/bookdetails/${bookId}`}>
                <div className='mx-auto m-8'>
                    <div className="card bg-base-100 shadow-sm rounded-2xl">
                        <div className='bg-base-300 m-8 w-80 h-60 flex items-center justify-center'>
                            <figure>
                                <img className='w-40 h-52'
                                    src={image}
                                    alt="book" />
                            </figure>
                        </div>
                        <div className='space-x-2 ml-10'>
                            {
                                tags.map((tag) => <button className='btn bg-base-300 rounded-r-2xl text-amber-700'>{tag}</button>)
                            }
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{bookName}</h2>
                            <p className='text-xl'>By: {author}</p>
                            <hr />
                            <div className="w-full flex justify-between">
                                <p>Fiction</p>
                                <p>{rating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;