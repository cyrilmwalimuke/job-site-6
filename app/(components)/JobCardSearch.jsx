// import React from 'react'
// import { Bookmark, Briefcase, Clock, DollarSign, ExternalLink,  MapPin } from "lucide-react"
// import Link from 'next/link'
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// dayjs.extend(relativeTime);

// export default function JobCardSearch({job}) {
//   console.log(job._Id)
//   return (

//     <div key={job._Id} className="max-w-lg w-full shadow-lg p-6 rounded-2xl border border-gray-200">
//     <div className="flex items-center gap-4">
//       <img
//         src={job.employer_logo} 
//         alt={job.employer_name}
//         className="w-12 h-12 rounded-full object-cover
//         "
//       />
//       <div>
//         <h2 className="text-xl font-semibold">{job.title}</h2>
//         <p className="text-gray-600">{job.employer_name}</p>
//       </div>
//     </div>
//     <div className="mt-4">
//       <div className="flex items-center gap-2 text-gray-500">
//         <MapPin size={16} />
//         <span>{job.location}</span>
//       </div>
//       <div className="flex items-center gap-2 text-gray-500 mt-2">
//         <Briefcase size={16} />
//         <span>{job.type}</span>
//       </div>
//       <div className="flex items-center gap-2 text-gray-500 mt-2">
//         <Clock size={16} />
//         <span>Posted: {dayjs(job.updatedAt).fromNow()}</span>
//       </div>
//       <p className="text-gray-700 mt-4 text-sm line-clamp-3">
//         {job.description}
//       </p>
//       <div className="mt-4 flex flex-col gap-5  sm:flex-row sm:justify-between items-center">
       
     
//           <Link href={`/job/${job.slug}`} className='flex w-full justify-center gap-2 items-center p-2 border-gray-500 border-[1.2px] rounded-md text-white bg-black'>

//             <ExternalLink />
//             <p>
//             View Job

//             </p>
          
//           </Link>
    
//       </div>
//     </div>
//   </div>

//   )
// }

import React from 'react';
import {
  Bookmark,
  Briefcase,
  Clock,
  DollarSign,
  ExternalLink,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function JobCardSearch({ job }) {
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-3xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={job.employer_logo}
          alt={job.employer_name}
          className="w-14 h-14 rounded-full object-cover border border-gray-300"
        />
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 ">
            {job.title}
          </h2>
          <p className="text-sm text-gray-500">{job.employer_name}</p>
        </div>
        <Bookmark size={20} className="text-gray-400 hover:text-black cursor-pointer" />
      </div>

      {/* Details */}
      <div className=" text-sm text-gray-600 flex items-center flex-wrap gap-3">
        <div className="flex items-center gap-1">
          <MapPin size={16} className="text-gray-400" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Briefcase size={16} className="text-gray-400" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={16} className="text-gray-400" />
          <span>Posted {dayjs(job.updatedAt).fromNow()}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 line-clamp-3">{job.description}</p>

      {/* Footer */}
      <div className="pt-2">
        <Link
          href={`/job/${job.slug}`}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          <ExternalLink size={16} />
          <span>View Job</span>
        </Link>
      </div>
    </div>
  );
}

