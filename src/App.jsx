
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'
import FavoriteItems from './components/FavoriteItems/FavoriteItems'
import { IoHeartOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

const fetchGallery = async () => {
  const res = await fetch('gallery.json')
  return res.json();
}

function App() {
  const galleryPromise = fetchGallery()
  const [currentBid, setCurrentBid] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const handleCurrentBit = (galleryData,) => {
    const newFavoriteData = [...favorites, galleryData]
    setFavorites(newFavoriteData)

    const newBid = currentBid + galleryData.currentBidPrice;
    setCurrentBid(newBid)
  }
  const handleCloseBtn = (id) => {
    const remainingFavorites = favorites.filter((fav) => fav.id !== id)
    toast.warn(" 🦄 Items Removed from favorites")
    setFavorites(remainingFavorites)
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
            <Suspense>
              <Table galleryPromise={galleryPromise} handleCurrentBit={handleCurrentBit}></Table>
            </Suspense>
            <ToastContainer />
          </div>
        </div>

        <div className="right-container w-[30%] mt-19 ">
          <div className="card bg-base-100 shadow-sm">
            <div>
              <div className='card-body  items-center  text-center border-b-2 border-gray-200'>
                <h2 className="card-title text-[#0E2954] text-xl font-semibold"> <IoHeartOutline size={20} />Favorite Items</h2>
              </div>
              <div className='px-4 my-4'>
                {
                  favorites.length === 0 ?
                    <div className='text-center'>
                      <h1 className='text-xl font-semibold mb-4'>No Favorites Yet</h1>
                      <p>Click the heart icon on any item to add it to your favorites</p>
                    </div>
                    :
                    favorites.map(fav => <FavoriteItems key={fav.id} handleCloseBtn={handleCloseBtn} fav={fav}></FavoriteItems>)
                }
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
