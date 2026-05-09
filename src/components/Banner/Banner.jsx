import React from 'react';

const Banner = () => {
    return (
<div
  className=" hero min-h-96 bg-no-repeat"
  
  style={{
    backgroundImage:
      "url(https://i.ibb.co.com/HDCZkgGV/Banner-min.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className=''>
  <div className=" text-neutral-content text-left ">
    <div className="max-w-md">
      <h1 className="mb-5 text-3xl font-bold">Bid on Unique Items from Around the World</h1>
      <p className="mb-5">
       Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
      </p>
      <button className="btn rounded-3xl">Explore Actions</button>
    </div>
  </div>
  </div>
</div>

    );
};

export default Banner;