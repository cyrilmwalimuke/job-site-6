"use client"

import { useState } from "react"
import { Search, Calendar, User, Clock, ArrowRight, TrendingUp, BookOpen, Filter } from "lucide-react"
import { articles } from "@/lib/joba-sample-2"


export default function ArticlesBlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = [
    "All",
    "Career Tips",
    "Interview Prep",
    "Resume Writing",
    "Salary Guides",
    "Industry Insights",
    "Remote Work",
    "Professional Development",
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

  // const articles = [
  //   {
  //     id: 2,
  //     title: "How to Negotiate Your Salary: A Kenyan Professional's Guide",
  //     excerpt:
  //       "Learn the art of salary negotiation with proven tactics that have helped professionals increase their earnings by 30-50% in the Kenyan job market.",
  //     author: "Grace Wanjiku",
  //     authorRole: "HR Director",
  //     date: "December 12, 2024",
  //     readTime: "8 min read",
  //     category: "Salary Guides",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 3,
  //     title: "Top 10 Interview Questions for Banking Jobs in Kenya",
  //     excerpt:
  //       "Prepare for your next banking interview with these commonly asked questions and expert-approved answers from hiring managers at major Kenyan banks.",
  //     author: "James Kiprotich",
  //     authorRole: "Banking Executive",
  //     date: "December 10, 2024",
  //     readTime: "6 min read",
  //     category: "Interview Prep",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 4,
  //     title: "Remote Work Opportunities: The Future of Employment in Kenya",
  //     excerpt:
  //       "Explore the growing remote work landscape in Kenya and discover companies offering flexible work arrangements and international remote positions.",
  //     author: "Sarah Akinyi",
  //     authorRole: "Remote Work Consultant",
  //     date: "December 8, 2024",
  //     readTime: "10 min read",
  //     category: "Remote Work",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 5,
  //     title: "ATS-Friendly Resume Templates That Actually Work",
  //     excerpt:
  //       "Download our proven resume templates that pass Applicant Tracking Systems and get you noticed by hiring managers in Kenya's competitive job market.",
  //     author: "Peter Otieno",
  //     authorRole: "Career Coach",
  //     date: "December 5, 2024",
  //     readTime: "5 min read",
  //     category: "Resume Writing",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 6,
  //     title: "Kenya's Highest Paying Industries in 2024",
  //     excerpt:
  //       "Comprehensive salary analysis across different industries in Kenya, including tech, finance, healthcare, and emerging sectors with growth potential.",
  //     author: "Mary Njeri",
  //     authorRole: "Market Research Analyst",
  //     date: "December 3, 2024",
  //     readTime: "15 min read",
  //     category: "Industry Insights",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 7,
  //     title: "Building Your Professional Network in Nairobi",
  //     excerpt:
  //       "Strategic networking tips for professionals in Nairobi, including the best events, online communities, and relationship-building techniques.",
  //     author: "Michael Ochieng",
  //     authorRole: "Business Development Manager",
  //     date: "November 30, 2024",
  //     readTime: "7 min read",
  //     category: "Professional Development",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 8,
  //     title: "From Graduate to Professional: Your First Job Success Guide",
  //     excerpt:
  //       "Essential advice for recent graduates entering the Kenyan job market, from application strategies to workplace etiquette and career planning.",
  //     author: "Linda Wambui",
  //     authorRole: "Graduate Program Manager",
  //     date: "November 28, 2024",
  //     readTime: "9 min read",
  //     category: "Career Tips",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  //   {
  //     id: 9,
  //     title: "The Rise of Fintech Jobs in Kenya: Skills and Opportunities",
  //     excerpt:
  //       "Explore the booming fintech sector in Kenya, required skills, top companies hiring, and how to position yourself for success in this growing industry.",
  //     author: "Robert Kamau",
  //     authorRole: "Fintech Industry Expert",
  //     date: "November 25, 2024",
  //     readTime: "11 min read",
  //     category: "Industry Insights",
  //     image: "/placeholder.svg?height=250&width=400",
  //   },
  // ]

  const popularArticles = [
    { title: "How to Write a Cover Letter That Gets Results", readTime: "6 min read" },
    { title: "LinkedIn Optimization for Kenyan Professionals", readTime: "8 min read" },
    { title: "Common Interview Mistakes to Avoid", readTime: "5 min read" },
    { title: "Freelancing vs Full-time: Making the Right Choice", readTime: "10 min read" },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
          <div className="lg:col-span-3 ">
            {/* Featured Article */}
            <div className="mb-12 overflow-hidden shadow-lg rounded-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4 bg-blue-100 text-xs w-21 py-1 px-2 rounded-full text-blue-800">{featuredArticle.category}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 flex px-3 py-2 text-white rounded-lg items-center gap-2">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>

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
              {filteredArticles.map((article) => (
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center gap-2">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Popular Articles */}
              <div>
                <div className="p-6 bg-white shadow-lg rounded-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="h-5 w-5 text-orange-600" />
                    <h3 className="font-bold text-lg">Popular Articles</h3>
                  </div>
                  <div className="space-y-4">
                    {popularArticles.map((article, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <h4 className="font-medium text-sm mb-2 hover:text-blue-600 cursor-pointer leading-tight">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <h3 className="font-bold text-lg">Stay Updated</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Get the latest career insights and job market trends delivered to your inbox weekly.
                  </p>
                  <div className="space-y-3">
                    <input placeholder="Enter your email" className="focus:outline-none bg-white rounded-md px-3 p-1"/>
                    <button className="w-55 rounded-md py-1 bg-blue-600 hover:bg-blue-700">Subscribe</button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">No spam. Unsubscribe anytime.</p>
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.slice(1).map((category) => (
                      <div
                        key={category}
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 cursor-pointer hover:text-blue-600"
                      >
                        <span className="text-sm">{category}</span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {Math.floor(Math.random() * 20) + 5}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
