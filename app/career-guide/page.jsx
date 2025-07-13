// "use client"

// import { useEffect, useState } from "react"
// import { Search, Calendar, User, Clock, ArrowRight, TrendingUp, BookOpen, Filter } from "lucide-react"
// import { useRouter } from "next/navigation";
// import FeaturedArticle from "../(components)/FeaturedArticle";
// import RelatedPost from "../(components)/relatedPost";
// import Link from "next/link";




// function getPaginationPages(currentPage, totalPages) {
//   const pages = [];

//   if (totalPages <= 5) {
//     // show all pages
//     for (let i = 1; i <= totalPages; i++) pages.push(i);
//   } else {
//     // always show first, last, current, and surrounding pages
//     pages.push(1);

//     if (currentPage > 3) pages.push('...');

//     const startPage = Math.max(2, currentPage - 1);
//     const endPage = Math.min(totalPages - 1, currentPage + 1);

//     for (let i = startPage; i <= endPage; i++) pages.push(i);

//     if (currentPage < totalPages - 2) pages.push('...');

//     pages.push(totalPages);
//   }

//   return pages;
// }



// export default function ArticlesBlogPage() {
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("All")
//   const [articles,setArticles] = useState([]) 
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1)
//   const [limit, setLimit] = useState(6)
//   const router = useRouter()
//   const [popularArticles,setPopularArticles] = useState([])
//   const [email,setEmail] = useState('')
 
//   console.log(totalPages)





  




//         const categories = [
//           "All",
//           "Career Advice",
//           "Interview Prep",
//           "Resume Writing",
//           "Salary Guides",
//           "Industry Insights",
//           "Remote Work",
//           "Professional Development",
//           "Job Search",
//           "Networking"
      
//         ]




  

//   const filteredArticles = articles?.filter((article) => {
//     const matchesSearch =
//       article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
//     const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
//     return matchesSearch && matchesCategory
//   })


//   const handleSubmit = async (e) =>{
//     e.preventDefault()
//     const res = await fetch('/api/career-newsletter',{
//         method:'POST',
//         headers: {'Content-Type':'application/json'},
//         body:JSON.stringify({email:email})
//     })
//   }


//   useEffect(() => {
//       setLoading(true)
//       const fetchJobs = async () => {
//         try {
    
//           const params = new URLSearchParams();
  
//           params.set('page', page);
//           params.set('limit', limit);
       
        
       
//           // router.push(`/career-guide?${params.toString()}`)
  
//           const res = await fetch(`/api/get-home-blog-pages?${params.toString()}`)
  
//           if (!res.ok) {
//             throw new Error('Failed to fetch listings')
//           }
  
//           const datafromApi = await res.json()
//           console.log("datafromApi", datafromApi)
//           setArticles(datafromApi.blogsInDb)
//           setTotalPages(datafromApi.totalPages)
//           // setTotalPages(datafromApi.totalPages)
//           // setTotalDispalyPages(datafromApi.totalDIsplayPages)
//         } catch (error) {
//           console.error(error)
//         } finally {
//           setLoading(false)
//         }
//       }
  
//       fetchJobs()
//     }, [page,limit])


//      useEffect(()=>{
//             const fetchFeatured  = async () =>{
//                 const res = await fetch('/api/get-blogs')
//                 const data  = await res.json()
//                 setPopularArticles(data)
//             }
//             fetchFeatured()
        
//           },[])

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-400 to-indigo-300 text-white py-16">
//         <div className="container px-4 md:px-6">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Insights & Expert Advice</h1>
//             <p className="text-xl mb-8 text-blue-100">
//               Stay ahead in your career with expert insights, industry trends, and practical advice from Kenya's top
//               professionals and recruiters.
//             </p>
//             <div className="flex gap-4 max-w-md mx-auto">
//               <div className="relative flex-1 bg-white flex items-center rounded-md ">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
//                 <input
//                   placeholder="Search articles..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 bg-white text-gray-900 h-12 rounded-md"
//                 />
//               </div>
//               <button className="bg-white text-blue-600 hover:bg-gray-100 flex gap-1 items-center p-3 rounded-md">
//                 <Search className="h-4 w-4 mr-2" />
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="container px-4 md:px-6 py-12">
//         <div className="grid lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3 ">
         

