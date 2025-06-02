'use client';

import React,{ useEffect, useState,useRef} from 'react';
import { useRouter, useSearchParams, Link} from 'next/navigation';

import { ChevronLeft, ChevronRight, MapPin} from 'lucide-react';


import { IoReload, IoSearch } from 'react-icons/io5';
// import { useSearchParams } from 'next/navigation';

// import { jobs } from '@/data/jobs2';
import JobCardSearch from '../(components)/JobCardSearch';
import { BriefcaseIcon, SearchIcon, RefreshCw } from 'lucide-react';

const letters = 'abcdefghijklmnporstuvw'; // 20 letters (no q, x, y, z, etc.)
  const digits = '123456789'; // 1 to 9

  const charset = letters + digits;
  let result = '';

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset[randomIndex];
  }




function getPaginationPages(currentPage, totalPages) {
  const pages = [];

  if (totalPages <= 5) {
    // show all pages
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // always show first, last, current, and surrounding pages
    pages.push(1);

    if (currentPage > 3) pages.push('...');

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push('...');

    pages.push(totalPages);
  }

  return pages;
}


export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const myRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const[totalDispalyPages,setTotalDispalyPages] = useState(0)


  const [sidebardata, setSidebardata] = useState({
    searchTerm: '',
    page: 1,
    limit : 6,     
    jobType:"",
    salaryRange: "",
    totalPages: 1,
    industry: "",
    experienceLevel: [],
    sort: "createdAt",
    order: "desc",
    jobLocation: "",
  

  
  });


  

  useEffect(() => {
    const getParam = (key) => searchParams.get(key);

    setSidebardata({
      searchTerm: getParam('searchTerm') || '',
      page: parseInt(getParam('page')) || 1,
      limit: parseInt(getParam('limit')) || 6,
      jobType: getParam('jobType') || '',
      salaryRange: getParam('salaryRange') || '',
      totalPages: parseInt(getParam('totalPages')) || 1,
      industry: getParam('industry') || '',
      experienceLevel: getParam('experienceLevel')
        ? getParam('experienceLevel').split(',') // Assuming it's a comma-separated string
        : [],
      sort: getParam('sort') || 'createdAt',
      order: getParam('order') || 'desc',
      jobLocation: getParam('jobLocation') || '',
  
    })

    const fetchListings = async () => {
      setLoading(true);

      const res = await fetch(`/api/get-jobs?${searchParams.toString()}`);
      
      const datafromApi = await res.json()
      setData(datafromApi.jobsInDb)
      setTotalPages(datafromApi.totalPages)
      setTotalDispalyPages(datafromApi.totalDIsplayPages)
      setLoading(false);
 
     
    };

    fetchListings();

    
  }, [searchParams.toString()]);


  const handleExperienceChange = (level) => {
    setExperienceLevel(prevLevels =>
      prevLevels.includes(level)
        ? prevLevels.filter(item => item !== level)
        : [...prevLevels, level]
    );
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    Object.entries(sidebardata).forEach(([key, val]) => {
      params.set(key, val);
    });
    router.push(`/search-3?${params.toString()}`);
  };



  return (

    
     <main className="container mx-auto px-4 py-8 pt-20">
      
          <div className="mb-8">

         

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Find your dream job</h2>
            <p className="text-gray-600">Discover thousands of job opportunities with all the information you need.</p>
          </div>
    
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative flex items-center border border-gray-500 rounded-md p-2">
                <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input placeholder="Job title or keyword" className="pl-10 focus:outline-none w-full" value={sidebardata.searchTerm}
  onChange={(e) =>
    setSidebardata({ ...sidebardata, searchTerm: e.target.value })
  }/>
              </div>
              <div className="relative flex items-center border border-gray-500 rounded-md p-2">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input placeholder="Location - Default to any Location]" className="pl-10 focus:outline-none w-full" value={sidebardata.jobLocation} onChange={(e)=>setSidebardata({...sidebardata,jobLocation:e.target.value})}/>
              </div>
              <div className="flex gap-2">
                <select className="border border-gray-500 rounded-md p-2 focus:outline-none w-full" value={sidebardata.jobType}  onChange={(e)=>setSidebardata({...sidebardata,jobType:e.target.value})}>
                  <option value="" disabled>Job type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </select>
                {/* <button onClick= {()=>{
                  // filterJobs()
                  scrollToDiv()
                }} className="flex cursor-pointer items-center bg-black text-white py-2 px-4 rounded-md">
                  <IoSearch className="h-4 w-4 mr-2" /> Search
                </button> */}

<button
  onClick= {handleSubmit}
  className="flex cursor-pointer items-center bg-black text-white py-2 px-4 rounded-md"
>
  <IoSearch className="h-4 w-4 mr-2" /> Search
</button>

              </div>
            </div>
          </div>
    
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold">Filters</h3>
                  <button className="text-sm " onClick={()=>{
                    setExperienceLevel([])
                    setIndustry('')
                    setSalaryRange('')
                    setSortBy('relevance')
                    
                  
                  }}>Clear all</button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Experience Level</h4>
                    <div className="space-y-2">
                    {['Entry level', 'Mid level', 'Senior level', 'Director', 'Executive'].map(level => (
                  <div key={level} className="flex items-center mb-2">
                    <input type="checkbox" id={level} className="mr-2" checked={sidebardata.experienceLevel.includes(level)} onChange={() => handleExperienceChange(level)} />
                    <label htmlFor={level} className="text-sm text-gray-600">{level}</label>
                  </div>
                ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Salary Range</h4>
                    <select className="border-gray-500 border-[1.2px] rounded-md p-2" value={sidebardata.salaryRange} onChange={(e)=>
                      setSidebardata({...sidebardata,salaryRange:e.target.value})}>
                <option value="">Select Salary Range</option>
                <option value="0-50000">kshs 15k - kshs 50k</option>
                <option value="50000-100000">kshs 50k - kshs 100k</option>
                <option value="100000-350000">kshs 100k - kshs 350k</option>
                <option value="350000-1000000">kshs 350k+</option>
              </select>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-3">Industry</h4>
                    <select className="w-full p-2 border border-gray-300 rounded focus:outline-none" value={sidebardata.industry} onChange={(e)=>
                      setSidebardata({...sidebardata,industry:e.target.value})}>
                      <option value="" disabled>Select Industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Finance">Finance</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                    </select>
                  </div>
                  <button 
                  // onClick={filterJobs}
                  className="w-full py-2 bg-black cursor-pointer text-white rounded">Apply Filters</button>
                </div>
              </div>
            </div>
    
            {/* Job Listings */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Showing <span className="font-medium">{totalDispalyPages}</span> jobs</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="p-2 border border-gray-300 rounded focus:outline-none" value={sidebardata.sort} onChange={(e)=>
                      setSidebardata({...sidebardata,sort:e.target.value})}>
                    <option value="relevance">Relevance</option>
                    <option value="recent">Most Recent</option>
                    <option value="salary-high">Salary (High to Low)</option>
                    <option value="salary-low">Salary (Low to High)</option>
                  </select>
                </div>
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
              onClick={() => window.location.reload()}
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
                <span key={index}  className="px-2">...</span>
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
