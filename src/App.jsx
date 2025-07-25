import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllHotels from './pages/AllHotels'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import Layout from './pages/dashboardHotel/Layout'
import AddHotel from './pages/dashboardHotel/AddHotel'
import HotelList from './pages/dashboardHotel/HotelList'
import Dashboard from './pages/dashboardHotel/Dashboard'
function App() {

  const isDashboard = useLocation().pathname.includes("dashboard")
  return (
    <>
      
      {!isDashboard && < Navbar/>}
      <div className='min-h-[70vh]'>

        <Routes>
       <Route path='/' element={<Home/>}/>
      <Route path='/hotels' element={<AllHotels/>}/>
      <Route path='/rooms/:id' element={<RoomDetails/>}/>
       <Route path='/my-bookings' element={<MyBookings/>}/>
       <Route path='/dashboard' element={<Layout/>}>
      <Route index element={<Dashboard/>}/>

          <Route path='add-hotel' element={<AddHotel/>}/>
           <Route path='hotel-list'  element={<HotelList/>}/>
       
       
       </Route>
      </Routes>
       </div>
    </>
  )
}

export default App