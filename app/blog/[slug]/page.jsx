// "use client"
// import Image from "next/image"
// import Link from "next/link"

// import { ArrowLeft, Clock, TrendingUp, User } from "lucide-react"
// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { TbCirclesRelation } from "react-icons/tb";
// import RelatedPost from "@/app/(components)/relatedPost";





// export default function BlogPostPage({ params }) {
//    const { slug } = useParams();
//    const [loading, setLoading] = useState(false);
//    const [readTime, setReadTime] = useState("");
//    const [related, setRelated] = useState([]);
//    console.log(related)
//    const relatedLength = () => {
//     return related?.length < 4 ? related.length : 4;
//   };

   


//   const [blogPost,setBlogPost] = useState({});
//   console.log("Blog Post Slug:", blogPost); // ✅ correct value


//   useEffect(() => {
//       const fetchJob = async () => {
//         try {
//           const res = await fetch(`/api/get-blog/${slug}`);
//           const data = await res.json();
//           setBlogPost(data);
//         } catch (error) {
//           console.error("Error fetching job:", error);
//         } finally {
//           setLoading(false);
//         }
//       };
  
//       fetchJob();
//     }, [slug]);


//     useEffect(() => {
//       const avgWordLength = 5; 
//       const charCount = blogPost?.content?.replace(/<[^>]*>/g, '').trim().length;
    
//       if (!charCount || isNaN(charCount)) return; // prevent NaN
    
//       const words = charCount / avgWordLength;
//       const wordsPerMinute = 200;
//       const minutes = Math.ceil(words / wordsPerMinute);
//       const result = minutes + " min";
    
//       setReadTime(result);
//       console.log("Read time:", result); // ✅ correct value
//     }, [slug, blogPost]);


//     const popularArticles = [
//       { title: "How to Write a Cover Letter That Gets Results", readTime: "6 min read" },
//       { title: "LinkedIn Optimization for Kenyan Professionals", readTime: "8 min read" },
//       { title: "Common Interview Mistakes to Avoid", readTime: "5 min read" },
//       { title: "Freelancing vs Full-time: Making the Right Choice", readTime: "10 min read" },
//     ]
    


//     useEffect(() => {
//       const fetchRelated = async () => {
//         try {
//           const res = await fetch('/api/get-related-posts', {
//             method: 'POST',
//             body: JSON.stringify({ category:blogPost?.category, currentSlug: slug }),
//           });
//           const data = await res.json();
//           setRelated(data.relatedPosts || []);
//         } catch (err) {
//           console.error('Error loading related posts:', err);
//         }
//       };
  
//       if (blogPost?.category && slug) fetchRelated();
//     }, [blogPost?.category, slug])

   
     





//   if (!blogPost) {
//     return (
//       <div className="container mx-auto px-4 py-12 text-center">
//         <h1 className="text-2xl font-bold mb-4">Blog blogPost not found</h1>
//         <Link href="/blog" className="text-primary hover:underline flex items-center justify-center gap-2">
//           <ArrowLeft size={16} />
//           Back to all posts
//         </Link>
//       </div>
//     )
//   }

//   return (
//     <>
   








//     <div className="p-8 flex flex-col sm:flex-row gap-10">
//       <div>
//       <Link href="/career-guide" className="text-primary hover:underline flex items-center gap-2 mb-6">
//           <ArrowLeft size={16} />
//           Back to all posts
//       </Link>

//       <div variant="outline" className="mb-4 border-gray-500 border-[1.2px] rounded-full w-fit text-sm px-5 font-semibold bg-gray-100">
//           {blogPost.category}
//         </div>

//         <h1 className="text-4xl font-bold mb-4">{blogPost?.title}</h1>

//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center gap-2">
//             <User size={16} className="text-muted-foreground" />
//             <span className="text-gray-500 ">
//               {blogPost.author}
//             </span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Clock size={16} className="text-muted-foreground" />
//             {/* <span className="text-muted-foreground">{blogPost.readTime}</span> */}
//             <span className="text-gray-500">{readTime}</span>

//           </div>
//         </div>

//         <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
//           <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost?.title} fill className="object-cover w-full" priority />
//         </div>

//         <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

//         <div className="mt-12 pt-8 border-t">
//           <h3 className="text-xl font-bold mb-4">About the Author</h3>
//           <div className="flex items-start gap-4">
//             <div className="relative w-16 h-16 rounded-full overflow-hidden">
//               <Image src="/author.jpg" alt={blogPost?.author} fill className="object-cover" />
//             </div>
//             <div>
//               <h4 className="font-bold">{blogPost.author}</h4>
//               <p className="text-muted-foreground">Chief Editor</p>
//               <p className="mt-2 text-sm">
//                 Expert in career development with over 10 years of experience helping professionals advance their
//                 careers.
//               </p>
//             </div>
//           </div>
//         </div>



 
      

//       </div>

//       {/* right */}

//       <div className="flex flex-col gap-6">
//         <div className="bg-gray-100 h-100 w-full  flex items-center justify-center rounded-lg">
//           AD HERE

//         </div>

    

