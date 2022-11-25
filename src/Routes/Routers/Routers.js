import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main';
import Home from '../../Pages/Home/Home/Home';
import Register from '../../Pages/Register/Register';
import SecondHandCar from '../../Pages/SecondHandCar/SecondHandCar/SecondHandCar';

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
                path: '/secondhand',
                element: <SecondHandCar></SecondHandCar>
            }
        ]
    }
]);
