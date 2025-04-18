import {
    createBrowserRouter,
} from "react-router";
import Root from "../../Pages/Root";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Banner from "../Banner/Banner";
import Home from "../Home/Home";
import About from "../../Pages/About/About";
import BookDetails from "../../Pages/BookDetails/BookDetails";


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
                path: '/bookdetails/:id',
                Component: BookDetails,
            }
        ]
    },
    {
        path: '*',
        Component: ErrorPage,
    }
]);