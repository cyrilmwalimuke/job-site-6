'use client'

import React, { useEffect, useState } from 'react'

export default function Page() {
  const [rapidJobs, setRapidJobs] = useState([])
  console.log(rapidJobs)

  useEffect(() => {
    const fetchRapidJobs = async () => {
      const res = await fetch('/api/get-rapid-jobs')
      const data = await res.json()
      setRapidJobs(data)
    }

    fetchRapidJobs()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Jobs in Kenya</h1>
      {rapidJobs?.length === 0 ? (
        <p>Loading jobs...</p>
      ) : (
        <ul className="space-y-4">
          {rapidJobs?.map((job, i) => (
            <li key={i} className="border rounded p-3">
              <h2 className="text-lg font-semibold">{job.job_title}</h2>
              <p>{job.employer_name}</p>
              <p>{job.job_city}, {job.job_country}</p>
              <a
                href={job.job_apply_link}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
