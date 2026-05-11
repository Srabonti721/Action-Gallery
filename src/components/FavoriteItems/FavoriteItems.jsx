import React from 'react';
import { IoMdClose } from "react-icons/io";
    
const FavoriteItems = ({ fav }) => {
    const { image, title, bidsCount, currentBidPrice } = fav
    return (
        <div className='flex gap-2 text-[#0E2954] my-4 border-b-2 border-gray-200'>
            <img className='w-25 h-20' src={image} alt="" />
            <div >
              <div className='flex gap-4 justify-between items-start '>
                  <h2 className='font-semibold'>{title}</h2>
              <button><IoMdClose size={20}/></button>
              </div>
                <div className='flex gap-4 my-2'>
                    <h3>${currentBidPrice}</h3>
                    <p>Bids : {bidsCount}</p>
                </div>
            </div>
        </div>
    );
};

export default FavoriteItems;