//             <FeaturedArticle/>

//             {/* Category Filter */}
//             <div className="mb-8">
//               <div className="flex items-center gap-2 mb-4">
//                 <Filter className="h-5 w-5 text-gray-600" />
//                 <span className="font-semibold">Filter by Category:</span>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     variant={selectedCategory === category ? "default" : "outline"}
//                     size="sm"
//                     onClick={() => setSelectedCategory(category)}
//                     className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700 border-gray-500 rounded-md px-3 py-2 border-[1.2px] text-sm font-semibold" : "bg-white border-gray-500 rounded-md px-3 py-2 border-[1.2px] text-sm font-semibold"}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Articles Grid */}
//             <div className="grid md:grid-cols-2 gap-8">
//               {filteredArticles?.map((article) => (
//                 <div key={article._id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg">
//                   <div className="aspect-video overflow-hidden">
//                     <img
//                       src={article.image || "/placeholder.svg"}
//                       alt={article.title}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>
//                   <div className="p-6 bg-white">
//                     <div className="mb-3 bg-gray-100 text-gray-800 w-fit px-4 rounded-full text-xs">{article.category}</div>
//                     <h3 className="text-xl font-bold mb-3 leading-tight hover:text-blue-600 cursor-pointer">
//                       {article.title}
//                     </h3>
//                     <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
//                     <div className="flex items-center gap-4 text-sm text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <User className="h-3 w-3" />
//                         <span>{article.author}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Clock className="h-3 w-3" />
//                         <span>{article.readTime}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="px-6 pb-6 bg-white">
//                     <Link href={`/blog/${article.slug}`} variant="outline" className="w-full border-gray-300 py-3 border-[1.2px] flex items-center justify-center rounded-md">
//                       Read More
//                       <ArrowRight className="h-4 w-4 ml-2" />
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Load More button */}
//             <div className="text-center mt-12 flex justify-center">
            
              
//    {articles?.length>0 && !loading && (<div className="flex gap-2 items-center justify-center mt-6">
//   <button
//     onClick={() => setPage(prev => Math.max(prev - 1, 1))}
//     disabled={page === 1}
//     className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
//   >
//     Prev
//   </button>

//         {getPaginationPages(page, totalPages).map((p, index) =>
//           p === '...' ? (
//             <span key={index} className="px-2">...</span>
//           ) : (
//             <button
//               key={p}
//               onClick={() => setPage(p)}
//               className={`px-3 py-1 rounded ${
//                 p === page ? 'bg-black text-white' : 'bg-gray-200 text-black'
//               }`}
//             >
//               {p}
//             </button>
//           )
//         )}

//   <button
//     onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
//     disabled={page === totalPages}
//     className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
//   >
//     Next
//   </button>
// </div>
// )}
//             </div>
//           </div>

//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-8 space-y-8">
//               {/* Popular Articles */}
//               <div>
//                 <div className="p-6 bg-white shadow-lg rounded-lg">
//                   <div className="flex items-center gap-2 mb-4">
//                     <TrendingUp className="h-5 w-5 text-orange-600" />
//                     <h3 className="font-bold text-lg">Popular Articles</h3>
//                   </div>
//                   <div className="space-y-4">
//                     {popularArticles.map((article, index) => (
                  
//                     <RelatedPost key={index} article={article}/>


//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Newsletter Signup */}
//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-4">
//                     <BookOpen className="h-5 w-5 text-blue-600" />
//                     <h3 className="font-bold text-lg">Stay Updated</h3>
//                   </div>
//                   <p className="text-sm text-gray-600 mb-4">
//                     Get the latest career insights and job market trends delivered to your inbox weekly.
//                   </p>
//                   <form onSubmit={handleSubmit} className="space-y-3">
//                     <input placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="focus:outline-none bg-white rounded-md px-3 p-1"/>
//                     <button className="w-full text-white rounded-md py-1 bg-blue-600 hover:bg-blue-700">Subscribe</button>
//                   </form>
//                   <p className="text-xs text-gray-500 mt-2">No spam. Unsubscribe anytime.</p>
//                 </div>
//               </div>

