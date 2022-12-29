import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../../context/AuthProvider';

const Navbar = () => {
    const {logout} = useContext(authContext);

    const handleLogout = () =>{
        logout()
            .then(() => {
                toast.success('logout successfully')
            })
            .catch(err => console.error(err))
    }

    const navMenu = <>
        <li><Link to='media'>Media</Link></li>
        <li><Link>Message</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link onClick={handleLogout}>LogOut</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">My Book</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Profile</Link>
            </div>
        </div>
    );
};

export default Navbar;