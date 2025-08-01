


import { Search, MapPin, Clock, DollarSign, Building, Filter } from "lucide-react"
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { headers } from "next/headers";
import JobLoadingSkeleton from '@/app/(components)/JobLoadingSkeleton';
import JobCardSearch from "@/app/(components)/JobCardSearch";



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


  function formatFancyDate(dateString) {
    const date = dayjs(dateString);
    const weekday = date.format('dddd');              // Thursday
    const day = getOrdinalWord(date.date());          // Seventeenth
    const year = date.format('YYYY');                 // 2025
    const month = date.format('MMMM');                // July
  
    return `${weekday} ${day} ${year} ${month}`;
  }

export async function generateMetadata({ params }) {
  const jobs = await getJobBySlug(params.location); 
  return {
    title: `${jobs.length} Jobs in ${params.location.charAt(0).toUpperCase() + params.location.slice(1).toLowerCase()}`,
    description:   `Explore the latest job opportunities available in ${params.location.charAt(0).toUpperCase() + params.location.slice(1).toLowerCase()}. Start your career journey today!`,
  authors: [{ name: 'JobsKe Team', url: 'https://jobske.com' }],
  creator: 'JobsKe',
  openGraph: {
    title: 'JobsKe – Find Jobs in Kenya',
    description: `Find current job openings located in ${params.location}. Browse and apply today.`,
    url:`https://jobske.com/jobs/location/${params.location}`,
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

async function getJobBySlug(location) {



  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;


  try {
    const res = await fetch(`${baseUrl}/api/find-by-location/${location}`, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching job:", error);
  }

}


export default async function JobsPage({ params }) {
      const location = params.location;
      const jobs= await getJobBySlug(location);
      
    //   if (!jobData) return <JobLoadingSkeleton />;


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 capitalize">Jobs in <span className="capitalize">{location}</span></h1>
              <p className="mt-2 text-gray-600">Discover your next career opportunity in  <span className="capitalize">{location}</span></p>
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
