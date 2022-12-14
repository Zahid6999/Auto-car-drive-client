import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AddProduct from '../../DashBoard/AddProduct/AddProduct';
import AllUsers from '../../DashBoard/AllUsers/AllUsers';
import ManageProducts from '../../DashBoard/ManageProducts/ManageProducts';
import MyAppointment from '../../DashBoard/MyAppointment/MyAppointment';
import DashBoardLayout from '../../layouts/DashBoardLayout';
import Main from '../../layouts/Main';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/Register/LogIn';
import Register from '../../Pages/Register/Register';
import SecondHandCar from '../../Pages/SecondHandCar/SecondHandCar/SecondHandCar';
import NotFoundPage from '../../Shared/NotFoundPage/NotFoundPage';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/secondhand',
                element: <SecondHandCar></SecondHandCar>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
                path: '/dashboard/manageproducts',
                element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
            },

        ]
    },
    {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
    }

]);
