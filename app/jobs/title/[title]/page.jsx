


import { Search, MapPin, Clock, DollarSign, Building, Filter } from "lucide-react"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { headers } from "next/headers";
import JobLoadingSkeleton from '@/app/(components)/JobLoadingSkeleton';
import JobCardSearch from "@/app/(components)/JobCardSearch";
const baseUrl = "https://jobske.com";

dayjs.extend(relativeTime);


function formatTitle(title) {
  return title
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}



export async function generateMetadata({ params }) {
  const jobs = await getJobBySlug(params.title);
  const jobTitle = formatTitle(params.title);
  const now = new Date();
const options = { year: 'numeric', month: 'long' };
const formattedDate = now.toLocaleDateString('en-US', options);
 
  return {
    title:`${jobTitle} Jobs in Kenya - ${formattedDate}`,
    description:  `Browse the latest ${jobTitle} job listings from top companies in Kenya.`,
    keywords: ['Kenya jobs', 'Job board Kenya', 'find jobs', 'Ajira', 'Nairobi jobs', 'remote jobs Kenya', 'ajira Connect'],
  authors: [{ name: 'JobsKe Team', url: 'https://jobske.com' }],
  creator: 'JobsKe',
  openGraph: {
    title: 'JobsKe – Find Jobs in Kenya',
    description: `Discover new opportunities for ${jobTitle} roles.`,
    url:`${baseUrl}/jobs/title/${params.title}`,
    siteName: 'JobsKe',
    images: [
      {
        url:'https://jobske.com/site-identity.png',
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
    description: `Top ${jobTitle} openings now hiring.`,
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





async function getJobBySlug(title) {
const editedTitle = title.replace(/-/g, ' ')


  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;


  try {
    const res = await fetch(`${baseUrl}/api/find-by-title/${editedTitle}`, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching job:", error);
  }

}


export default async function JobsPage({ params }) {
      const title = params.title;
      const jobs= await getJobBySlug(title);
      
    //   if (!jobData) return <JobLoadingSkeleton />;


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
            <h1 className="text-3xl font-bold text-gray-900 capitalize break-words overflow-hidden text-ellipsis">
  Jobs with title <span className="capitalize">{title.replace(/-/g, ' ')}</span>
</h1>
              <p className="mt-2 text-gray-600 break-words overflow-hidden text-ellipsis">Explore <span className="capitalize">{title.replace(/-/g, ' ')}</span> jobs in Kenya</p>
            </div>
            <div className="mt-4 md:mt-0  bg-gray-100 py-1 px-4 rounded-full text-xs font-semibold w-fit">
             
                {jobs.length} jobs available
              
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          
          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCardSearch key={job._id} job={job} />
              ))}
            </div>

            {jobs.length === 0 && (
              <div>
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                  <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
