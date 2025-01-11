import React from 'react'
function Footer() {
    return (
        <footer className="bg-black text-white py-6">
        <div className='min-w-screen border border-white border-1 mb-2'></div>
            <div className="container mx-auto text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
                    <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
                    <a href="#" className="text-white hover:text-gray-400">Contact Us</a>
                </div>
                <div className="mt-4">
                    <a href="#" className="text-white hover:text-gray-400 mx-2">Facebook</a>
                    <a href="#" className="text-white hover:text-gray-400 mx-2">Twitter</a>
                    <a href="#" className="text-white hover:text-gray-400 mx-2">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
