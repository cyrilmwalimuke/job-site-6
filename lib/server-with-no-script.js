

import Link from 'next/link';
import { headers } from 'next/headers';
import { ArrowLeft, Bookmark, Briefcase, Calendar, Clock, MapPin, Share2 } from 'lucide-react';
import ShareButtons from '@/app/(components)/ShareButtons';
import SimilarJobs from '@/app/(components)/SimilarJobs';
import JobLoadingSkeleton from '@/app/(components)/JobLoadingSkeleton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import BookmarkClient from '@/app/(components)/BookmarkClient';
import Head from "next/head";
import { notFound } from "next/navigation";

dayjs.extend(relativeTime);




export default async function Job({ params }) {
  const slug = params.slug;

  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  let jobData = null;
  try {
    const res = await fetch(`${baseUrl}/api/find-job/${slug}`, {
      cache: 'no-store',
    });
    jobData = await res.json();
  } catch (error) {
    console.error("Error fetching job:", error);
  }

  if (!jobData) return <JobLoadingSkeleton />;

  const title = jobData.title || "Job Details";

  return (
    

      <main className="container mx-auto px-4 py-8">
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>
        <div className="mb-6">
          <Link href="/search" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all jobs
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
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
                    <div className="flex items-center text-sm">
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
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      Posted {dayjs(jobData.updatedAt).fromNow()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-6 items-center">
                <Link
                  href={jobData.applicationValue}
                  className="border-[1.2px] border-gray-500 rounded-md p-2 hover:bg-gray-50 flex justify-center items-center"
                >
                  Apply Now
                </Link>
                <button>
                  <Share2 className="h-6 w-6" />
                </button>
             
                <BookmarkClient jobData={jobData} />
                <ShareButtons />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="prose max-w-none">
                <h2 className='font-semibold text-lg'>Job Description</h2>
                <p>{jobData.description}</p>

                <h3 className='font-semibold text-lg mt-3'>Responsibilities</h3>
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: jobData.responsibilities }} />

                <h3 className='mt-3 font-semibold text-lg'>Requirements:</h3>
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: jobData.education_qualification_experience_skills_traits }} />
              </div>
            </div>

            <div className='rounded-xl shadow-sm border-black p-4 border-[1.2px]'>
              <h3 className='font-semibold text-lg mt-3'>How to Apply</h3>
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: jobData.applicationInstructions }} />
              <p className='font-bold'>Deadline: <span>{jobData.deadline}</span></p>
            </div>
          </div>

          <div className="space-y-8">
            <div className='flex flex-col gap-5'>
              <div className='h-100 w-full bg-gray-50 rounded-md flex items-center justify-center'>
                <p className='text-gray-600 text-2xl'>AD AREA</p>
              </div>
              <SimilarJobs id={jobData._id} />
            </div>
          </div>
        </div>
      </main>
    
  );
}
