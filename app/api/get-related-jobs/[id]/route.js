// /app/api/related-jobs/[id]/route.js
import dbConnect from '@/lib/db'
import Job from '@/models/Job'
import { NextResponse } from 'next/server'


export async function GET(req, { params }) {
  const { id } =await  params

  try {
    await dbConnect()

    // Fetch the current job
    const currentJob = await Job.findById(id)
    if (!currentJob) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 })
    }

    const relatedJobs = await Job.find({
      _id: { $ne: id }, // exclude current job
      fields: { $in: currentJob.fields } // match any of the same fields
    }).limit(5)

    return NextResponse.json(relatedJobs)
  } catch (error) {
    console.error('Failed to fetch related jobs:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
