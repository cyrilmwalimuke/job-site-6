import { GiCoinsPile } from "react-icons/gi";

export default async function sitemap() {

    const baseUrl = "https://jobske.com";

    

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



      
  



  
    return [
        {
            url: baseUrl,
            lastModified: new Date(),   
        },
        ...postEntries,
        ...blogEntries,
        ...searchEntries,
      
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
  