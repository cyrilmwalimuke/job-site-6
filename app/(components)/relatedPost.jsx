"use client"
import { Clock } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function RelatedPost({article}) {

    const [readTime, setReadTime] = useState("");
    console.log("Article:", article); // ✅ correct value
   

    
        useEffect(() => {
          const avgWordLength = 5; 
          const charCount = article?.content?.replace(/<[^>]*>/g, '').trim().length;
        
          if (!charCount || isNaN(charCount)) return; // prevent NaN
        
          const words = charCount / avgWordLength;
          const wordsPerMinute = 200;
          const minutes = Math.ceil(words / wordsPerMinute);
          const result = minutes + " min";
        
          setReadTime(result);
          console.log("Read time:", result); // ✅ correct value
        }, [article]);
    
    

                
    
       
        
    
    
    
  return (
    <div  className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                                    <h4 className="font-medium text-sm mb-2 hover:text-blue-600 cursor-pointer leading-tight">
                                      {article.title}
                                    </h4>
                                    <div className="flex items-center gap-1 text-xs text-gray-500">
                                      <Clock className="h-3 w-3" />
                                      <span>{readTime}</span>
                                    </div>
                                  </div>
    
  )
}