//         <div>
//                         <div className="p-6 bg-white shadow-lg rounded-lg border-[1px] border-gray-200">
//                           <div className="flex items-center gap-2 mb-4">
                           
//                             <TbCirclesRelation className="h-5 w-5 text-orange-600" />
//                             <h3 className="font-bold text-lg">Related Articles</h3>
//                           </div>
//                           <div className="space-y-4">
//                             {related?.slice(0,relatedLength()).map((article, index) => (
//                             <RelatedPost key={index} article={article} />
                             
//                             ))}
//                           </div>
//                         </div>
//                       </div>





                  

       
        
//                       <div className="bg-gray-100 h-100 w-full sm:w-100 flex items-center justify-center rounded-lg">
//           AD HERE

//         </div>



        

      


//       </div>

//     </div>
//     </>
//   )
// }


// app/blog/[slug]/page.tsx (Server Component)
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { TbCirclesRelation } from "react-icons/tb";
import RelatedPost from "@/app/(components)/relatedPost";
import { headers } from 'next/headers';

function calculateReadTime(html) {
  const avgWordLength = 5;
  const cleanText = html.replace(/<[^>]*>/g, '').trim();
  const charCount = cleanText.length;

  if (!charCount || isNaN(charCount)) return '';
  const words = charCount / avgWordLength;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min`;
}


export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug); 
  return {
    title: blog?.title || "Blog Details",
    description: blog?.description || 'Find Your Dream Job Today.Discover thousands of job opportunities with all the information you need. Your next career move starts here.',
    keywords: ['Kenya jobs', 'Job board Kenya', 'find jobs', 'Ajira', 'Nairobi jobs', 'remote jobs Kenya', 'ajira Connect'],
  authors: [{ name: 'JobsKe Team', url: 'https://jobske.com' }],
  creator: 'JobsKe',
  openGraph: {
    title: 'JobsKe – Find Jobs in Kenya',
    description: blog?.description || 'Kenya\'s smart job board helping you connect with top employers. Explore job listings by industry, location, or company.',
    url: 'https://jobske.com',
    siteName: 'JobsKe',
    images: [
      {
        url: blog.image || 'https://jobske.com/site-identity.png',
        width: 1200,
        height: 630,
        alt: 'JobsKe – Job board in Kenya',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JobsKe – Jobs in Kenya',
    description: 'Smart job listings and career opportunities in Kenya.',
    site: '@jobs_ke',
    creator: '@jobs_ke',
    images: ['https://jobske.com/site-identity.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  };
}

async function getBlogBySlug(slug) {



  const headersList = headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;


  try {
    const res = await fetch(`${baseUrl}/api/get-blog/${slug}`, {
      cache: 'no-store',
    });
    return await res.json();
  } catch (error) {
    console.error("Error fetching job:", error);
  }

}




export default async function BlogPostPage({ params }) {
  const slug = params.slug;

  let blogPost = null;
  let related = [];
  blogPost = await getBlogBySlug(slug);

 


  if (!blogPost || !blogPost.title) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>
      </div>
    );
  }

  const readTime = calculateReadTime(blogPost.content || '');

  if (blogPost?.category) {
    try {
      const relatedRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-related-posts`, {
        method: 'POST',
        body: JSON.stringify({ category: blogPost.category, currentSlug: slug }),
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
      });
      const relatedData = await relatedRes.json();
      related = relatedData.relatedPosts || [];
    } catch (err) {
      console.error("Error loading related posts:", err);
    }
  }

  const relatedLength = related.length < 4 ? related.length : 4;

  return (
    <div className="p-8 flex flex-col sm:flex-row gap-10">
      <div>
        <Link href="/career-guide" className="text-primary hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <div className="mb-4 border-gray-500 border-[1.2px] rounded-full w-fit text-sm px-5 font-semibold bg-gray-100">
          {blogPost.category}
        </div>

        <h1 className="text-4xl font-bold mb-4">{blogPost?.title}</h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <User size={16} className="text-muted-foreground" />
            <span className="text-gray-500">{blogPost.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-muted-foreground" />
            <span className="text-gray-500">{readTime}</span>
          </div>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost?.title}
            fill
            className="object-cover w-full"
            priority
          />
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/author.jpg" alt={blogPost?.author} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">{blogPost.author}</h4>
              <p className="text-muted-foreground">Chief Editor</p>
              <p className="mt-2 text-sm">
                Expert in career development with over 10 years of experience helping professionals advance their careers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex flex-col gap-6">
        <div className="bg-gray-100 h-100 w-full flex items-center justify-center rounded-lg">
          AD HERE
        </div>

        <div>
          <div className="p-6 bg-white shadow-lg rounded-lg border-[1px] border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <TbCirclesRelation className="h-5 w-5 text-orange-600" />
              <h3 className="font-bold text-lg">Related Articles</h3>
            </div>
            <div className="space-y-4">
              {related?.slice(0, relatedLength).map((article, index) => (
                <RelatedPost key={index} article={article} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-100 w-full sm:w-100 flex items-center justify-center rounded-lg">
          AD HERE
        </div>
      </div>
    </div>
  );
}





