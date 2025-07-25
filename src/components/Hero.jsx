import React from 'react'
import hotel_2 from "../../src/assets/hotel_3.jpg"
import { UserButton } from '@clerk/clerk-react'

function Hero() {

    const cities = [
        "Istanbul",
        "New York",
        "Oslo",
        "London",
        "Beirut",
 ]

  return (
    <div
      className=' relative flex flex-col items-center justify-center p-10 text-white bg-no-repeat bg-cover bg-center h-screen'
      style={{ backgroundImage: `url(${hotel_2})` }}
    >
      
          <div className="absolute inset-0 bg-black opacity-60"></div>
    

          <div className="relative z-10 ">
              
              <div className='text-center mb-6'>

            
              
               <h2 className='text-[#e89755] text-4xl mb-3 font-bold'>Find Your Perfect Stay, Anywhere</h2>
            <p className='text-2xl'>Discover top-rated hotels and exclusive deals around the world. Book with ease and start your journey today.</p>
            <button className='mt-5'>Book Now</button>

              </div>

            <section class="bg-white p-6 max-w-xl mx-auto rounded-2xl shadow-lg">
  <h2 class="text-2xl font-bold mb-4 text-gray-800">Book Your Stay</h2>
  <form class="space-y-4">
    <div>
      <label for="destination" class="block text-sm font-medium text-gray-700">Destination</label>
      <input list ="destination" type="text" name="destination" placeholder="e.g., Istanbul, Paris..."
        class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <datalist id='destination'>
        {cities?.map((city,index)=>(
            <option value={city} key={index}/>
        ))}

        </datalist>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="checkin" class="block text-sm font-medium text-gray-700">Check-in</label>
        <input type="date" id="checkin" name="checkin"
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label for="checkout" class="block text-sm font-medium text-gray-700">Check-out</label>
        <input type="date" id="checkout" name="checkout"
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label for="guests" class="block text-sm font-medium text-gray-700">Guests</label>
        <input type="number" id="guests" name="guests" min="1" max="10" value="1"
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label for="rooms" class="block text-sm font-medium text-gray-700">Rooms</label>
        <input type="number" id="rooms" name="rooms" min="1" max="5" value="1"
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>


        <div className=' text-center '>

     
    <button className='mt-3'  type="submit"
     >
      Search Hotels
    </button>
       </div>
  </form>
</section>

            
       </div>
       
    </div>
  )
}

export default Hero