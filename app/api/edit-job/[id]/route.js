// app/api/blog/[id]/route.js


import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import Job from "@/models/Job";
import { NextResponse } from "next/server";


export async function PUT(req, { params }) {
  await dbConnect();
  const { title,
    employer_name,
    location,
    description,
    salary,
    type,
    experience,
    responsibilities,
    education_qualification_experience_skills_traits,
    fields,
    applicationMethod,
    applicationValue,
    companyWebsite,
    employer_logo
} = await req.json();
  const updated = await Job.findByIdAndUpdate(
    params.id,
    {title,
        employer_name,
        location,
        description,
        salary,
        type,
        experience,
        responsibilities,
        education_qualification_experience_skills_traits,
        fields,
        applicationMethod,
        applicationValue,
        companyWebsite,
        employer_logo },
    { new: true }
  );
  if (!updated) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
  return NextResponse.json({ success: true, blog: updated });
}
