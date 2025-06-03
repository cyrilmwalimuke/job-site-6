import { NextResponse } from 'next/server'

import Job from '@/models/Job'
import dbConnect from '@/lib/db'
import Blog from '@/models/Blog'

export async function GET() {
  await dbConnect()

  try {
    const blogs = await Blog.find()
    return NextResponse.json(blogs, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
