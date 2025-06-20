"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { CiEdit } from 'react-icons/ci'
import { IoTrashOutline } from 'react-icons/io5'

export default function page() {
    const [jobs,setJobs] = React.useState([])
    console.log()

    useEffect(()=>{
        const fetchJobs = async ()=>{
            const res = await fetch('/api/find-jobs')
            const data = await res.json()
            setJobs(data)
        }
        fetchJobs()
    }

    ,[])


    const deleteJob = async (id) => {
        const res = await fetch(`/api/delete-job/${id}`,{
            method:"DELETE",
            headers:{
                'Content-Type':"application/json"
            }
        })
    }
  return (
    <div className='P-8 sm:p-16'>
        <h1 className='font-bold text-3xl mb-7'>All Jobs</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 '>
        {
            jobs.map((job)=>{
                return (
                    <div className='p-5 border-[1px] border-gray-500 shadow-md rounded-md'>
                        <p className='font-semibold text-xl '>{job.title}</p>
                        <p className='my-3 text-gray-500 line-clamp-3'>{job.description}</p>
                        <div className='flex gap-3'>
                        <Link href={`/edit-job/${job._id}`} className="text-green-300 hover:underline flex items-center gap-1">
                    <CiEdit size={27} />
                    </Link>
                    <button onClick={()=>deleteJob(job._id)}>
                    <IoTrashOutline size={23} className='text-rose-300'/>

                    </button>
                    
                        </div>
                    </div>
                )
            })
        }
      

        </div>



      
    </div>
  )
}
