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
        const fetchData = async () => {
          const res = await fetch('/api/find-jobs')
          const data = await res.json()
          setJobs(data)
          setLoading(false)
        }
    
        fetchData()
      }, [])
    
      if (loading) return <p>Loading...</p>
  return (
    <main className="container mx-auto px-4 py-12">
      
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight">Featured Jobs</h2>
      <p className="mt-2 text-muted-foreground">Explore our handpicked selection of top job opportunities</p>
    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
     
      {
        jobs.slice(0,6).map((job) => (
          <JobCardSearch key={job._Id} job={job} />
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





    <div className="mt-16 grid gap-8 md:grid-cols-3">
        <div className="rounded-xl bg-card p-6 shadow-lg transition-all hover:shadow-md bg-white">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ">
            <IoSearch className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-bold">For Job Seekers</h3>
          <p className="mb-4 text-muted-foreground">
            Browse thousands of jobs across different industries and find the perfect match for your skills and
            experience.
          </p>
         
            <Link href='/search' className='flex items-center gap-2 text-blue-300'>
              Browse Jobs 
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
         
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md bg-white">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Building2 className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-bold">For Employers</h3>
          <p className="mb-4 text-muted-foreground">
            Post jobs, find qualified candidates, and build your employer brand with our comprehensive hiring
            solutions.
          </p>
    
            <Link href="/post-job" className='flex gap-2 items-center text-blue-300' >
              Post a Job <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
         
        </div>

        <div className="rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md bg-white">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <GrResources className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-bold">Career Resources</h3>
          <p className="mb-4 text-muted-foreground">
            Access expert advice, resume tips, interview guides, and career development resources href help you succeed.
          </p>
          
            <Link href="/articles" className='flex gap-2 items-center text-blue-300'>
              Explore Resources <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          
        </div>
      </div>
  </main>
  )
}
