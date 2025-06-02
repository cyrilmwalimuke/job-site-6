// app/api/search-term/route.js

import dbConnect from "@/lib/db";
import searchTerm from "@/models/searchTerm";



export async function POST(req) {
  const body = await req.json();
  const { term, link } = body;

if (!term || typeof term !== 'string') {
  return Response.json({ message: 'Invalid search term' }, { status: 400 });
}

// Validate link (optional but good practice)
if (link && typeof link !== 'string') {
  return Response.json({ message: 'Invalid link format' }, { status: 400 });
}

await dbConnect();

try {
  await searchTerm.findOneAndUpdate(
    { term },
    {
      $inc: { count: 1 },
      $set: { link }, // 👈 Set or update the link
    },
    { upsert: true, new: true }
  );

  return Response.json({ message: 'Search term recorded' });
} catch (error) {
  return Response.json({ message: 'Server error', error: error.message }, { status: 500 });
}

 
}
