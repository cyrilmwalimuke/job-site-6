import { NextResponse } from 'next/server';

import Job from '@/models/Job';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db';

export async function GET(request, { params }) {
  const { slug} = await params;

  try {
    await dbConnect();

    // // Validate MongoDB ObjectId
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return NextResponse.json({ error: 'Invalid job ID' }, { status: 400 });
    // }

    const job = await Job.findOne({ slug:slug });

    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json(job, { status: 200 });
  } catch (error) {
    console.error('Error fetching job:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
