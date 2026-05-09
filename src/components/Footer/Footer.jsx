import React from 'react';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                <h1 className='font-semibold text-[#003EA4] text-4xl'>Action<span className='text-[#FFD337] font-bold'>Gallery</span></h1>
                <div className='flex navbar-center gap-5'>
                    <a className="text-xl">Bid.</a>
                    <a className="text-xl">Win.</a>
                    <a className="text-xl">Won.</a>
                </div>
                <div className="navbar-center gap-6">
                    <a className="text-xl">Home</a>
                    <a className="text-xl">Auctions</a>
                    <a className="text-xl">Categories</a>
                    <a className="text-xl">How to works</a>
                </div>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>

        </footer>
    );
};

export default Footer;