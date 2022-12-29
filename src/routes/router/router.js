import { createBrowserRouter } from "react-router-dom";
import Login from "../../Authentication/Login";
import Register from "../../Authentication/Register/Register";
import Main from "../../layout/Main/Main";
import About from "../../Pages/About/About";
import Home from "../../Pages/HomePage/Home/Home";
import Media from "../../Pages/HomePage/Media/Media";
import MediaDetails from "../../Pages/HomePage/Media/MediaDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([{
    path: '/',
    element: <Main />,
    children: [{
        path: '/',
        element: <PrivateRoute><Home /></PrivateRoute>,
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: 'media',
        element: <Media/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/mediaDetails/:id',
        loader: ({params})=> fetch(`http://localhost:5000/post/${params.id}`),
        element: <MediaDetails/>
    }
    ]
}])