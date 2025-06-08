// app/api/blog/[id]/route.js


import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";


export async function PUT(req, { params }) {
  await dbConnect();
  const { title,
    excerpt,
    content,
    author,
    slug,
   category,
    image,
    featured} = await req.json();
  const updated = await Blog.findByIdAndUpdate(
    params.id,
    { title,
      excerpt,
      content,
      author,
      slug,
     category,
      image,
      featured},
    { new: true }
  );
  if (!updated) {
    return NextResponse.json({ error: "Update failed" }, { status: 400 });
  }
  return NextResponse.json({ success: true, blog: updated });
}
