"use client";
import React from 'react'

export default function NewsletterForm() {
    const [email, setEmail] = React.useState("");
      const handleSubmit = async (e) =>{
    e.preventDefault()
    const res = await fetch('/api/career-newsletter',{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({email:email})
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
        <input placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} className="focus:outline-none bg-white rounded-md px-3 p-1"/>
        <button className="w-full text-white rounded-md py-1 bg-blue-600 hover:bg-blue-700">Subscribe</button>
    </form>
  )
   
}
