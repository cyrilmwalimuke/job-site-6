import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import Job from "@/models/Job";

// app/api/submit/route.js
export async function POST(request) {
  await dbConnect();
    console.log("hello world")
    const data = await request.json();
    const newJob  = new Blog(data);
    newJob.save()


 


    

    return Response.json({ message: 'Received', data });
  }
  