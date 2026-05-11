import React, { use } from 'react';
import SingleTable from './SingleTable';

const Table = ({ galleryPromise }) => {
  const gallery = use(galleryPromise)

  return (
    <div>
        <table className="table">
          <thead>
            <tr className='flex justify-between mr-8'>
              <th className=' text-black text-xl font-semibold'>Items</th>
             <div className='flex '>
               <th className=' text-black text-xl font-semibold'>Current Bid</th>
              <th className=' text-black text-xl font-semibold'>Time Left</th>
              <th className=' text-black text-xl font-semibold'>Bid Now</th>
             </div>
            </tr>
          </thead>
        </table>
      {
        gallery.map(galleryData => <SingleTable key={galleryData.id} galleryData={galleryData} ></SingleTable>)
      }
    </div>
  );
};

export default Table;