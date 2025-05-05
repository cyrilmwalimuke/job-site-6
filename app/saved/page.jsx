"use client"


import React, { useEffect } from 'react'
import { CiFilter, CiLocationOn } from 'react-icons/ci'
import { FiBriefcase } from 'react-icons/fi'
import { IoMdTime } from 'react-icons/io'
import { FaRegTrashAlt } from "react-icons/fa";
import { ExternalLinkIcon } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'



function Saved() {
    const [jobs,setJobs] = React.useState([])
    const [loading,setLoading] = React.useState(true)
    console.log(jobs)
   
   

      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/api/fetch-my-wishlist')
          const data = await res.json()
          setJobs(data)
          setLoading(false)
        }
    
        fetchData()
      }, [])

      
  return (
   <main className='pt-10 pb-5 px-7'>
    <div className='flex justify-between'>
    <h1 className='font-bold text-2xl sm:text-4xl'>Saved Jobs</h1>
    <p className='text-gray-500'>5 jobs saved</p>

    </div>

    <form className='flex gap-5 mt-3'>
        <select name="" id="" className='border-[1.2px] border-gray-500 rounded-lg p-2 flex items-center gap-2'>
            <option value="" className='flex'>
           Job type
          

            </option>
            <option value="">Full Time</option>
            <option value="">Part Time</option>
            <option value="">Internship</option>
            <option value="">Contract</option>
        </select>

        <select name="" id="" className='border-[1.2px] border-gray-500 rounded-lg p-2 flex items-center gap-2'>
            <option value="">Sort by</option>
            <option value="">Date saved(newest) </option>
            <option value="">Date saved(oldest)</option>
        </select>

    </form>

    <div className='flex flex-col gap-5 mt-5'>
        {
            jobs?.map((job) => (
                <div key={job.Id} className='shadow-lg p-5 flex flex-col sm:flex-row gap-5 sm:gap-50 rounded-lg border-gray-500 border-[1.2px] hover:shadow-xl transition-all duration-200'>
                    <div className='sm:flex gap-3'>
                        <img src={job.employer_logo} alt="" className='h-12 w-12 rounded-lg'/>
                        <div>
                            <h1 className='text-xl font-semibold'>{job.title}</h1>
                            <h2 className='text-lg font-semibold mt-3'>{job.employer_name}</h2>
                            <div className='flex gap-3 text-sm my-2 flex-wrap'>
                                <div className='flex gap-1 items-center text-gray-500'>
                                <CiLocationOn />
                                {job.location}
                                </div>

                                <div className='flex gap-1 items-center text-gray-500'>
                                <FiBriefcase />
                                {job.type}

                                </div>
                                <div className='flex gap-1 items-center text-gray-500'>
                                <IoMdTime />
                              <p>posted 2 days ago</p>

                                </div>

                            </div>

                            <p className='font-semibold text-lg mb-2'>kshs {job.salary}</p>
                            <p className='text-gray-500' >{job.description}</p>
                            <div className='flex text-xs mt-2 gap-3 flex-wrap'>
                                {
                                    job.fields.map((field, index) => (
                                        <p key={index} className=' bg-gray-200 rounded-full p-1 px-4 mr-2'>{field}</p>
                                    ))
                                }

                            </div>
                        </div> 

                    </div>

                    <div className='flex flex-col sm:h-70 '>
                        <div className='flex gap-5 items-center justify-end'>
                            <p className='text-xs border-black border-[1.2px] rounded-full p-1 whitespace-nowrap'>Saved yesterday</p>
                            <FaRegTrashAlt className='text-rose-400'/>
                        </div>

                        <div className='flex gap-5 text-xs mt-5 sm:mt-auto'>
                            <Link href='/' className='flex items-center border-[1.2px] border-gray-500 rounded-lg py-1 px-2 gap-2 whitespace-nowrap'>
                            <ExternalLinkIcon className='text-gray-500' size={20}/>
                            View Job
                            </Link>
                            <Link href='/' className='flex items-center text-white bg-black py-1 px-2 gap-2 rounded-lg whitespace-nowrap'>
                            <ExternalLinkIcon className='text-gray-500' size={20}/>
                            Apply Now
                            </Link>

                        </div>
                       
                    </div>



                </div>
              
            ))
        }
    </div>
    


   </main>
  )
}

export default Saved