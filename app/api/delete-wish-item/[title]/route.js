import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import { currentUser } from '@clerk/nextjs/server';

export async function DELETE(req, context ){
  const { params } = await context
  const { title} =await params

  await dbConnect();

  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: user.email },
      { $pull: { wishItems: { title: title } } },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Wish item deleted', wishItems: updatedUser.wishItems });
  } catch (error) {
    console.error('Error deleting wish item:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
