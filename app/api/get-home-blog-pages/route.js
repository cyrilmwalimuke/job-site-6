import { NextResponse } from 'next/server';


import Job from '@/models/Job';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(request) {
  try {
    await dbConnect(); // Ensure the database connection is established
    

   


    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;

    const limit = parseInt(searchParams.get('limit')) || 6;
    const skip = (page - 1) * limit


    
    const blogsInDb = await Blog.find({}).limit(limit).skip(skip);
    const allJobs= await Blog.find({}).countDocuments();


    
    return NextResponse.json({blogsInDb,totalPages: Math.ceil(allJobs / limit)}, { status: 200 });
      

  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
