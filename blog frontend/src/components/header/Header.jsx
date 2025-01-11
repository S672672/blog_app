import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LogoutBtn from './LogoutBtn';
import { login } from '../../store/authSlice';


function Header() {
    const[isLoggedIn,seIsLoggedIn] = useState(false)

    const dispatch = useDispatch()

    const handleLogIn = () =>{
       dispatch(login())
    }

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <h1>Blog App</h1>
                {isLoggedIn && <p>Wlcome user</p>}
            </div>
            <nav>
                <ul className="flex space-x-4">
                    {isLoggedIn <LogoutBtn}
                    <li><a href="/" className="hover:text-gray-400">Home</a></li>
                    <li><a href="/about" className="hover:text-gray-400">About</a></li>
                    <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </nav>
            <div className="space-x-2">
                {!isLoggedIn && (
                    <>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLogIn}>Login</button>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                    </>
                )}
            </div>
        </header>
    );
}

export default Header;