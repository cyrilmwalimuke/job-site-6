// app/api/sync-user/route.js
// import { auth } from "@clerk/nextjs/server";
import { auth, currentUser } from "@clerk/nextjs/server";




import User from "@/models/User";
import dbConnect from "@/lib/db";



export async function GET() {
  await dbConnect()
 


  
  
const user = await currentUser();

const email = user.emailAddresses[0].emailAddress



const userIsInDB = (await User.find({ email: email})).length > 0

const user2 = await User.find({ email: email})


if(!userIsInDB){
  
  
  const newUser = new User({
    email: email,
  });
  try {
    await newUser.save();
  
   
  } catch (error) {
    console.log(error);
    
  }
}



  return new Response(JSON.stringify(), { status: 200 });
}
