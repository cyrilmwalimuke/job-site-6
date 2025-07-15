"use client"
import React, { use, useState } from 'react'

export default function SearchFilters() {
    const [showFilters,setShowFilters] = useState(true)
    const [experienceLevel,setExperienceLevel] = useState("Senior Level")
    const [sort,setSort] = useState("featured")
    const [jobType,setJobType] = useState("Full Time")
    const [salaryRange,setSalaryRange] =useState("1000-5000")
    const [industry,setIndustry] = useState("Finance")
    const [data,setData] = useState([])

    
  return (
    <div>
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
               {/* <button 
              onClick={handleSubmit}
               className="w-full py-2 bg-black cursor-pointer text-white rounded">Apply Filters</button> */}
             </div>
           </div>
         </div>)}
    </div>
  )
}
    

 
