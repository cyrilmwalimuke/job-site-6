import { NextResponse } from 'next/server';


import Job from '@/models/Job';
import dbConnect from '@/lib/db';

export async function GET(request) {
  try {
    await dbConnect(); // Ensure the database connection is established
    

   


    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;

    const limit = parseInt(searchParams.get('limit')) || 9;
    const skip = (page - 1) * limit
    // const startIndex = parseInt(searchParams.get('startIndex')) || 0;

    const salaryRange = searchParams.get('salaryRange'); // format: "1000-5000"
    const salaryQuery = {};

    if (salaryRange) {
      const [min, max] = salaryRange.split('-').map(Number);
      if (!isNaN(min)) salaryQuery.$gte = min;
      if (!isNaN(max)) salaryQuery.$lte = max;
    }

     


    const experienceLevelParam = searchParams.get('experienceLevel') || '';
    const experienceLevels = experienceLevelParam
      ? experienceLevelParam.split(',') // Convert back to array
      : [];
    





    const searchTerm = searchParams.get('searchTerm') || '';
    const sort = searchParams.get('sort') || 'createdAt';
    const order = searchParams.get('order') || 'desc';
    const industry = searchParams.get('industry') || '';
    const type = searchParams.get('type') || '';
    const location = searchParams.get('location') || '';
  

    const jobsInDb = await Job.find({
      title: { $regex: searchTerm, $options: 'i' },
        ...(industry ? { industry: { $regex: industry, $options: 'i' } } : {}),
        ...(type ? { type: { $regex: type, $options: 'i' } } : {}),
        ...(experienceLevels.length > 0 ? { experience: { $in: experienceLevels } } : {}),
        ...(location ? { location: { $regex: location, $options: 'i' } } : {}),

     

      
      ...(salaryRange ? { salary: salaryQuery } : {})
    })
      .sort({ [sort]: order })
      .limit(limit)
    //   .skip(startIndex);
    .skip(skip);

    const allPagesLength = await Job.find({
        title: { $regex: searchTerm, $options: 'i' },
          ...(industry ? { industry: { $regex: industry, $options: 'i' } } : {}),
          ...(type ? { type: { $regex: type, $options: 'i' } } : {}),
          ...(experienceLevels.length > 0 ? { experience: { $in: experienceLevels } } : {}),
          ...(location ? { location: { $regex: location, $options: 'i' } } : {}),
  
       
  
        
        ...(salaryRange ? { salary: salaryQuery } : {})
      })
        .sort({ [sort]: order })

        console.log(allPagesLength.length)


    





    return NextResponse.json({
        jobsInDb,
        totalPages: Math.ceil(allPagesLength.length / limit),
        totalDIsplayPages: allPagesLength.length,
        currentPage: page,
      }, { status: 200 });
      

  } catch (error) {
    console.error('Error fetching listings:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
