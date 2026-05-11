
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'

const fetchGallery = async()=>{
  const res = await fetch('gallery.json')
  return res.json();
} 

function App() {
const galleryPromise = fetchGallery()
// console.log(galleryPromise);


  return (
    <>
<Navbar></Navbar>
<Banner></Banner>
<main className='min-w-md mx-auto py-10 bg-gray-200  flex '>
  <div className='left-container w-[70%] pl-10 '>
        <h1 className='text-[#0E2954] text-xl'>Action Actives</h1>
      <p className='text-xm'>Discover and bid on extraordinary items</p>
        <div className=" rounded-box border border-base-content/5 bg-base-100 my-6">
    <Suspense fallback={<h2>loading....</h2>}>
      <Table galleryPromise={galleryPromise}></Table>
    </Suspense>
  </div>
  </div>


  <div className="right-container w-[30%]  pr-10">
    <h2>right</h2>
  </div>
</main>
<Footer></Footer>
    </>
  )
}

export default App
