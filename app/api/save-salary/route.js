import dbConnect from "@/lib/db";
import Job from "@/models/Job";

// app/api/submit/route.js
export async function POST(request) {
  await dbConnect();
    console.log("hello world")
    const data = await request.json();

    console.log(data)
 
  


 


    

    return Response.json({ success: true, data });
  }
  