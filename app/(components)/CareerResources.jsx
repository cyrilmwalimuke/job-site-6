import Link from "next/link";
import React, { useEffect } from "react";





export default function CareerResources() {
  const [blogPosts, setBlogPosts] = React.useState([]);
  useEffect(()=>{
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/get-blogs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming data is an array of blog posts
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    }
    fetchBlogs();
  }
    
    ,[])
  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Career Resources</h2>
          <p className="text-gray-600 mt-2">Tips and advice to help you grow your career</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0,3).map((post, index) => (
            <div key={index} className="bg-white rounded-2xl shadow hover:shadow-md transition">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-blue-600 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          ))}

          
          <div className="mt-8 w-full flex justify-center">
              <Link href='/career-guide' className='bg-black px-4 py-2 rounded-md text-white'>
                  View All Posts
              </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
