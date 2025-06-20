// import { NextResponse } from 'next/server';

// import Job from '@/models/Job';
// import mongoose from 'mongoose';
// import dbConnect from '@/lib/db';
// import Blog from '@/models/Blog';
// import { auth, currentUser } from "@clerk/nextjs/server";
// import User from '@/models/User';

// export async function GET(request, { params }) {
//   const { title } = await params;

//   try {
//     await dbConnect();
//     const user = await currentUser();
//     const email = user.emailAddresses[0].emailAddress
//     const wishItemUser = await User.find({email:email})
//     const wishItems = wishItemUser[0].wishItems

   


    

 
  

   

//     return NextResponse.json(wishItemUser, { status: 200 });
//   } catch (error) {
//     console.error('Error fetching job:', error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import Job from '@/models/Job';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db';
import Blog from '@/models/Blog';
import { auth, currentUser } from "@clerk/nextjs/server";
import User from '@/models/User';

export async function GET(request, context) {
  const { params } = await context
  const { product } =await params


  try {
    await dbConnect();
    const user = await currentUser();
    const email = user.emailAddresses[0].emailAddress;

    const wishItemUser = await User.findOne({ email: email });

    if (!wishItemUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const itemExists = wishItemUser.wishItems?.some(
      (item) => item.title === product
    );

    console.log(itemExists)

    return NextResponse.json({ exists: itemExists }, { status: 200 });
  } catch (error) {
    console.error('Error checking wish item:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
