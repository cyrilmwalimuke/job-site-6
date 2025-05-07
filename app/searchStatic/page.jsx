"use client"
import { ChevronLeft, ChevronRight, MapPin} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import { IoReload, IoSearch } from 'react-icons/io5';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { jobs } from '@/data/jobs2';
import JobCardSearch from '../(components)/JobCardSearch';




export function useQuery() {
    const searchParams = useSearchParams();
    return searchParams;
  }

export default function Search({ sideBar, setSideBar }) {

    function useQuery() {
        const searchParams = useSearchParams();
        return searchParams;
      }
  const [jobType, setJobType] = useState("");
  let query  = useQuery().get("query")
const router = useRouter()
  const myRef = useRef(null);

  const [searchTerm,setSearchTerm] = useState(query);
  const [salaryRange, setSalaryRange] = useState("");
  const [industry, setIndustry] = useState("");
   const [experienceLevel, setExperienceLevel] = useState([]);
  const [sortBy, setSortBy] = useState("relevance");
const [data, setData] = useState(jobs);
const [jobLocation, setJobLocation] = useState("");



const scrollToDiv = () => {
  myRef.current?.scrollIntoView({ behavior: 'smooth' });
};

  
// const location = useLocation();
// const pathname = location.pathname;

useEffect(() => {
  let filteredJobs = jobs;
  if (searchTerm) {
    filteredJobs = filteredJobs.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  setData(filteredJobs);
},[searchTerm])

useEffect(()=>{
  setSearchTerm(query);

},[query])


const filterJobs = () => {
    let filteredJobs = jobs;

    if (searchTerm) {
        filteredJobs = filteredJobs.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    if (jobLocation) {
        filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().includes(jobLocation.toLowerCase()));
    }

    if (jobType) {
        filteredJobs = filteredJobs.filter(job => job.type === jobType);
    }

    if (salaryRange) {
        const [min, max] = salaryRange.split('-').map(Number);
        filteredJobs = filteredJobs.filter(job => job.salary >= min && (max ? job.salary <= max : true));
    }

    if (industry) {
        filteredJobs = filteredJobs.filter(job => job.industry === industry);
    }

    if (experienceLevel.length > 0) {
        filteredJobs = filteredJobs.filter(job => experienceLevel.includes(job.experience));
    }

    
    if (sortBy === 'salary-high') {
        filteredJobs = filteredJobs.sort((a, b) => b.salary - a.salary);
    } else if (sortBy === 'salary-low') {
        filteredJobs = filteredJobs.sort((a, b) => a.salary - b.salary);
    }
    
  
  

    setData(filteredJobs);
};

const handleExperienceChange = (level) => {
    setExperienceLevel(prevLevels =>
      prevLevels.includes(level)
        ? prevLevels.filter(item => item !== level)
        : [...prevLevels, level]
    );
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
            <input placeholder="Job title or keyword" className="pl-10 focus:outline-none w-full" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          </div>
          <div className="relative flex items-center border border-gray-500 rounded-md p-2">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input placeholder="Location - Default to any Location]" className="pl-10 focus:outline-none w-full" value={jobLocation} onChange={(e)=>setJobLocation(e.target.value)}/>
          </div>
          <div className="flex gap-2">
            <select className="border border-gray-500 rounded-md p-2 focus:outline-none w-full" value={jobType} onChange={(e) => setJobType(e.target.value)}>
              <option value="" disabled>Job type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
            <button onClick= {()=>{
              filterJobs()
              scrollToDiv()
            }} className="flex cursor-pointer items-center bg-black text-white py-2 px-4 rounded-md">
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
                <input type="checkbox" id={level} className="mr-2" checked={experienceLevel.includes(level)} onChange={() => handleExperienceChange(level)} />
                <label htmlFor={level} className="text-sm text-gray-600">{level}</label>
              </div>
            ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-3">Salary Range</h4>
                <select className="border-gray-500 border-[1.2px] rounded-md p-2" value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)}>
            <option value="">Select Salary Range</option>
            <option value="0-50000">kshs 15k - kshs 50k</option>
            <option value="50000-100000">kshs 50k - kshs 100k</option>
            <option value="100000-350000">kshs 100k - kshs 350k</option>
            <option value="350000">kshs 350k+</option>
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
              <button onClick={filterJobs} className="w-full py-2 bg-black cursor-pointer text-white rounded">Apply Filters</button>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">Showing <span className="font-medium">{data.length}</span> jobs</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="p-2 border border-gray-300 rounded focus:outline-none" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="relevance">Relevance</option>
                <option value="recent">Most Recent</option>
                <option value="salary-high">Salary (High to Low)</option>
                <option value="salary-low">Salary (Low to High)</option>
              </select>
            </div>
          </div>


          {data.length === 0?(<div className='flex h-120 items-center justify-center font-semibold'>
            <div>
              <p className='text-3xl'>No Jobs Found For the specified filters</p>
              <button onClick={
                ()=>{
                  setSearchTerm('')
                  setData(jobs)
                  router.push('/search')
                
                }
              } className='flex w-full items-center justify-center gap-3'>
              <IoReload colour='green'/>
              <p className='text-lg'>Refresh Jobs</p>

              </button>
              
            

            </div>
           

          </div>):
          (<div ref={myRef} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.map((job) => (
              <JobCardSearch key={job.Id} job={job} />
            ))}
          </div>)}

      

          {data.length===0?(null):(<div className='mt-5 flex items-center justify-center'>

<div className='text-white flex gap-3'>
  <ChevronLeft size={25} className='bg-black px-2 py-1 rounded-md'/>
{
  [1,2,3,4,4,6,7].map((page)=>{
    return (
      <div className='text-xs py-1 px-2 bg-black rounded-md text-white'>
        <p>{page}</p>

      </div>
    )
  })
}
<ChevronRight size={25} className='bg-black px-2 py-1 rounded-md'/>
  
</div>

</div>)}

         
        </div>
      </div>
    </main>
  );
}
