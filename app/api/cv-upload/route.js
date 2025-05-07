import dbConnect from "@/lib/db";
import Job from "@/models/Job";
import nodemailer from "nodemailer";
import axios from "axios";
let token
const generateBasicAuthToken = () => {
    return "Basic " + Buffer.from("WbcRQ0MRLyphfQLEndRh:OYJZnxU8Zz4b0f08gSGTGkO4JoT2DWsMViEHnNnd").toString("base64");
  };
// app/api/submit/route.js
export async function POST(request) {
  await dbConnect();
const data = await request.json();
console.log(data)

const { amount, phone_number, channel_id, external_reference } = data;






    
  
const PAYHERO_API_URL = "https://backend.payhero.co.ke/api/v2/payments";

    try {
     const response = await axios.post(
      PAYHERO_API_URL,
      {
        amount: parseFloat(amount),
        phone_number,
        channel_id,
        provider: "m-pesa",
        external_reference,
        callback_url:"https://7b78-102-222-145-127.ngrok-free.app/api/pay-hero-callback",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: generateBasicAuthToken(),
        },
      }
    );
    console.log(response.data)
  
    return Response.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Payment Error:", error.response ? error.response.data : error.message);
    Response.json({
      success: false,
      message: error.response ? error.response.data : "Payment request failed",
    });
  }
  return Response.json({ message: 'Received', data });
  

  
  
  

    
//     const data = await request.json();
//     console.log(data)

//     const email ="okwomicyril@gmail.com"



//    const transporter = nodemailer.createTransport({
//           service: "gmail",
//           auth: {
//             user: "cyrilmwalimuke@gmail.com", // Replace with your Gmail email
//             pass: 'nxud czwy seno vrwl' // Replace with your App Password
//           },
//         });
        
//         // Email options
//         const mailOptions = {
//           from: "cyrilmwalimuke@gmail",
//           to: email,
//           subject: "Resume Revamp Request",
          
//           html: `
//   <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 8px; background-color: #f9f9f9;">
//     <h2 style="color: #2c3e50;">📄 New Document Uploaded</h2>
//     <p style="font-size: 16px; color: #333;">
//       Hello Admin,<br><br>
//       A user has just uploaded a new document to your job platform. Please review the file using the link below:
//     </p>

//     <a href="http://localhost:3000${data.url}" style="display: inline-block; margin: 20px 0; padding: 10px 16px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px;">
//       🔍 View Uploaded File
//     </a>

//     <p style="font-size: 14px; color: #666;">
//       If you were not expecting this email, you can ignore it.<br><br>
//       — AjiraConnect Team
//     </p>
//   </div>
// `,
          
//         };
        
//         // Send the email
//         transporter.sendMail(mailOptions, (error, info) => {
//           if (error) {
//             console.error("Error sending email:", error);
//           } else {
//             console.log("Email sent:", info.response);
//           }
//         });
  
      
      
     



 


    

    // return Response.json({ message: 'Received', data });
  }