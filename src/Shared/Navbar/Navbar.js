import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Access/logo-autodrive.png'

const Navbar = () => {
    const navItems = <React.Fragment>
        <li><Link to='/' className='text-white hover:bg-teal-500 rounded-xl'>Home</Link></li>
        <li><Link to='/secondhand' className='text-white hover:bg-teal-500 rounded-xl'>Second Hand Car</Link></li>
        <li><Link to='/' className='text-white hover:bg-teal-500 rounded-xl'>About</Link></li>
        <li><Link to='/' className='text-white hover:bg-teal-500 rounded-xl'>Blog</Link></li>
    </React.Fragment>


    return (
        <div data-theme="dracula" className="navbar rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'><img src={logo} alt="logo" className="btn btn-ghost normal-case  hidden lg:block " /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal py-4">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register' className="btn bg-orange-400 text-slate-900 hover:text-white border-none">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;