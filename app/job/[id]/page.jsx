"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { ArrowLeft, Bookmark, Briefcase, Building2, Calendar, Clock, DollarSign, MapPin, Share2 } from "lucide-react"

import { GoDotFill } from 'react-icons/go'
import { useParams } from 'next/navigation'
import { jobs } from '@/data/jobs2'




export default function Job({params}) {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(jobData)

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/find-job/${id}`);
        const data = await res.json();
        setJobData(data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);


  const addToWishList = async (thisProduct) => {
    // const res = await fetch(`/api/save-to-wishlist/${email}`, {
      const res = await fetch('/api/save-to-wishlist', {
      method: 'POST',
      body: JSON.stringify(thisProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    alert('Job Added to your wishlist')

   
  }
      
        if (loading) return (
          <div className='flex justify-center items-center h-screen'>
            <div className="flex items-center justify-center h-32">
  <div className="w-10 h-10 border-2  rounded-full animate-spin border-gray-500"></div>
</div>
          </div>


        )
  


   
  
  return (
    <div>


    <main className="container mx-auto px-4 py-8 ">
      <div className="mb-6">
        <Link href="/search" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all jobs
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          {/* Job Header */}
          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="h-16 w-16 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center flex-shrink-0">
                {jobData.employer_logo ? (
                  <img
                    src={jobData.employer_logo || "/placeholder.svg"}
                    alt={jobData.employer_name}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <Briefcase className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{jobData.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 ">
                  <div className="flex items-center text-sm ">
                
                    <Link
                      href={`/companies/${jobData.employer_name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-primary"
                    >
                      {jobData.employer_name}
                    </Link>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {jobData.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {jobData.type}
                  </div>
                  {jobData.salary && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {jobData.salary}
                    </div>
                  )}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Posted {jobData.posted_at}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 items-center">
              <button className="border-[1.2px] border-gray-500 rounded-md p-2 hover:bg-gray-50 flex justify-center items-center">
                Apply Now
              </button>
              <button variant="outline" size="icon">
                <Share2 className="h-6 w-6" />
                <span className="sr-only">Share</span>
              </button>
              <button onClick={()=>addToWishList(jobData)}>
              <Bookmark className="h-6 w-6" />


              </button>
            </div>
          </div>

          {/* Job Details */}
          <div className="bg-white rounded-xl shadow-sm p-6 border ">
            <div className="prose max-w-none">
              <h2 className='font-semibold text-lg'>Job Description</h2>
              <p>{jobData.description}</p>

            

              <h3 className='font-semibold text-lg mt-3'>Responsibilities</h3>
              {/* {
                jobData.responsibilities.map((responsibility) => {
                    return(
                        <div className='flex gap-2 ' key={responsibility}>
                            <GoDotFill size={18} />
                            <p>{responsibility}</p>

                        </div>
                    )

                })
              } */}
            
            {jobData.responsibilities}



            

              <h3 className='mt-3 font-semibold text-lg'>Requirements:</h3>

              {/* {
  jobata.education_qualification_experience_skills_traits.map((responsibility) => (
    <div className="flex items-center gap-2" key={responsibility}>
      <GoDotFill className="w-5 h-5 shrink-0 text-gray-600" />
      <p className="text-base">{responsibility}</p>
    </div>
  ))
} */}

{jobData.education_qualification_experience_skills_traits}






             
            </div>

            <div className="mt-8">
              {/* <h3 className="text-lg font-semibold mb-3">Skills & Expertise</h3> */}
              {/* <div className="flex flex-wrap gap-2"> */}
                {/* {job.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="font-normal">
                    {tag}
                  </Badge>
                ))} */}
              {/* </div> */}
            </div>
          </div>

          {/* Application Form */}
          {/* <JobApplication jobId={job.id} jobTitle={job.title} /> */}
        </div>

        <div className="space-y-8">
          {/* Company Info */}
          {/* <CompanyCard
            name={job.company}
            logo={job.companyLogo}
            description="A leading company in the industry with a focus on innovation and growth. We're committed href creating a diverse and inclusive workplace where all employees can thrive."
            size="250-500 employees"
            industry="Technology"
            website="https://example.com"
            founded="2010"
          /> */}

          <div className='flex flex-col gap-5'>

            <div className='h-100 w-full bg-gray-50 rounded-md flex items-center justify-center'>
              <p className='text-gray-600 text-2xl'>AD AREA</p>

            </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <h3 className="text-lg font-semibold mb-4">Similar Jobs</h3>
            <div className="space-y-4">
              {jobs.map((relatedJob) => (
                <div key={relatedJob.Id} className="pb-4 last:pb-0 border-b last:border-0">
                  <Link
                    href={`/jobs/${relatedJob.Id}`}
                    className="block hover:bg-muted/50 rounded-lg -mx-2 p-2 transition-colors"
                  >
                    <h4 className="font-medium">{relatedJob.title}</h4>
                    <div className="text-sm text-muted-foreground mt-1">{relatedJob.employer_name}</div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {relatedJob.location}
                      </div>
                      {relatedJob.salary && (
                        <div className="flex items-center">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {relatedJob.salary}
                        </div>
                      )}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          </div>




          
        </div>
      </div>
    </main>
  </div>
  
  )
}
