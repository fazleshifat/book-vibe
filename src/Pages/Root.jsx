import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet className='w-11/12 mx-auto'></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;