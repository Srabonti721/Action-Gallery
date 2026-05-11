import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import { IoHeartOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';


const SingleTable = ({ galleryData, handleCurrentBit}) => {
  const { image, currentBidPrice, timeLeft, title,} = galleryData
  const [bidNow, setVidNow] = useState(false);
  // const [currentBid, setCurrentBid] = useState(0)
  const handleBidNowBtn = () =>{  
    setVidNow(true)
      toast(" 🦄 Wow so easy!")
handleCurrentBit(galleryData)
  }

  return (
    <div className=" rounded-box border border-base-content/5">
      <table className="table">
        <tbody >
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask h-20 w-20">
                    <img
                      src={image}
                      alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <h2>{title}</h2>
                </div>
              </div>
            </td>
            <div className='flex justify-between mr-15'>
              <td><p>${currentBidPrice}</p></td>
              <td>{timeLeft}</td>
              <th>
                <button onClick={(handleBidNowBtn)} className="btn btn-square "> {
                  bidNow? <FcLike size={20} style={{cursor: "not-allowed"}} />:<IoHeartOutline size={20}/> 
                  }
                </button>
                 
              </th>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SingleTable;