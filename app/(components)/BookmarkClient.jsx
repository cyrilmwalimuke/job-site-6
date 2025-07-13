"use client"
import { Bookmark } from 'lucide-react';
import React from 'react'
import { useUser } from '@clerk/nextjs';


export default function BookmarkClient({jobData}) {
    const {user} = useUser()
  

    const addToWishList = async (thisProduct) => {
        if (user ===null){
          alert("please login to save a job")
          router.push('/login')
          return
        }
    
        const res1 = await fetch(`/api/get-whish-item/${thisProduct.title}`)
        const correctData = await res1.json()
    
        console.log(correctData.exist)
    
        if(correctData.exists === true) {
          alert("product already in the wishList")
          return
        }
    
        
    
    
    
    
    
    
        
          const res2 = await fetch('/api/save-to-wishlist', {
          method: 'POST',
          body: JSON.stringify(thisProduct),
          headers: {
            'Content-Type': 'application/json',
          },
        })
        alert('Job Added to your wishlist')
    
       
      }



  return (
    <button onClick={()=>addToWishList(jobData)}>
        <Bookmark className="h-6 w-6" />
    </button>
   
  )
}
