// app/api/related-posts/route.js
import dbConnect, { connectToDB } from '@/lib/db';
import Blog from '@/models/Blog';


export async function POST(req) {
  const { category, currentSlug } = await req.json();

  try {
    await dbConnect();

    const relatedPosts = await Blog.find({
      category,
      slug: { $ne: currentSlug },
    })
      .limit(4)
      .sort({ createdAt: -1 });

    return Response.json({ relatedPosts });
  } catch (error) {
    return new Response('Failed to fetch related posts', { status: 500 });
  }
}
