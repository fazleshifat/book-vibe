import {
    createBrowserRouter,
} from "react-router";
import Root from "../../Pages/Root";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Banner from "../Banner/Banner";
import Home from "../Home/Home";
import About from "../../Pages/About/About";
import BookDetails from "../../Pages/BookDetails/BookDetails";
import ReadList from "../../Pages/ReadList/ReadList";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch('/public/data/booksData.json'),
                path: '/',
                Component: Home,
            },
            {
                path: '/about',
                Component: About,
            },
            {
                path: '/readlist',
                loader: () => fetch('/public/data/booksData.json'),
                Component: ReadList,
            },
            {
                path: '/bookdetails/:id',
                loader: () => fetch('/public/data/booksData.json'),
                Component: BookDetails,
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage,
    }
]);