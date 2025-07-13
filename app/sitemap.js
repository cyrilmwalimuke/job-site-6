export default async function sitemap() {
    // const baseUrl = "https://jobske.com";
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

    const blogEntries = jobs.map(blog => ({
        url: `${baseUrl}/blog/${blog.slug}`,
          lastModified: new Date(blog.updatedAt),
      }));
  



  
    return [
        {
            url: baseUrl,
            lastModified: new Date(),   
        },
        ...postEntries,
        ...blogEntries,
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
        },
       


    ]
  }
  