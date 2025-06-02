'use client'
import { ArrowRight, Briefcase, Building2, MapPin } from 'lucide-react'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

const companies = ['/britam.png','/equity.png','/kenya power.png','/kra.png','/safaricom.png','/standard chattered.png']




export default function HeroSection() {
const router = useRouter()
 
    const [searchTerm, setSearchTerm] = React.useState("");
    const [loading,setLoading] = React.useState(true)
    const [popularSearchTerms,setPopularSearchTerms] = React.useState([]);
  const searchParams = useSearchParams();
    const handleSearchSubmit = async (e) => {
        e.preventDefault();
      
        const params = new URLSearchParams({
          page: '1',
          type: '',
          limit: '6',
          salaryRange: '',
          searchTerm,
          experienceLevel: '', // Must be a string
          sort: 'createdAt',
          order: 'desc',
          jobLocation: '',
          industry: '',
        });
      
        router.push(`/search?${params.toString()}`);

        if (!searchTerm.trim()) return;

    await fetch('/api/search-term', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ term: searchTerm,link:`/search?page=1&type=&limit=6&salaryRange=&searchTerm=${searchTerm}&experienceLevel=&sort=createdAt&order=desc&jobLocation=&industry=` }),
    });

    console.log(`Searching for: ${searchTerm}`);
      };
      
  
       useEffect(() => {
          const param = searchParams.get('searchTerm')
          if (param !== null && param !== searchTerm) {
            setSearchTerm(param)
          }
        }, [searchParams])

        useEffect(() => {
                setLoading(true)
                const fetchData = async () => {
                  const res = await fetch('/api/get-search-terms')
                  const data = await res.json()
                  setPopularSearchTerms(data)
                  setLoading(false)
                }
            
                fetchData()
              }, [])
            







  
  return (
    <div className="relative overflow-hidden">
   

    <div className="container relative z-10 mx-auto px-4 py-4 md:py-4 lg:py-4">
      <div className="mx-auto max-w-4xl text-center ">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Find Your <span className="text-primary">Dream Job</span> Today
        </h1>
        <p className="mb-8 text-lg text-muted-foreground md:text-xl">
          Discover thousands of job opportunities with all the information you need. Your next career move starts
          here.
        </p>

        <div className="mx-auto mb-8 max-w-3xl rounded-xl bg-card p-4 shadow-lg md:p-6 bg-white">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto]">
            <div className="relative border-gray-500 border-[1.2px] rounded-md py-2">
              <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Job title, keywords, or ..." className="pl-10 p-1 focus:outline-none"  value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            {/* <div className="relative border-gray-500 border-[1.2px] rounded-md py-2">
              <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="City, state, or remote" className="pl-10 focus:outline-none" />
            </div> */}
            <button onClick={handleSearchSubmit} className="bg-black p-3 rounded-md text-white">
              Search Jobs
            </button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>Popular searches:</span>


          {
            popularSearchTerms.map((item)=>{
              return (<Link key={item.term} href={item.link} className="rounded-full px-3 py-1 bg-gray-100 text-gray-500 hover:text-black">
                {item.term}
              </Link>)
            })
          }
        </div>
      </div>

    

     
    </div>
  </div>

  )
}
