import React from 'react';
import { Link, Links } from 'react-router';

const Navbar = () => {
    return (
        <div className=" bg-base-100 shadow-sm">
            <div className='navbar max-w-11/12 mx-auto'>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-cyan-600">
                        <li><a>Home</a></li>
                        <li><a>Listed Books</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <a className="cursor-pointer text-xl font-bold text-cyan-500">BookVibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-cyan-800">
                    
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><a>Listed Books</a> </li>
                    <li><a>Pages to Read</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a className="btn btn-primary">Sign In</a>
                <a className="btn btn-warning">Sign Up</a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;