// app/api/blog/[id]/route.js

import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import Job from "@/models/Job";
import { NextResponse } from "next/server";

export async function DELETE(req, {params} ) {
  const { id} = await params; // 👈 await the context before using params

  await dbConnect();

  const deleted = await Blog.findByIdAndDelete(id);

  return NextResponse.json({ success: true, blog: deleted });
}
