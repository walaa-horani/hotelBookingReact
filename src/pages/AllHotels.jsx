import React, { useState } from 'react'
import allrooms_1 from "../assets/allrooms_1.jpg"
import allrooms_2 from "../assets/allrooms_2.jpg"

import allrooms_3 from "../assets/allrooms_3.jpg"

import allrooms_4 from "../assets/allrooms_4.jpg"

import allrooms_5 from "../assets/allrooms_5.jpg"
import { useNavigate } from 'react-router-dom'
import { FaLocationArrow, FaStar } from 'react-icons/fa'

function AllHotels() {

  const CheckBox=({label,selected = false,onChange=()=>{}})=>{
    return(
      <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
        <input type='checkbox' checked={selected} onChange={(e)=>(e.target.checked, label)} />
        <span className='font-light select-none'>{label}</span>

      </label>
    )
  }


   const RadioButton=({label,selected = false,onChange=()=>{}})=>{
    return(
      <label className='flex gap-3 items-center cursor-pointer text-sm mt-2'>
        <input type='radio' name='sortOption' checked={selected} onChange={()=>( label)} />

      <span className='font-light select-none'>{label}</span>



      </label>
    )
  }

const navigate = useNavigate()

const roomFilter = [
  "Single Room",
  "Double Room",
  "Swimming Pool",
  "Family Suite"
]

const priceFilter = [
  "0 to 500",
  "500 to 1000",
  "1000 to 2000",
  "2000 to 3000",
]

const sortOption = [
  "Price Low To High",
  "Price High To Low",
  "Newest"

]

const [openFiter,setOpenFilter] = useState(false)
    const roomsData = [
  {
    _id: "a1f64c7197bc1234abcd9012",
    hotel:  "Alpine View Lodge",
    city:"USA",
    address: "112 Mountain Rd, Aspen, Colorado, USA",
    roomType: "King Suite",
    pricePerNight: 450,
     rating: 2,
    amenities: ["Balcony", "Sea View", "High-Speed WiFi"],
    images: allrooms_1,
    isAvailable: true,
    createdAt: "2025-04-12T09:15:00.000Z",
    updatedAt: "2025-04-12T09:15:00.000Z",
    __v: 0,
  },
  {
    _id: "b2e75d8298cd2345bcde0123",
    hotel: "Garden Luxe Hotel" ,
    roomType: "Standard Twin",
     address: "45 Emirgan St, Sariyer, Istanbul, Türkiye",
    city:"Istanbul",
    pricePerNight: 280,
    amenities: ["TV", "City View", "Breakfast Included"],
    images: allrooms_2,
     rating: 4,

    isAvailable: false,
    createdAt: "2025-04-13T11:30:00.000Z",
    updatedAt: "2025-04-13T11:30:00.000Z",
    __v: 0,
  },
  {
    _id: "c3d86e93a9de3456cdef1234",
    hotel: "UrbanStay Central",
    roomType: "Luxury Single",
    pricePerNight: 320,
    address: "210 Lexington Ave, Manhattan, New York, USA",

    city:"New York",
    amenities: ["Work Desk", "Garden Access", "Air Conditioning"],
    images:allrooms_3,
     rating: 5,
    isAvailable: true,
    createdAt: "2025-04-14T14:45:00.000Z",
    updatedAt: "2025-04-14T14:45:00.000Z",
    __v: 0,
  },

  {
  _id: "d4f97fa4b0ef4567defa2345",
  hotel: "King Suite",  
  roomType: "Deluxe Family Room",
  pricePerNight: 390,
  address: "88 Lotus Lake Rd, Guilin, Guangxi, China",

  amenities: ["Mini Bar", "Mountain View", "Free Parking"],
  images: allrooms_4,
   rating: 3,
  city:"China",
  isAvailable: true,
  createdAt: "2025-06-22T09:00:00.000Z",
  updatedAt: "2025-06-22T09:00:00.000Z",
  __v: 0,
}
];



  return (
    <div className='px-40 flex flex-col-reverse lg:flex-row  justify-between pt-60 items-start'>

        <div>

            <div className='flex flex-col items-center text-left '>
                <h1 className='text-[#e89755] text-4xl md:text-2xl'>Hotel Rooms</h1>
                <p className= 'text-gray-500 md:text-base text-sm max-w-170 mt-2 text-center '> Discover comfortable and stylish rooms tailored to every traveler’s needs — from cozy singles to luxurious suites.</p>
                 

            </div>

            {roomsData.map((roomData,index)=>(
                <div className='flex flex-col md:flex-row items-start py-10 gap-6 border-gray-300 border-b '>
                    <img onClick={()=> navigate(`/rooms/${roomData._id}`)} className='max-h-65 rounded-xl shadow-lg object-cover cursor-pointer' src={roomData.images}/>

                    <div>
                        <p>{roomData.hotel}</p>
                         <p>{roomData.city}</p>

                        <div  className="flex items-center text-yellow-400 mb-2">
                       {Array.from({ length: roomData.rating }).map((_,i)=>(
                         <FaStar/>  
                          ))}
                         </div> 

                          <div className='text-gray-500 flex items-center gap-3'>
                     <FaLocationArrow/> 
                     <p>{roomData.address}</p>      
                    </div>

                    <div className='mt-3'>
                      {roomData.amenities.map((items,index)=>(
                        <small className='p-2 rounded-lg bg-gray-200 mr-2'>{items}</small>
                      ))}
                    </div>
                    <p className='text-[#e89755] mt-3 font-bold'>{roomData.pricePerNight}$/Night</p>


                    </div>

                   
                </div>
            ))}



        </div>


        <div className='   w-80 border border-gray-300 text-gray-600 '>

              <div className={` flex items-center justify-between border-b px-5  border-gray-500 ${openFiter && "border-b"}`}>
                <p>FILTERS</p>

                <div className=''>
                  <span onClick={()=>setOpenFilter(!openFiter)} className='lg:hidden '>{openFiter?"Hide":"Show"}</span>
                  <span className='hidden lg:block'>Clear</span>
                </div>
              </div>

              <div className={`${openFiter ? "h-auto":"h-0 lg:h-auto" } overflow-hidden transition-all duration-700`}>

                <div className='px-5 pt-6'>
                <p className='text-gray-500 pb-2'>Popular Filters</p>
             
                {roomFilter.map((room,index)=>(
                  <CheckBox label={room} key={index}/>
                ))}
                </div>


                  <div className='px-5 pt-6'>
                <p className='text-gray-500 pb-2'>Price Range</p>
             
                {priceFilter.map((price,index)=>(
                  <CheckBox label={price} key={index}/>
                ))}
                </div>


                  <div className='px-5 pt-6'>
                <p className='text-gray-500 pb-2'>Sort By</p>
             
                {sortOption.map((sort,index)=>(
                 <RadioButton key={index} label={sort}/>
                ))}
                </div>


              </div>

        </div>
    </div>
  )
}

export default AllHotels
