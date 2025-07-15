
"use client"
import React, { useEffect, useState } from 'react'
import { CiFilter, CiLocationOn, CiSearch } from 'react-icons/ci';
import { IoSearch } from 'react-icons/io5';

export default function SearchForm() {
    const [searchTerm,setSearchTerm] = useState('')
    const [showFilters,setShowFilters] = useState(false)
    const [jobLocation,setJobLocation] = useState('')
    
useEffect(() => {
  const checkScreenSize = () => {
    if (window.innerWidth >= 768) {
      // md and up
      setShowFilters(true);
    } else {
      setShowFilters(false); // or keep current mobile state
    }
  };

  checkScreenSize(); // Initial check

  window.addEventListener('resize', checkScreenSize);
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);


const handleSubmit = () =>{

}
  return (
    
      <form className='rounded-lg  bg-slate-500 sm:w-250 sm:mx-auto shadow-sm p-4  sm:px-8 mb-8 flex flex-col gap-5 items-center justify-center  sm:justify-between sm:flex-row' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center '>
        <div className="relative flex items-center border  border-gray-100  rounded-lg p-2 mr-1 ml-auto bg-white">
            <IoSearch className="absolute  left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input placeholder="Job title or keyword" className="pl-10 focus:outline-none w-full" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          </div>


          <div className=' flex sm:hidden bg-black text-white p-2 rounded-lg mr-4'>
            <CiSearch size={20}/>
          
          </div>
          <div 
                onClick={() => setShowFilters(!showFilters)}

         
                  className = {`sm:hidden font-bold p-2 rounded-md ${showFilters?'bg-teal-100':'bg-white'}`}
          >
          <CiFilter size={20}  />

          </div>
     

        </div>
         

          <div className='hidden sm:flex h-10 w-[1px] bg-gray-200'>

          </div>
          {/* <div className="relative hidden sm:flex items-center border  border-gray-500  rounded-md p-2 bg-white">
            <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input placeholder="Job location" className="pl-10 focus:outline-none w-full" value={jobLocation} onChange={(e)=>setJobLocation(e.target.value)} />
          </div> */}

<div className="relative hidden sm:flex items-center border border-gray-500 rounded-md p-2 bg-white">
  <CiLocationOn className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
  <select
    value={jobLocation}
    onChange={(e) => setJobLocation(e.target.value)}
    className="pl-10 pr-4 focus:outline-none w-full bg-transparent appearance-none"
  >
    <option value="">Select county</option>
    {[
      "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado",
      "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia",
      "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang’a", "Nairobi",
      "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita-Taveta", "Tana River",
      "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot"
    ].map((county) => (
      <option key={county} value={county}>{county}</option>
    ))}
  </select>
</div>
          <button className='bg-black px-7 py-2 text-white rounded-md hidden sm:flex items-center gap-2' type='submit'>
            Search

          </button>


         
        



      </form>

  )
}
