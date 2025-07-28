

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


function getOrdinalWord(n) {
  const words = [
    'First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth',
    'Eleventh', 'Twelfth', 'Thirteenth', 'Fourteenth', 'Fifteenth', 'Sixteenth', 'Seventeenth',
    'Eighteenth', 'Nineteenth', 'Twentieth', 'Twenty-First', 'Twenty-Second', 'Twenty-Third',
    'Twenty-Fourth', 'Twenty-Fifth', 'Twenty-Sixth', 'Twenty-Seventh', 'Twenty-Eighth',
    'Twenty-Ninth', 'Thirtieth', 'Thirty-First'
  ];
  return words[n - 1];
}

// Main formatter
function formatFancyDate(dateString) {
  const date = dayjs(dateString);
  const weekday = date.format('dddd');              // Thursday
  const day = getOrdinalWord(date.date());          // Seventeenth
  const year = date.format('YYYY');                 // 2025
  const month = date.format('MMMM');                // July

  return `${weekday} ${day} ${year} ${month}`;
}

export async function generateMetadata({ params }) {
  const job = await getJobBySlug(params.slug); 
  return {
    title: job?.title || "Job Details",
    description: job?.description || 'Find Your Dream Job Today.Discover thousands of job opportunities with all the information you need. Your next career move starts here.',
    keywords: ['Kenya jobs', 'Job board Kenya', 'find jobs', 'Ajira', 'Nairobi jobs', 'remote jobs Kenya', 'ajira Connect'],
  authors: [{ name: 'JobsKe Team', url: 'https://jobske.com' }],
  creator: 'JobsKe',
  openGraph: {
    title: 'JobsKe – Find Jobs in Kenya',
    description: job?.description || 'Kenya\'s smart job board helping you connect with top employers. Explore job listings by industry, location, or company.',
    url: 'https://jobske.com',
    siteName: 'JobsKe',
    images: [
      {
        url: job?.employer_logo || 'https://jobske.com/site-identity.png',
        width: 1200,
        height: 630,
        alt: 'JobsKe – Job board in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobsKe – Jobs in Kenya',
    description: 'Smart job listings and career opportunities in Kenya.',
    site: '@jobs_ke',
    creator: '@jobs_ke',
    images: ['https://jobske.com/site-identity.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  };
}

async function getJobBySlug(slug) {



  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;


  try {
    const res = await fetch(`${baseUrl}/api/find-job/${slug}`, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching job:", error);
  }

}



export default async function Job({ params }) {
  const slug = params.slug;
  const jobData = await getJobBySlug(slug);
  const title = jobData.title || "Job Details";
  if (!jobData) return <JobLoadingSkeleton />;

  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "JobPosting",
    "title": jobData.title,
    "description": jobData.description,
    "datePosted": new Date(jobData.updatedAt).toISOString().split("T")[0],
    "validThrough": new Date(jobData.deadline).toISOString(),
    "employmentType": jobData.type?.toUpperCase() || "FULL_TIME",
    "identifier": {
      "@type": "PropertyValue",
      "name": jobData.employer_name,
      "value": jobData._id
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": jobData.employer_name,
      "sameAs": jobData.companyWebsite,
      "logo": jobData.employer_logo
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": jobData.location,
        "addressCountry": "KE"
      }
    },
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "KE"
    },
    ...(jobData.salary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        "currency": "KES",
        "value": {
          "@type": "QuantitativeValue",
          "value": Number(jobData.salary),
          "unitText": "MONTH"
        }
      }
    })
  }
  


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
              {jobData.applicationValue.includes('@') ? (
                  <a
                    href={`mailto:${jobData.applicationValue}`}
                     
                  
                    
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-[1.2px] border-gray-500 rounded-md p-2 hover:bg-gray-50 flex justify-center items-center"
                  >
                    Apply Now
                  </a>
                ) : (
                  <Link
                    href={jobData.applicationValue}
                    className="border-[1.2px] border-gray-500 rounded-md p-2 hover:bg-gray-50 flex justify-center items-center"
                  >
                    Apply Now
                  </Link>
                )}

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
              <div className="prose prose-lg  w-full break-words [&_a]:break-all " dangerouslySetInnerHTML={{ __html: jobData.applicationInstructions }} />
              <p className='font-bold '>Deadline: <span className='underline'>{formatFancyDate(jobData.deadline)}</span></p>
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
