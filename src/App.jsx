
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'

function App() {


  return (
    <>
<Navbar></Navbar>
<Banner></Banner>
<main className='min-w-md mx-auto py-10 bg-gray-200  flex '>
  <div className="left-container w-[70%] pl-10">
    <h1 className='text-[#0E2954] text-xl'>Action Actives</h1>
    <p className='text-xm'>Discover and bid on extraordinary items</p>
    <Table></Table>
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
