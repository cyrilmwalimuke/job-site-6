import { NextResponse } from 'next/server'

import dbConnect from '@/lib/db'
import User from '@/models/User'
import { auth, currentUser } from "@clerk/nextjs/server"

export async function POST(req, { params }) {
 dbConnect()
     
   const userClerk = await currentUser();
   
   const email = userClerk.emailAddresses[0].emailAddress

  try {

    const product = await req.json()

    const user = await User.findOne({email:email})


    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }
    const existingProduct = user.wishItems.find(item => item.description === product.description)
    console.log(existingProduct)
    if (existingProduct) {
      return NextResponse.json({ message: 'Product already in wishlist' }, { status: 400 })
    }
    
    
    // Add product if it doesn't exist
    user.wishItems.push(product);
    await user.save();
    
    return NextResponse.json({ message: 'Product added to wishlist' })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
