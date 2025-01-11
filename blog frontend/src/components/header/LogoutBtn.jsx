import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const LogoutBtn = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
            Logout
        </button>
    );
};

export default LogoutBtn;