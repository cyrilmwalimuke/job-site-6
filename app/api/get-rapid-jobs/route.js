import dbConnect from '@/lib/db'
import Job from '@/models/Job'


export async function GET() {
  const url = 'https://jsearch.p.rapidapi.com/search?query=jobs%20in%20Kenya&num_pages=1'

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3626fcf218msh2a8ec489380a629p1c5eddjsn445aee62d9be',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  }

  try {
    await dbConnect()

    const res = await fetch(url, options)
    const {data}= await res.json()
 


    const insertedJobs = []

    for (const job of data) {
      const jobData = {
        title: job.job_title || 'Untitled',
        employer_name: job.employer_name || 'Unknown',
        location: job.job_location || `${job.job_city}, ${job.job_country}`,
        description: job.job_description || '',
        salary: job.job_min_salary || null,
        expiry: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // set expiry 7 days from now
        type: job.job_employment_type || 'Full-time',
        experience: '', // Not provided, leave blank or add fallback
        responsibilities: '', // Not provided
        education_qualification_experience_skills_traits: '', // Not provided
        fields: [], // You can extract from tags if available
        applicationMethod: 'url',
        applicationValue: job.job_apply_link,
        companyWebsite: job.employer_website || '',
        employer_logo: job.employer_logo || '',
      }

      // Optional: Prevent duplicates by job_id
      const exists = await Job.findOne({ applicationValue: job.job_apply_link })
      if (!exists) {
        const newJob = await Job.create(jobData)
        insertedJobs.push(newJob)
      }
    }

    return Response.json({
      message: `Saved ${insertedJobs.length} new job(s)`,
      jobs: insertedJobs,
    })
  } catch (error) {
    console.error('Failed to save jobs:', error)
    return new Response(JSON.stringify({ error: 'Job save failed' }), { status: 500 })
  }
}
