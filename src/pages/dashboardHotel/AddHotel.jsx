import React, { useState } from 'react';
import uploadArea from  '../../assets/uploadArea.png';
function AddHotel() {

  const [image, setImage] = useState({

 

    1:null,
    2:null,
    3:null
  });

  const [inputData, setInputData] = useState({
    roomType:"",
    pricePerNight:"",
    amenities: {
      "Free Wi-Fi": false,
      "Breakfast Included": false,
      "Airport Shuttle": false,
      "Swimming Pool": false,
    }

    

  }); 


  

  


  return (
   <form className='mt-4 p-4'>
    <h1>Add Hotel</h1>
    <p>Please fill in the details below to add a new hotel.</p>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-4'>
      {Object.keys(image).map((key) => (
        
        <label htmlFor={`hotelImage${key}`} key={key}>
          <img
          className='max-h-13 cursor-pointer opacity-80'
           src={image[key] ? URL.createObjectURL(image[key]):uploadArea}

          
          />
          <input
          type='file'
           accept="image/*"
           hidden
            id={`hotelImage${key}`}
           onChange={(e) => setImage({...image, [key]: e.target.files[0] })
          
          }
          />
          

        </label>
      
      ))}
    </div>

    <div className='w-full flex sm:flex-col sm:gap-4 mt-4'>
      <div className='flex-1 max-w-50'>
        <p className='text-gray-600 font-bold'>Room Type</p>
        <select  value={inputData.roomType}
          onChange={(e) => setInputData({...inputData, roomType: e.target.value})}
           className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'
        >
           <option value="">Select Room Type</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>

        </select>
      </div>

      <div >
        <p className='text-gray-600 font-bold'>
          Price Per Night
        </p>
        <input type='number' placeholder='0' className='border border-gray-300 mt-2 rounded w-25' value={inputData.pricePerNight} onChange={(e) => setInputData({...inputData, pricePerNight: e.target.value})}/>
      </div>

    </div>

    <p className='text-gray-600 font-bold'>Ameneties</p>
        <div className='flex flex-col flex-wrap text-gray-400 mt-2 '>
          {Object.keys(inputData.amenities).map((amenity,index)=> (
            <div key={index}>
              <input type='checkbox' id={`amenities${index+1}`} checked={inputData.amenities[amenity]} onChange={(e) => setInputData({...inputData,amenities:{...inputData.amenities,[amenity]: !inputData.amenities[amenity]}})}/>
             <label htmlFor={`amenities${index+1}`} className='ml-2 cursor-pointer'>{amenity}</label>
              </div>
          ))}
        </div>
        <button className='bg-amber-500 text-white rounded p-2 mt-4 hover:bg-amber-600 transition-colors'>Add Hotel</button>


   </form>
  )
}

export default AddHotel