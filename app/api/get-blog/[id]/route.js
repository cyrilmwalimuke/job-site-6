import { NextResponse } from 'next/server';

import Job from '@/models/Job';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    await dbConnect();

    // // Validate MongoDB ObjectId
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return NextResponse.json({ error: 'Invalid job ID' }, { status: 400 });
    // }

    const blog = await Blog.findById(id);

    if (!blog) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
