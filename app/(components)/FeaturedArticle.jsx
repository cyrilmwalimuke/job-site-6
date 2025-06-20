import { ArrowRight, Calendar, Clock, User } from 'lucide-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function FeaturedArticle() {
    const [featuredArticle,setFeaturedArticle] = useState({})
    const [readTime, setReadTime] = useState("");
    console.log(featuredArticle)

    useEffect(()=>{
        const fetchFeatured  = async () =>{
            const res = await fetch('/api/get-blog/2025-interview-tips-that-actually-work')
            const data  = await res.json()
            setFeaturedArticle(data)
        }
        fetchFeatured()
    
      },[])



       useEffect(() => {
                const avgWordLength = 5; 
                const charCount = featuredArticle?.content?.replace(/<[^>]*>/g, '').trim().length;
              
                if (!charCount || isNaN(charCount)) return; // prevent NaN
              
                const words = charCount / avgWordLength;
                const wordsPerMinute = 200;
                const minutes = Math.ceil(words / wordsPerMinute);
                const result = minutes + " min";
              
                setReadTime(result);
                console.log("Read time:", result); // ✅ correct value
              }, [featuredArticle]);
  return (
    <div>

<div className="mb-12 overflow-hidden shadow-lg rounded-md">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredArticle?.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="mb-4 bg-blue-100 text-xs w-fit py-1 px-2 rounded-full text-blue-800">{featuredArticle?.category}</div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredArticle.title}</h2>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredArticle?.createdAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                            })}
                                            </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${featuredArticle.slug}`} className="bg-blue-600 hover:bg-blue-700 flex px-3 py-2 text-white rounded-lg items-center gap-2 justify-center">
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div> 
      
    </div>
  )
}
