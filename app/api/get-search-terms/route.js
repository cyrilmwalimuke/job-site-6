// app/api/search-term-array/route.js

import dbConnect from '@/lib/db';
import searchTerm from '@/models/searchTerm';


export async function GET() {
  await dbConnect();

  try {
    const termArray = await searchTerm.find({ count: { $gt: 5} })
 

    return Response.json(termArray);
  } catch (error) {
    return Response.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
