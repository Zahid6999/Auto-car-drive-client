import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashBoard from '../../DashBoard/DashBoard/DashBoard';
import Main from '../../layouts/Main';
import Home from '../../Pages/Home/Home/Home';
import LogIn from '../../Pages/Register/LogIn';
import Register from '../../Pages/Register/Register';
import SecondHandCar from '../../Pages/SecondHandCar/SecondHandCar/SecondHandCar';
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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
    }

]);
