import { GiCoinsPile } from "react-icons/gi";

export default async function sitemap() {

    const baseUrl = "https://jobske.com"
   

 
    
   


    

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


        
  //   const searchResponse =await fetch(`${baseUrl}/api/find-jobs`, {
  //     next: { revalidate: 60 },
  //     method: 'GET',
  //   });
  // const jobSearches = await searchResponse.json();
  // const searchEntries = jobSearches.map(search => {
  //   const url = `${baseUrl}/search?page=1&type=&limit=6&salaryRange=&searchTerm=${encodeURIComponent(search.title)}&experienceLevel=&sort=createdAt&order=desc&jobLocation=&industry=`;
  
  //   return {
  //     url: url.replace(/&/g, '&amp;'), // escape & for XML
  //     lastModified: new Date(search.updatedAt),
  //   };
  // });
  
  //   console.log(searchEntries)


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
        url: `${baseUrl}/jobs/location/${job.location.toLowerCase()}`,
        lastModified: new Date(job.updatedAt),
      }));
    
  


        
    const companiesResponse = await fetch(`${baseUrl}/api/find-jobs`, {
      next: { revalidate: 60 },
      method: 'GET',
    });
    
    const companies = await companiesResponse.json();
    
    // Create a Map to track unique locations
    const seenCompanies = new Set();
    
    const companyEntries = companies
      .filter(job => {
        if (!job.employer_name || seenCompanies.has(job.employer_name)) {
          return false;
        }
        seenCompanies.add(job.employer_name);
        return true;
      })
      .map(job => ({
        url: `${baseUrl}/jobs/company/${job.employer_name.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: new Date(job.updatedAt),
      }));


      const titlesResponse = await fetch(`${baseUrl}/api/find-jobs`, {
        next: { revalidate: 60 },
        method: 'GET',
      });
      
      const titles = await titlesResponse.json();
      
      // Create a Map to track unique locations
      const seenTitles = new Set();
      
      const titleEntries = titles
        .filter(job => {
          if (!job.title || seenTitles.has(job.title)) {
            return false;
          }
          seenTitles.add(job.title);
          return true;
        })
        .map(job => ({
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
        // ...searchEntries,
        ...locationEntries,
        ...titleEntries,
        ...companyEntries,
       
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
  