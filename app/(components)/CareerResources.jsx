import Link from "next/link";
import React, { useEffect } from "react";

// const blogPosts = [
//   {
//     title: "Top 10 CV Mistakes to Avoid in 2025",
//     excerpt: "Your CV might be costing you interviews. Here's what to fix immediately.",
//     image: "https://media.istockphoto.com/id/2169837352/photo/job-applicant-having-interview.jpg?s=1024x1024&w=is&k=20&c=u1RudP8I73c5_acHPOGxAkaI_hQq_dy6-d37Y_ioHZU=",
//     link: "/blog/top-cv-mistakes",
//   },
//   {
//     title: "How to Ace Your Next Interview",
//     excerpt: "Master common questions, body language, and storytelling techniques.",
//     image: "https://media.istockphoto.com/id/1362265077/photo/business-people-signing-a-contract.jpg?s=1024x1024&w=is&k=20&c=phbUuyNTmXRXY3aH5pyzTAewofSrzEGUrqAOCLuxvDA=",
//     link: "/blog/ace-your-interview",
//   },
//   {
//     title: "Remote Jobs: Where to Look and How to Stand Out",
//     excerpt: "The demand for remote talent is growing. Here's how to get noticed.",
//     image: "https://images.unsplash.com/photo-1672854207187-e70df893755b?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     link: "/blog/remote-job-tips",
//   },
// ];



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
          {blogPosts.map((post, index) => (
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
        </div>
      </div>
    </section>
  );
}
