
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'
import { IoHeartOutline } from "react-icons/io5";
// import FavoriteItems from './components/FavoriteItems/FavoriteItems'
import { ToastContainer } from 'react-toastify';
const fetchGallery = async()=>{
  const res = await fetch('gallery.json')
  return res.json();
} 

function App() {
const galleryPromise = fetchGallery()
// console.log(galleryPromise);
const [currentBid, setCurrentBid] = useState(0)
const handleCurrentBit = (galleryData) =>{
  const newBid = currentBid + galleryData.currentBidPrice;
  setCurrentBid(newBid)
  // console.log(newBid);
  
}

  return (
    <>
<Navbar></Navbar>
<Banner></Banner>
<main className='container mx-auto px-4 py-10 bg-gray-200  flex gap-4'>
  <div className='left-container w-[70%]'>
        <h1 className='text-[#0E2954] text-xl'>Action Actives</h1>
      <p className='text-xm'>Discover and bid on extraordinary items</p>
        <div className=" rounded-box border border-base-content/5 bg-base-100 my-6">
    <Suspense fallback={<h2>loading....</h2>}>
      <Table galleryPromise={galleryPromise} handleCurrentBit={handleCurrentBit}></Table>
    </Suspense>
     <ToastContainer/>
  </div>
  </div>

  <div className="right-container w-[30%] mt-19 ">
            <div className="card bg-base-100 shadow-sm">
            <div>
                <div className='card-body  items-center  text-center'>
                    <h2 className="card-title text-[#0E2954] text-xl font-semibold"> <IoHeartOutline size={20} />Favorite Items</h2>
                    <p className=''>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                </div>
                <div className="flex justify-between px-5 py-5 border-t-2 border-gray-200 text-xl font-semibold">
                    <h2>Total Bids Amount  </h2>
                    <h2>${currentBid}</h2>
                </div>
            </div>
        </div>
  </div>
</main>
<Footer></Footer>
    </>
  )
}

export default App
