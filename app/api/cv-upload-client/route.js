import dbConnect from "@/lib/db";
import Job from "@/models/Job";
import nodemailer from "nodemailer";
import { currentUser } from '@clerk/nextjs/server';

// app/api/submit/route.js
export async function POST(request) {
  await dbConnect();
    
    const data = await request.json();
    console.log(data)

    const user = await currentUser()
    const email = user.emailAddresses[0].emailAddress
    console.log(email)
   
    



   const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "cyrilmwalimuke@gmail.com", // Replace with your Gmail email
            pass: 'nxud czwy seno vrwl' // Replace with your App Password
          },
        });
        
        // Email options
        const mailOptions = {
          from: "cyrilmwalimuke@gmail",
          to: email,
          subject: "Resume Revamp Request",
          
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border-radius: 8px; background-color: #f5f9ff; border: 1px solid #e0e7ff;">
            <h2 style="color: #1e40af;">✅ Your Document Has Been Successfully Uploaded</h2>
        
            <p style="font-size: 16px; color: #111827;">
              Hello,<br><br>
              Thank you for uploading your document to our job platform. We're excited to help you enhance your career journey.
            </p>
        
            <p style="font-size: 16px; color: #111827;">
              You can download or view your uploaded file anytime using the link below:
            </p>
        
            <a href="http://localhost:3000${data.url}" style="display: inline-block; margin: 16px 0; padding: 12px 20px; background-color: #3b82f6; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600;">
              🔗 View Your Document
            </a>
        
            <p style="font-size: 14px; color: #6b7280;">
              If you didn’t perform this action or have any questions, please contact our support team.
            </p>
        
            <p style="font-size: 14px; color: #6b7280;">
              Best regards,<br>
              The Jobsite Team
            </p>
          </div>
        `,
          
        };
        
        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error("Error sending email:", error);
          } else {
            console.log("Email sent:", info.response);
          }
        });
  
      
      
     



 


    

    return Response.json({ message: 'Received', data });
  }