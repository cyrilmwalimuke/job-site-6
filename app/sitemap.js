import { GiCoinsPile } from "react-icons/gi";

export default async function sitemap() {

    // const baseUrl = "https://jobske.com";
    const baseUrl = "http://localhost:3000";


    

   const jobsResponse =await fetch(`${baseUrl}/api/find-jobs`, {
    next: { revalidate: 60 },
    method: 'GET',
  });

    const jobs = await jobsResponse.json();

    const postEntries = jobs.map(job => ({
      url: `${baseUrl}/job/${job.slug}`,
        lastModified: new Date(job.updatedAt),
    }));

   
    const blogsResponse =await fetch(`${baseUrl}/api/get-blogs`, {
        next: { revalidate: 60 },
        method: 'GET',
      });
    const blogs = await blogsResponse.json();

    const blogEntries = blogs.map(blog => ({
        url: `${baseUrl}/blog/${blog.slug}`,
          lastModified: new Date(blog.updatedAt),
      }));


        
    const searchResponse =await fetch(`${baseUrl}/api/find-jobs`, {
      next: { revalidate: 60 },
      method: 'GET',
    });
  const jobSearches = await searchResponse.json();
  const searchEntries = jobSearches.map(search => {
    const url = `${baseUrl}/search?page=1&type=&limit=6&salaryRange=&searchTerm=${encodeURIComponent(search.title)}&experienceLevel=&sort=createdAt&order=desc&jobLocation=&industry=`;
  
    return {
      url: url.replace(/&/g, '&amp;'), // escape & for XML
      lastModified: new Date(search.updatedAt),
    };
  });
  
    console.log(searchEntries)


    const jobsLocationResponse = await fetch(`${baseUrl}/api/find-jobs`, {
      next: { revalidate: 60 },
      method: 'GET',
    });
    
    const jobsLocations = await jobsLocationResponse.json();
    
    // Create a Map to track unique locations
    const seenLocations = new Set();
    
    const locationEntries = jobsLocations
      .filter(job => {
        if (!job.location || seenLocations.has(job.location)) {
          return false;
        }
        seenLocations.add(job.location);
        return true;
      })
      .map(job => ({
        url: `${baseUrl}/jobs/location/${job.location}`,
        lastModified: new Date(job.updatedAt),
      }));
    
  
      const titlesResponse =await fetch(`${baseUrl}/api/find-jobs`, {
        next: { revalidate: 60 },
        method: 'GET',
      });
    
        const titles = await titlesResponse.json();
    
        const titleEntries = titles.map(job => ({
          url: `${baseUrl}/jobs/title/${job.title.toLowerCase().replace(/\s+/g, '-')}`,
            lastModified: new Date(job.updatedAt),
        }));
    


    


      
  



  
    return [
        {
            url: baseUrl,
            lastModified: new Date(),   
        },
        ...postEntries,
        ...blogEntries,
        ...searchEntries,
        ...locationEntries,
        ...titleEntries,
        {
            url: `${baseUrl}/jobs`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/search`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/about-us`,
            lastModified: new Date(),
        },
      
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
        {
          url: `${baseUrl}/career-guide`,
          lastModified: new Date(),
      },


    ]
  }
  