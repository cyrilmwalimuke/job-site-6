import { NextResponse } from 'next/server'

import Job from '@/models/Job'
import dbConnect from '@/lib/db'

export async function GET() {
  await dbConnect()

  try {
    const jobs = await Job.find()
    return NextResponse.json(jobs, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
