import { NextResponse } from 'next/server'

import Job from '@/models/Job'
import dbConnect from '@/lib/db'
import User from '@/models/User'
import { auth, currentUser } from "@clerk/nextjs/server";

export async function GET() {
  await dbConnect()
    
  const user = await currentUser();
  
  const email = user.emailAddresses[0].emailAddress

  try {

    const user = await User.findOne({email})
 

    return NextResponse.json(user.wishItems, { status: 200 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