//               {/* Categories */}
//               <div>
//                 <div className="p-6">
//                   <h3 className="font-bold text-lg mb-4">Categories</h3>
//                   <div className="space-y-2">
//                     {categories.slice(1).map((category) => (
//                       <div
//                         key={category}
//                         className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 cursor-pointer hover:text-blue-600"
//                       >
//                         <span className="text-sm">{category}</span>
//                         <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
//                           {Math.floor(Math.random() * 20) + 5}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


// app/career-guide/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Search, Clock, User, TrendingUp, BookOpen, Filter, ArrowRight } from "lucide-react";
import RelatedPost from "../(components)/relatedPost";
import FeaturedArticle from "../(components)/FeaturedArticle";
import { getPaginationPages } from "@/lib/pagination"; // optional helper
import qs from "query-string";
import NewsletterForm from "../(components)/ResourcesNewsletter";

const categories = [
  "All",
  "Career Advice",
  "Interview Prep",
  "Resume Writing",
  "Salary Guides",
  "Industry Insights",
  "Remote Work",
  "Professional Development",
  "Job Search",
  "Networking"
];

export default async function ArticlesBlogPage({ searchParams }) {
  const params = await searchParams
  const page = Number(params?.page) || 1
  const limit = 6;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const articlesRes = await fetch(`${baseUrl}/api/get-home-blog-pages?page=${page}&limit=${limit}`, {
    cache: "no-store"
  });
  const { blogsInDb: articles, totalPages } = await articlesRes.json();

  const featuredRes = await fetch(`${baseUrl}/api/get-blogs`, {
    cache: "no-store"
  });
  const popularArticles = await featuredRes.json();
 

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 to-indigo-300 text-white py-16">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Insights & Expert Advice</h1>
          <p className="text-xl mb-8 text-blue-100">
            Stay ahead in your career with expert insights, industry trends, and practical advice from Kenya's top professionals and recruiters.
          </p>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left/Main */}
          <div className="lg:col-span-3">
            <FeaturedArticle />

            {/* Category Buttons (non-functional in server component) */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-semibold">Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <div key={category} className="bg-white border border-gray-500 rounded-md px-3 py-2 text-sm font-semibold">
                    {category}
                  </div>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {articles?.map((article) => (
                <div key={article._id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg">
                  <div className="aspect-video overflow-hidden">
                    <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="mb-3 bg-gray-100 text-gray-800 w-fit px-4 rounded-full text-xs">{article.category}</div>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1"><User className="h-3 w-3" />{article.author}</div>
                      <div className="flex items-center gap-1"><Clock className="h-3 w-3" />{article.readTime}</div>
                    </div>
                  </div>
                  <div className="px-6 pb-6 bg-white">
                    <Link href={`/blog/${article.slug}`} className="w-full border border-gray-300 py-3 flex items-center justify-center rounded-md">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex gap-2 items-center justify-center mt-10">
              {page > 1 && (
                <Link href={`/career-guide?page=${page - 1}`} className="px-3 py-1 bg-black text-white rounded">Prev</Link>
              )}
              {getPaginationPages(page, totalPages).map((p, i) =>
                p === "..." ? (
                  <span key={i} className="px-2">...</span>
                ) : (
                  <Link
                    key={p}
                    href={`/career-guide?page=${p}`}
                    className={`px-3 py-1 rounded ${p === page ? "bg-black text-white" : "bg-gray-200 text-black"}`}
                  >
                    {p}
                  </Link>
                )
              )}
              {page < totalPages && (
                <Link href={`/career-guide?page=${page + 1}`} className="px-3 py-1 bg-black text-white rounded">Next</Link>
              )}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-8 sticky top-8">
            {/* Popular Articles */}
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-5 w-5 text-orange-600" />
                <h3 className="font-bold text-lg">Popular Articles</h3>
              </div>
              <div className="space-y-4">
                {popularArticles?.map((article, index) => (
                  <RelatedPost key={index} article={article} />
                ))}
              </div>
            </div>

            {/* Newsletter Signup (non-functional in Server Component) */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-md">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="font-bold text-lg">Stay Updated</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest career insights and job market trends delivered to your inbox weekly.
              </p>
             <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
