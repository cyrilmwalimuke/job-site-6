// app/api/deleteExpiredJobs/route.ts
import { NextResponse } from 'next/server'
import dbConnect, { connectDB } from '@/lib/db'
import Job from '@/models/Job'


export async function GET() {
  try {
    await dbConnect()

    const now = new Date()
    const result = await Job.deleteMany({ expiry: { $lt: now } })

    return NextResponse.json({
      message: `${result.deletedCount} expired jobs deleted.`,
    })
  } catch (error) {
    console.error('Error deleting jobs:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
