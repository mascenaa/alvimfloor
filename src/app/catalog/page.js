"use client"

import React, { useState } from 'react';
import HeaderComponent from "../components/header/header";
import data from "./data.js";
import { Star } from 'lucide-react';

export default function CatalogPage() {
     const [selectedButton, setSelectedButton] = useState(null);
     const [search, setSearch] = useState('');

     const [ActualPage, setActualPage] = useState(1);
     const [ItemsPerPage, setItemsPerPage] = useState(5);

     const handleButtonClick = (buttonName) => {
          setSelectedButton(buttonName);
     };

     async function renderStars(rating) {
          let stars = []
          for (let i = 0; i < rating; i++) {
               stars.push(
                    <div className='flex flex-row'>
                         <Star className='w-5 h-5 text-yellow-400' />
                    </div>
               )
          }
          return stars
     }

     const allData = data


     return (
          <section>
               <HeaderComponent />
               <div>
                    <div className="w-screen">
                         <div className="text-center text-black">
                              <h1 className="text-2xl font-bold mt-10">Looking for a vinyl floor?</h1>
                              <p className="text-red-400 mt-2">
                                   See our complete catalog
                              </p>
                         </div>
                         <div className="flex flex-col justify-center w-1/2 mx-auto">
                              <input
                                   type="text"
                                   placeholder="Search for a floor"
                                   onChange={(e) => setSearch(e.target.value)}
                                   className="border-[#D9D9D9] border-2 mt-5 rounded-[8px] p-2 text-black w-full" />
                              <div className="flex justify-center mt-4">
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Bedroom' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Bedroom')}
                                   >
                                        Bedroom
                                   </button>
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Bathroom' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Bathroom')}
                                   >
                                        Bathroom
                                   </button>
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Kitchen' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Kitchen')}
                                   >
                                        Kitchen
                                   </button>
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Living Room' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Living Room')}
                                   >
                                        Living Room
                                   </button>
                                   <select className="bg-[#EBE3D5] text-black p-2">
                                        <option>Choose a filter</option>
                                        <option>Price</option>
                                        <option>Best sellers</option>
                                        <option>Rating</option>
                                   </select>
                              </div>

                         </div>
                    </div>
                    <div className='flex flex-col w-1/2 mx-auto py-6'>
                         {
                              allData
                                   .filter((item) => {
                                        if (search === '') {
                                             return item
                                        } else if (item.floor_name.toLowerCase().includes(search.toLowerCase())) {
                                             return item
                                        }
                                   }
                                   )
                                   .map(async (item, index) => {
                                        return (
                                             <div key={index} className="flex justify-between mt-5  mx-auto w-full">
                                                  <div className="flex flex-row gap-4">
                                                       <img src={
                                                            item.image.floor
                                                       } alt="floor"
                                                            width={300}
                                                            height={200}
                                                            className='select-none'
                                                            loading='lazy'

                                                       />
                                                  </div>
                                                  <div className="flex flex-col py-2 w-full p-5">
                                                       <div className='flex flex-row justify-between'>
                                                            <div>
                                                                 <p className="text-black font-bold text-xl">{item.floor_name}</p>
                                                                 <p className="text-black font-semibold">{item.line} Collection</p>
                                                                 <p className="text-black font-light">{item.brand}</p>
                                                                 <ul className='text-black'>
                                                                      <li>
                                                                           Floor width: {item.width}mm
                                                                      </li>
                                                                      <li>
                                                                           Floor length: {item.length}mm
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                            <div className='text-black '>
                                                                 <h1 className='font-bold mb-2'>Reviews</h1>
                                                                 <div className='flex gap-2'>
                                                                      {
                                                                           await renderStars(item.rating)
                                                                      }
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <button className="bg-[#EBE3D5] p-2 w-full mt-4 font-bold text-black">View more</button>
                                                  </div>

                                             </div>
                                        )
                                   })
                         }
                    </div>
               </div>

          </section>

     )
}