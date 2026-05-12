import React from 'react';
import { IoMdClose } from "react-icons/io";
    
const FavoriteItems = ({ fav, handleCloseBtn }) => {
    const { image, title, bidsCount, currentBidPrice , id} = fav
    return (
        <div className=' '>
                   <div className=' flex gap-2 text-[#0E2954] my-4 border-2 p-2 rounded-lg'>
            <img className='w-25 h-20 border-2 p-2 rounded-md' src={image} alt="" />
            <div >
              <div className='flex gap-2 justify-between items-start '>
                  <h2 className='font-semibold'>{title}</h2>
              <button onClick={()=>handleCloseBtn(fav,id)}><IoMdClose size={20}/></button>
              </div>
                <div className='flex gap-4 my-2'>
                    <h3>${currentBidPrice}</h3>
                    <p>Bids : {bidsCount}</p>
                </div>
            </div>
        </div>
        </div>
 
    );
};

export default FavoriteItems;