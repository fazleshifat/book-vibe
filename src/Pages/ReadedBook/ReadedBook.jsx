import React from 'react';

const ReadedBook = ({book}) => {
    return (
        <div>
            
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="mx-auto w-6/12 h-80 px-10 pt-10">
                    <img
                        src={book.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">bookName:{book.bookName}</h2>
                    <h3>author:{book.author}</h3>
                    <h4>category:{book.category}</h4>
                    <h4>publisher:{book.publisher}</h4>
                    <h4>yearOfPublishing:{book.yearOfPublishing}</h4>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadedBook;