import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashBoardDrawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-slate-300">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="dashBoardDrawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-lime-100 text-base-content">
                        <li><Link to='/dashboard'>My Orders </Link></li>
                        {isAdmin &&
                            <>
                                <li><Link to='/dashboard/allusers'>All Users</Link></li>
                                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                                <li><Link to='/dashboard/manageproducts'>Manage Products</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;