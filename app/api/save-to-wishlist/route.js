import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { auth, currentUser } from "@clerk/nextjs/server";

export async function POST(req) {
  await dbConnect();
  
     
  const userClerk = await currentUser();
  const email = userClerk.emailAddresses[0].emailAddress;

  try {
    const product = await req.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // const existingProduct = user.wishItems.find(
    //   item => item.description === product.description
    // );

    // if (existingProduct) {
    //   return NextResponse.json({ message: 'Product already in wishlist' }, { status: 400 });
    // }

    // Remove original timestamps and _id to let Mongoose generate new ones
    const {
      _id,
      createdAt,
      updatedAt,
      ...cleanProduct
    } = product;

    user.wishItems.push(cleanProduct);
    await user.save();

    return NextResponse.json({ message: 'Product added to wishlist' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

