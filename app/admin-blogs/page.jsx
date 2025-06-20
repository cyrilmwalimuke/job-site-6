"use client"

import { useEffect, useState } from "react"
import { Search, Calendar, User, Clock, ArrowRight, TrendingUp, BookOpen, Filter } from "lucide-react"
import { useRouter } from "next/navigation";
import { CiEdit } from "react-icons/ci";
import Link from "next/link";
import { IoTrashOutline } from "react-icons/io5";
// import { articles } from "@/lib/joba-sample-2"


function getPaginationPages(currentPage, totalPages) {
  const pages = [];

  if (totalPages <= 5) {
    // show all pages
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    // always show first, last, current, and surrounding pages
    pages.push(1);

    if (currentPage > 3) pages.push('...');

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    for (let i = startPage; i <= endPage; i++) pages.push(i);

    if (currentPage < totalPages - 2) pages.push('...');

    pages.push(totalPages);
  }

  return pages;
}



export default function ArticlesBlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [articles,setArticles] = useState([]) 
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const [limit, setLimit] = useState(6)
  const router = useRouter()
  console.log(totalPages)


  




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
      
        ]

  const featuredArticle = {
    id: 1,
    title: "The Complete Guide to Landing Your Dream Job in Kenya's Tech Industry",
    excerpt:
      "Discover the insider secrets, essential skills, and proven strategies that successful tech professionals use to secure high-paying positions at top companies like Safaricom, Equity Bank, and international firms.",
    author: "David Mwangi",
    authorRole: "Senior Tech Recruiter",
    date: "December 15, 2024",
    readTime: "12 min read",
    category: "Career Tips",
    image: "https://media.istockphoto.com/id/626123058/photo/african-women-plucking-tea-leaves-on-plantation-kenya-east-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=T8REeU_8f7IwCfeK9QIBnliR-RALCwjymC-ZeUdPtzs=",
    featured: true,
  }



  const popularArticles = [
    { title: "How to Write a Cover Letter That Gets Results", readTime: "6 min read" },
    { title: "LinkedIn Optimization for Kenyan Professionals", readTime: "8 min read" },
    { title: "Common Interview Mistakes to Avoid", readTime: "5 min read" },
    { title: "Freelancing vs Full-time: Making the Right Choice", readTime: "10 min read" },
  ]

  const filteredArticles = articles?.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })



  useEffect(() => {
      setLoading(true)
      const fetchJobs = async () => {
        try {
    
          const params = new URLSearchParams();
  
          params.set('page', page);
          params.set('limit', limit);
       
        
       
          // router.push(`/career-guide?${params.toString()}`)
  
          const res = await fetch(`/api/get-home-blog-pages?${params.toString()}`)
  
          if (!res.ok) {
            throw new Error('Failed to fetch listings')
          }
  
          const datafromApi = await res.json()
          console.log("datafromApi", datafromApi)
          setArticles(datafromApi.blogsInDb)
          setTotalPages(datafromApi.totalPages)
          // setTotalPages(datafromApi.totalPages)
          // setTotalDispalyPages(datafromApi.totalDIsplayPages)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      }
  
      fetchJobs()
    }, [page,limit])


    const deleteBlog = async (id) => {
      const res = await fetch(`/api/delete-blog/${id}`,{
          method:"DELETE",
          headers:{
              'Content-Type':"application/json"
          }
      })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 to-indigo-300 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Career Insights & Expert Advice</h1>
            <p className="text-xl mb-8 text-blue-100">
              Stay ahead in your career with expert insights, industry trends, and practical advice from Kenya's top
              professionals and recruiters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1 bg-white flex items-center rounded-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
              <button className="bg-white text-blue-600 hover:bg-gray-100 flex gap-1 items-center p-3 rounded-md">
                <Search className="h-4 w-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-4 ">
            {/* Featured Article */}
            

            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-5 w-5 text-gray-600" />
                <span className="font-semibold">Filter by Category:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700 border-gray-500 rounded-md px-3 py-2 border-[1.2px] text-sm font-semibold" : "bg-white border-gray-500 rounded-md px-3 py-2 border-[1.2px] text-sm font-semibold"}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles?.map((article) => (
                <div key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow rounded-lg">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 bg-white">
                    <div className="mb-3 bg-gray-100 text-gray-800 w-fit px-4 rounded-full text-xs">{article.category}</div>
                    <h3 className="text-xl font-bold mb-3 leading-tight hover:text-blue-600 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    <Link href={`/edit-blog/${article._id}`} className="text-blue-600 hover:underline flex items-center gap-1">
                    <CiEdit size={30} />
                    </Link>
                     <button onClick={()=>deleteBlog(article._id)}>
                                        <IoTrashOutline size={23} className='text-rose-300'/>
                    
                                        </button>
                      
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6 bg-white">
                    <button variant="outline" className="w-full border-gray-300 py-3 border-[1.2px] flex items-center justify-center rounded-md">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More button */}
            <div className="text-center mt-12 flex justify-center">
            
              
   {articles?.length>0 && !loading && (<div className="flex gap-2 items-center justify-center mt-6">
  <button
    onClick={() => setPage(prev => Math.max(prev - 1, 1))}
    disabled={page === 1}
    className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
  >
    Prev
  </button>

        {getPaginationPages(page, totalPages).map((p, index) =>
          p === '...' ? (
            <span key={index} className="px-2">...</span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded ${
                p === page ? 'bg-black text-white' : 'bg-gray-200 text-black'
              }`}
            >
              {p}
            </button>
          )
        )}

  <button
    onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
    disabled={page === totalPages}
    className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
)}
            </div>
          </div>

          
                   
                   
         
        </div>
      </div>
    </div>
  )
}
