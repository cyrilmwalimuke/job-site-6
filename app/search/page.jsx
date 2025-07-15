"use client"
import { ChevronLeft, ChevronRight, MapPin} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { IoReload, IoSearch } from 'react-icons/io5';
import { useRouter, useSearchParams } from 'next/navigation';
import JobCardSearch from '../(components)/JobCardSearch';
import { BriefcaseIcon, SearchIcon, RefreshCw } from 'lucide-react';
import { CiFilter, CiLocationOn, CiSearch } from 'react-icons/ci';
import { getPaginationPages } from '@/lib/pagination';

export default function Search() {




  const searchParams = useSearchParams()
  const getParam = (key) => searchParams.get(key)
  const [searchTerm,setSearchTerm] = useState(getParam('searchTerm') || '')
  const [page, setPage] = useState(1);
  const [jobType, setJobType] = useState("")
  const [salaryRange, setSalaryRange] = useState("");
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [sort, setSort] = useState("createdAt");
  const [order, setOrder] = useState("desc");
  const [jobLocation, setJobLocation] = useState("")
  const [industry, setIndustry] = useState("")
  const [limit, setLimit] = useState(6)
  const router = useRouter()
  const myRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [totalPages, setTotalPages] = useState(1)
  const [totalDispalyPages, setTotalDispalyPages] = useState(0);

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
  }, 
  []);

    const handleExperienceChange = (level) => {
        setExperienceLevel(prevLevels =>
          prevLevels.includes(level)
            ? prevLevels.filter(item => item !== level)
            : [...prevLevels, level]
        );
      };



  useEffect(() => {
    setLoading(true)
    const fetchJobs = async () => {
      try {
     
        const params = new URLSearchParams();

        params.set('page', page);
        params.set('type', jobType);
        params.set('limit', limit);
        params.set('salaryRange', salaryRange);
        params.set('searchTerm', searchTerm);
        params.set('experienceLevel', experienceLevel.join(',')); // If experienceLevel is an array
        params.set('sort', sort);
        params.set('order', order);
        params.set('jobLocation', jobLocation);
        params.set('industry', industry);
      
        // Push the updated URL to the router (this will trigger a page refresh with the new query params)
        router.push(`/search?${params.toString()}`)

        const res = await fetch(`/api/get-jobs?${params.toString()}`)

        if (!res.ok) {
          throw new Error('Failed to fetch listings')
        }

        const datafromApi = await res.json()
        setData(datafromApi.jobsInDb)
        setTotalPages(datafromApi.totalPages)
        setTotalDispalyPages(datafromApi.totalDIsplayPages)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [searchTerm, salaryRange, industry, jobType, jobLocation,experienceLevel,page,limit])

  useEffect(() => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [page]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams({
        searchTerm: searchTerm,
        salaryRange: salaryRange,
        industry: industry,
        type: jobType,
        experienceLevel: experienceLevel.join(','),
        location: jobLocation,
        sort: 'createdAt',
        order: 'desc',
        limit: limit,
        page: page,
      })



      const res = await fetch(`/api/get-jobs?${params.toString()}`)

      if (!res.ok) {
        throw new Error('Failed to fetch listings')
      }

      const datafromApi = await res.json()
      setData(datafromApi.jobsInDb)
      setTotalPages(datafromApi.totalPages)
      setTotalDispalyPages(datafromApi.totalDIsplayPages)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }


    if (!searchTerm.trim()) return;

    await fetch('/api/search-term', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ term: searchTerm,link:`/search?page=1&type=&limit=6&salaryRange=&searchTerm=${searchTerm}&experienceLevel=&sort=createdAt&order=desc&jobLocation=&industry=` }),
    });

    console.log(`Searching for: ${searchTerm}`);
  }

  useEffect(() => {
    const param = searchParams.get('searchTerm')
    if (param !== null && param !== searchTerm) {
      setSearchTerm(param)
    }
  }, [searchParams])
  

  
 



  return (
    <main ref={myRef} className="container mx-auto px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Find your dream job</h2>
        <p className="text-gray-600">Discover thousands of job opportunities with all the information you need.</p>
      </div>

      {/* Search Bar */}

      
  


      <form className='rounded-lg  shadow-lg border-[1.2px] sm:w-250 sm:mx-auto  p-1 sm:p-2  sm:px-8 mb-8 flex flex-col gap-5 items-center justify-center  sm:justify-between sm:flex-row' onSubmit={handleSubmit}>
        <div className='flex justify-between items-center '>
        <div className="relative flex items-center border  border-gray-100  rounded-lg p-2 mr-1 ml-auto bg-white">
            <IoSearch className="absolute  left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input placeholder="Job title or keyword" className="pl-10 focus:outline-none w-full" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          </div>


          <div className=' flex sm:hidden bg-black text-white p-2 rounded-lg mr-4'>
            <CiSearch size={20}/>
          
          </div>
          <div onClick={() => setShowFilters(!showFilters)} className = {`sm:hidden font-bold p-2 rounded-md ${showFilters?'bg-teal-100':'bg-white'}`}
          >
          <CiFilter size={20}  />
          </div>
     

        </div>
         

          <div className='hidden sm:flex h-10 w-[1px] bg-black'>

          </div>
        

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

      <div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Section */}
       {showFilters && ( <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold">Filters</h3>
              <button className="text-sm " onClick={()=>{
                setExperienceLevel([])
                setIndustry('')
                setSalaryRange('')
                setSort('relevance')
                
              
              }}>Clear all</button>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-3">Experience Level</h4>
                <div className="space-y-2">
                {['Entry level', 'Mid level', 'Senior level', 'Director', 'Executive'].map(level => (
              <div key={level} className="flex items-center mb-2">
                <input type="checkbox" id={level} className="mr-2" checked={experienceLevel.includes(level)} onChange={() => handleExperienceChange(level)} />
                <label htmlFor={level} className="text-sm text-gray-600">{level}</label>
              </div>
            ))}
                </div>
              </div>


              <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="p-2 border border-gray-300 rounded focus:outline-none" value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="recent">Most Recent</option>
                <option value="salary-high">Salary (High to Low)</option>
                <option value="salary-low">Salary (Low to High)</option>
              </select>
            </div>

            


            <select className="border border-gray-500 rounded-md p-2 focus:outline-none w-full" value={jobType} onChange={(e) => setJobType(e.target.value)}>
              <option value="" disabled>Job type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>


              <div>
                <h4 className="text-sm font-medium mb-3">Salary Range</h4>
                <select className="border-gray-500 border-[1.2px] rounded-md p-2" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)}>
            <option value="">Select Salary Range</option>
            <option value="0-50000">kshs 15k - kshs 50k</option>
            <option value="50000-100000">kshs 50k - kshs 100k</option>
            <option value="100000-350000">kshs 100k - kshs 350k</option>
            <option value="350000-1000000">kshs 350k+</option>
          </select>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-3">Industry</h4>
                <select className="w-full p-2 border border-gray-300 rounded focus:outline-none" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                  <option value="" disabled>Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Retail">Retail</option>
                </select>
              </div>
              <button 
              onClick={handleSubmit}
              className="w-full py-2 bg-black cursor-pointer text-white rounded">Apply Filters</button>
            </div>
          </div>
        </div>)}

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
  {totalDispalyPages > 0 ? (
    <>
      Showing <span className="font-medium">{totalDispalyPages}</span> {data.length > 1 ? "jobs" : "job"} 
      {searchTerm && ` for "${searchTerm}"`}
    </>
  ) : (
    searchTerm ? `No results for "${searchTerm}"` : "Showing 0 jobs"
  )}
