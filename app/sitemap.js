export default async function sitemap() {
    // const baseUrl = "https://jobske.com";
    const baseUrl = "http://localhost:3000";
    

   const response =await fetch(`${baseUrl}/api/find-jobs`, {
    next: { revalidate: 60 },
    method: 'GET',
  });

    const jobs = await response.json();

    const postEntries = jobs.map(job => ({
      url: `${baseUrl}/job/${job.slug}`,
        lastModified: new Date(job.updatedAt),
    }));



  
    return [
        {
            url: baseUrl,
            lastModified: new Date(),   
        },
        ...postEntries,

    ]
  }
  