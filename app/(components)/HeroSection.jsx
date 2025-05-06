'use client'
import { ArrowRight, Briefcase, Building2, MapPin } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const companies = ['/britam.png','/equity.png','/kenya power.png','/kra.png','/safaricom.png','/standard chattered.png']


export default function HeroSection() {
const router = useRouter()
  const [query,setQuery] = React.useState("")


  const handleSearch = () => {
    if(query.trim()){
      router.push(`/search?query=${query}`)
    }
  }


  
  return (
    <div className="relative overflow-hidden">
   

    <div className="container relative z-10 mx-auto px-4 py-4 md:py-4 lg:py-4">
      <div className="mx-auto max-w-4xl text-center ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Find Your <span className="text-primary">Dream Job</span> Today
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          {/* Discover thousands of job opportunities with all the information you need. Your next career move starts
          here. */}
        </p>

        <div className="mx-auto mb-8 max-w-3xl rounded-xl bg-card p-4 shadow-lg md:p-6 bg-white">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            <div className="relative border-gray-500 border-[1.2px] rounded-md py-2">
              <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Job title, keywords, or company" className="pl-10 p-1 focus:outline-none"  value={query}
        onChange={(e) => setQuery(e.target.value)}/>
            </div>
            {/* <div className="relative border-gray-500 border-[1.2px] rounded-md py-2">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="City, state, or remote" className="pl-10 focus:outline-none" />
            </div> */}
            <button onClick={handleSearch} className="bg-black p-3 rounded-md text-white">
              Search Jobs
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Popular searches:</span>
          <Link href="/jobs/remote" className="rounded-full px-3 py-1 bg-gray-100 text-gray-500 hover:text-black">
            Remote
          </Link>
          <Link href="/jobs/tech" className="rounded-full bg-muted px-3 py-1 hover:text-primary  bg-gray-100 text-gray-500 hover:text-black">
            Software Engineer
          </Link>
          <Link href="/jobs/marketing" className="rounded-full bg-muted px-3 py-1  bg-gray-100 text-gray-500 hover:text-black hover:text-primary">
            Marketing
          </Link>
          <Link href="/jobs/design" className="rounded-full  bg-gray-100 text-gray-500 hover:text-black bg-muted px-3 py-1 hover:text-primary">
            UX Designer
          </Link>
          <Link href="/jobs/part-time" className="rounded-full  bg-gray-100 text-gray-500 hover:text-black bg-muted px-3 py-1 hover:text-primary">
            Part-time
          </Link>
        </div>
      </div>

    

     
    </div>
  </div>

  )
}
