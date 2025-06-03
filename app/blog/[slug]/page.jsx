"use client"
import Image from "next/image"
import Link from "next/link"

import { ArrowLeft, Clock, User } from "lucide-react"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// Sample blog data with all the requested fields


export default function BlogPostPage({ params }) {
   const { slug } = useParams();
   const [loading, setLoading] = useState(false);

  const [blogPost,setBlogPost] = useState({});


  useEffect(() => {
      const fetchJob = async () => {
        try {
          const res = await fetch(`/api/get-blog/${slug}`);
          const data = await res.json();
          setBlogPost(data);
        } catch (error) {
          console.error("Error fetching job:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchJob();
    }, [slug]);

  if (!blogPost) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog blogPost not found</h1>
        <Link href="/blog" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <div variant="outline" className="mb-4 border-gray-500 border-[1.2px] rounded-full w-fit text-sm px-5 font-semibold">
          {blogPost.category}
        </div>

        <h1 className="text-4xl font-bold mb-4">{blogPost.title}</h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <User size={16} className="text-muted-foreground" />
            <span className="text-gray-500">
              {blogPost.author}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-muted-foreground" />
            {/* <span className="text-muted-foreground">{blogPost.readTime}</span> */}
            <span className="text-gray-500">7 min</span>

          </div>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=64&width=64" alt={blogPost.author} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">{blogPost.author}</h4>
              <p className="text-muted-foreground">{blogPost.authorRole}</p>
              <p className="mt-2 text-sm">
                Expert in career development with over 10 years of experience helping professionals advance their
                careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
