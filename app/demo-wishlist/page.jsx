'use client'

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'


export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { isLoaded, isSignedIn, user } = useUser()
// const email = user.primaryEmailAddress.emailAddress

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/find-jobs')
      const data = await res.json()
      setProducts(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading...</p>

  const addToWishList = async (thisProduct) => {
    // const res = await fetch(`/api/save-to-wishlist/${email}`, {
      const res = await fetch('/api/save-to-wishlist', {
      method: 'POST',
      body: JSON.stringify(thisProduct),
      headers: {
        'Content-Type': 'application/json',
      },
    })

   
  }

  return (
    <div>
      <h1>Products</h1>
     {
        products.map((product)=>{
            return <p className='p-3 bg-teal-400 w-30 m-6 cursor-pointer' onClick={()=>addToWishList(product)}>{product.title}</p>
        })
     }
    </div>
  )
}
