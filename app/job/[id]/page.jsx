"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs';

import { ArrowLeft, Bookmark,Briefcase ,Building2, Calendar, Clock, DollarSign, MapPin, Share2 } from "lucide-react"

import { GoDotFill } from 'react-icons/go'
import { useParams, useRouter } from 'next/navigation'
import ShareButtons from '@/app/(components)/ShareButtons'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import SimilarJobs from '@/app/(components)/SimilarJobs';
import JobLoadingSkeleton from '@/app/(components)/JobLoadingSkeleton';




dayjs.extend(relativeTime);








export default  function Job({params}) {
  const { id } = useParams();
  const [jobData, setJobData] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(jobData)
  const title = jobData.title || "Job Details";
  const { isSignedIn, user, isLoaded } = useUser();
  console.log(isSignedIn,user,isLoaded)
  const router  = useRouter()

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
    if (user ===null){
      alert("please login to save a job")
      router.push('/login')
      return
    }

    const res1 = await fetch(`/api/get-whish-item/${thisProduct.title}`)
    const correctData = await res1.json()

    console.log(correctData.exist)

    if(correctData.exists === true) {
      alert("product already in the wishList")
      return
    }

    






    
      const res2 = await fetch('/api/save-to-wishlist', {
      method: 'POST',
      body: JSON.stringify(thisProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    alert('Job Added to your wishlist')

   
  }
      

if (loading) return <JobLoadingSkeleton/>
   
  
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
                  {/* {jobData.salary && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {jobData.salary}
                    </div>
                  )} */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    Posted {dayjs(jobData.updatedAt).fromNow()}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-6 items-center ">
              <button className="border-[1.2px] border-gray-500 rounded-md p-2 hover:bg-gray-50 flex justify-center items-center">
                Apply Now
              </button>
              <button variant="outline" size="icon">
                <Share2 className="h-6 w-6" />
              
              </button>
              <button onClick={()=>addToWishList(jobData)}>
              <Bookmark className="h-6 w-6" />



              </button>
              <ShareButtons/>
            
              
             
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
            
            {/* {jobData.responsibilities} */}

            <div className="prose  prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: jobData.responsibilities }} />



            

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


            <SimilarJobs/>

         

          </div>




          
        </div>
      </div>
    </main>
  </div>
  
  )
}
