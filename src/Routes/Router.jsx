import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CollegesPage from "../Pages/CollegesPage/CollegesPage";
import PrivateRoute from "./PrivateRoute";
import CollegeDetails from "../Pages/CollegeDetails/CollegeDetails";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'collegespage',
          element: <PrivateRoute><CollegesPage></CollegesPage></PrivateRoute>
        },
        {
          path: '/collegespage/:id',
          element: <PrivateRoute><CollegeDetails></CollegeDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://campus-zone-server-acchayon.vercel.app/college/${params.id}`)
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
  ]);