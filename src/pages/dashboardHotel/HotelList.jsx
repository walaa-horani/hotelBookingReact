import React from 'react'
import allrooms_1 from "../../assets/allrooms_1.jpg"
import allrooms_2 from "../../assets/allrooms_2.jpg"

import allrooms_3 from "../../assets/allrooms_3.jpg"

import allrooms_4 from "../../assets/allrooms_4.jpg"


function HotelList() {

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
    <div style={{
      maxWidth: '900px',
      margin: '20px auto',
      fontFamily: 'Arial, sans-serif',
      padding: '10px'
    }}>

      <h1 style={{textAlign:'center', marginBottom: '30px'}}>Available Hotels</h1>
      {roomsData.map((room)=> (
        <div style={{
          display: 'flex',
          gap:"20px",
           marginBottom: '25px',
          padding: '15px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            backgroundColor:room.isAvailable? '#e0ffe0':'#ffe0e0',
              alignItems: 'center'

        }}>

          <img src={room.images}  style={{width: '150px', height: '100px', borderRadius: '8px', objectFit: 'cover'}}/>

          <div style={{flexGrow: 1}}>
          
           <h2 style={{margin: '0 0 8px 0'}}>{room.hotel}</h2>
           
            <p style={{margin: '4px 0'}}><strong>City:</strong> {room.city}</p>

            <p style={{margin: '4px 0'}}><strong>Room Type:</strong> {room.roomType}</p>
            <p style={{margin: '4px 0'}}><strong>Price Per Night:</strong> ${room.pricePerNight}</p>

            <p style={{margin: '4px 0'}}>
              <strong>Rating:</strong> {room.rating} 
            </p>

          </div>
         </div>
      ))}
    </div>
  )
}

export default HotelList