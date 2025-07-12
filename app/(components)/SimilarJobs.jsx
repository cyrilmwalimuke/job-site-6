import { DollarSign, MapPin } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SimilarJobs({id}) {
    const [similarJobs,setSimilarJobs] = useState([])

    useEffect(()=>{
        const fetchJobs  = async () =>{
            const res  = await fetch(`/api/get-related-jobs/${id}`)
            const data  = await res.json()
            setSimilarJobs(data)

        }
        fetchJobs()
    },[])
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border">
    <h3 className="text-lg font-semibold mb-4">Similar Jobs</h3>
    <div className="space-y-4">
      {similarJobs.map((relatedJob) => (
        <div key={relatedJob._id} className="pb-4 last:pb-0 border-b last:border-0">
          <Link
            href={`/job/${relatedJob._id}`}
            className="block hover:bg-muted/50 rounded-lg -mx-2 p-2 transition-colors"
          >
            <h4 className="font-medium">{relatedJob.title}</h4>
            <div className="text-sm text-muted-foreground mt-1">{relatedJob.employer_name}</div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <MapPin className="h-3 w-3 mr-1" />
                {relatedJob.location},Kenya
              </div>
             
            </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  
  )
}
