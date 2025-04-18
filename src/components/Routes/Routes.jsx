import {
    createBrowserRouter,
} from "react-router";
import Root from "../../Pages/Root";
import Home from "../Home";
import ErrorPage from "../../ErrorPage/ErrorPage";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {

            }
        ]
    },
    {
        path:'*',
        Component:ErrorPage,
    }
]);