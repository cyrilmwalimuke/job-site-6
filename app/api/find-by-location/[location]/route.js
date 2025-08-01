import { NextResponse } from 'next/server';

import Job from '@/models/Job';

import dbConnect from '@/lib/db';

export async function GET(request, { params }) {
  const { location} = await params;

 

    await dbConnect();

    try {
      const jobs = await Job.find({ location: new RegExp(location, 'i') }); // case-insensitive match
      return NextResponse.json(jobs, { status: 200 });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
