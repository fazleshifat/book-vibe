import React, { Suspense, useEffect, useState } from 'react';
import { data, useLoaderData } from 'react-router';
import Book from '../Book/Book';

const Books = () => {

    const data = useLoaderData();
    // console.log(data)

    const [allBooks, setAllBooks] = useState([]);

    // const data = useLoaderData();
    // console.log(data)

    // useEffect(() => {
    //     fetch('/public/data/booksData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // }, [])



    return (
        <div>

            <div className='mx-auto w-fit border-r-8 border-r-amber-400'>
                <h1 className='text-5xl font-bold text-cyan-500'>BOOKS</h1>
            </div>



            <Suspense fallback={<span className="loading loading-infinity loading-xl text-4xl"></span>}>
                <div className='w-11/12 mx-auto my-16 py-16 grid grid-cols-1 md:grid-cols-3'>
                    {
                        data.map((book) => <Book key={book.bookId} book={ book }></Book>)
                    }

                </div>
            </Suspense>

        </div>
    );
};

export default Books;