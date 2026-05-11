import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
const FavoriteItems = () => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <div>
                <div className='card-body  items-center  text-center'>
                    <h2 className="card-title text-[#0E2954] text-xl font-semibold"> <IoHeartOutline size={20} />Favorite Items</h2>
                    <p className=''>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
                <div className="flex justify-between px-5 py-5 border-t-2 border-gray-200 text-xl font-semibold">
                    <h2>Total Bids Amount  </h2>
                    {/* <h2>${currentBid}</h2> */}
                </div>
            </div>
        </div>
    );
};

export default FavoriteItems;