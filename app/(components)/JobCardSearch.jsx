import React from 'react'
import { Bookmark, Briefcase, Clock, DollarSign, ExternalLink,  MapPin } from "lucide-react"
import Link from 'next/link'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function JobCardSearch({job}) {
  console.log(job._Id)
  return (

    <div key={job._Id} className="max-w-lg w-full shadow-lg p-6 rounded-2xl border border-gray-200">
    <div className="flex items-center gap-4">
      <img
        src={job.employer_logo} 
        alt={job.employer_name}
        className="w-12 h-12 rounded-full object-cover
        "
      />
      <div>
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className="text-gray-600">{job.employer_name}</p>
      </div>
    </div>
    <div className="mt-4">
      <div className="flex items-center gap-2 text-gray-500">
        <MapPin size={16} />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 mt-2">
        <Briefcase size={16} />
        <span>{job.type}</span>
      </div>
      <div className="flex items-center gap-2 text-gray-500 mt-2">
        <Clock size={16} />
        <span>Posted: {dayjs(job.updatedAt).fromNow()}</span>
      </div>
      <p className="text-gray-700 mt-4 text-sm line-clamp-3">
        {job.description}
      </p>
      <div className="mt-4 flex flex-col gap-5  sm:flex-row sm:justify-between items-center">
       
     
          <Link href={`/job/${job.slug}`} className='flex w-full justify-center gap-2 items-center p-2 border-gray-500 border-[1.2px] rounded-md text-white bg-black'>

            <ExternalLink />
            <p>
            View Job

            </p>
          
          </Link>
    
      </div>
    </div>
  </div>

  )
}
