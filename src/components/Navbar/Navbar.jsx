import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <h1 className='font-semibold text-[#003EA4] text-4xl'>Action<span className='text-[#FFD337] font-bold'>Gallery</span></h1>
            </div>
            <div className="navbar-center gap-6">
                <a className="text-xl">Home</a>
                <a className="text-xl">Auctions</a>
                <a className="text-xl">Categories</a>
                <a className="text-xl">How to works</a>
            </div>
            <div className="navbar-end">
                <button className=" flex items-center gap-4">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item">9</span>
                    </div>
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src="https://i.ibb.co.com/spBG9Ypk/james.jpg" />
                        </div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;