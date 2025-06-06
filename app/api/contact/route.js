import { NextResponse } from 'next/server';



export async function POST(req) {
    console.log("Contact form submission received");
  const { firstName,
    lastName,
    email,
    phone,
    inquiryType,
    subject,
    message } = await req.json();
    console.log(lastName, firstName, email, phone, inquiryType, subject, message);


  return NextResponse.json('received');
}

