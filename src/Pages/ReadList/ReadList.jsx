import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredData } from '../../utitilties/addToDB';
import ReadedBook from '../ReadedBook/ReadedBook';

const ReadList = () => {

    const [sort, setSort] = useState('');

    const [readList, setReadList] = useState([]);

    // worst case

    const data = useLoaderData();
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredData();
        const convertedStoredData = storedBookData.map(id => parseInt(id));
        const readList = data.filter(book => convertedStoredData.includes(book.bookId));
        setReadList(readList);
    }, [])

    const handleSort = (type) => {
        setSort(type);
        if (type === 'pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
            // console.log(sortedByPage)
        }
        
        if (type === 'ratings') {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating);
            // console.log(sortedByPage)
        }
        
    }

    return (


        <div className='w-11/12 mx-auto  py-10'>

            <div className="dropdown dropdown-bottom mx-auto mb-10">
                <div className='flex items-center font-bold gap-4'>
                    <div tabIndex={0} role="button" className="btn m-1 btn-warning font-bold">Sort By:</div>
                    <div className='text-red-500'>#{sort ? sort : ''}</div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-1 p-3 shadow-sm">
                    <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                    <li><a onClick={() => handleSort('ratings')}>Ratings</a></li>
                    <li><a onClick={() => handleSort('all')}>All</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                    <Tab>Purchase History</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-wrap  gap-5 my-10'>
                        {
                            readList.map(book => <ReadedBook key={book.bookId} book={book}></ReadedBook>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;