</p>
          </div>


        
    <div className=''>
    {loading ? (
     <div className="flex flex-col gap-5 items-center justify-center">
     <span className="loader"></span>
     <div>"Finding the best jobs for you…</div>

   </div>
    ) : data.length === 0 ? (
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 text-gray-600">
      <BriefcaseIcon className="w-16 h-16 mb-4 text-blue-500" />
      <h2 className="text-2xl font-semibold mb-2">No jobs found</h2>
      <p className="text-base mb-6 max-w-md">
        We couldn’t find any listings matching your criteria. Try broadening your search or checking back later.
      </p>
      <div className="flex gap-4">
        <button
          className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() =>{
            setSearchTerm('')
            setJobType('')
            setSalaryRange('')
            setExperienceLevel([])
            setJobLocation('')
            setIndustry('')
            setPage(1)
            router.push('/search')
          } }
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
        <button
          className="inline-flex items-center gap-2 px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition"
          onClick={() => window.location.href = '/'}
        >
          <SearchIcon className="w-4 h-4" />
          Go to Home
        </button>
      </div>
    </div>
    ) : (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {data.map((job) => (
          <JobCardSearch key={job._id} job={job} />
        ))}

      </div>
    )}

    </div>


   {data.length>0 && !loading && (<div className="flex gap-2 items-center justify-center mt-6">
  <button
    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
    disabled={page === 1}
    className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
  >
    Prev
  </button>

        {getPaginationPages(page, totalPages).map((p, index) =>
          p === '...' ? (
            <span key={index} className="px-2">...</span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded ${
                p === page ? 'bg-black text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {p}
            </button>
          )
        )}

  <button
    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
    disabled={page === totalPages}
    className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
)}     
        </div>
      </div>
    </main>
  );
}


