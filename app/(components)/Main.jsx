import React, { useEffect, useState } from 'react'
// import { jobs } from '../jobs'

// import JobCard from './JobCard'
import { ArrowRight, Briefcase, Building2 } from 'lucide-react'
import Link from 'next/link'
import { IoSearch } from 'react-icons/io5'
import { GrResources } from 'react-icons/gr'
import JobCardSearch from './JobCardSearch';

const companies = ['/britam.png','/equity.png','/kenya power.png','/kra.png','/safaricom.png','/standard chattered.png']

export default function Main() {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
      useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
          const res = await fetch('/api/find-jobs')
          const data = await res.json()
          setJobs(data)
          setLoading(false)
        }
    
        fetchData()
      }, [])
    
      if (loading) return (<div className="flex flex-col gap-5 items-center justify-center h-screen">
        <span className="loader"></span>
        <div>"Finding the best jobs for you…</div>

      </div>
        
      )
      
      
  return (
    <main className="container mx-auto px-4 py-12">
      
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Featured Jobs</h2>
      <p className="mt-2 text-muted-foreground">Explore our handpicked selection of top job opportunities</p>
    </div>

    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
     
      {
        jobs.slice(0,6).map((job) => (
          <JobCardSearch key={job._id} job={job} />
        ))
      }
    </div>

    

    <div className="mt-8 text-center">
      <Link href='/search' className='bg-black px-4 py-2 rounded-md text-white'>
        View All Jobs
      </Link>
    </div>

  

    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        <p className="text-sm font-medium">Trusted by leading companies:</p>
        {companies.map((i) => (
          <div key={i} className="h-12 w-12 opacity-70 grayscale-0 sm:grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <img
              src={i}
              alt={`Company ${i}`}
              className="h-12 w-12 object-contain"
            />
          </div>
        ))}
      </div>





   
  </main>
  )
}
