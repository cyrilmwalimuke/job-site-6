import dbConnect from "@/lib/db";
import Job from "@/models/Job";
import nodemailer from "nodemailer";

const emailHtml = `
  <!DOCTYPE html>
  <html>
    <head><meta charset="UTF-8" /></head>
    <body style="background-color: #f9fdfb; font-family: Arial, sans-serif; color: #333; padding: 20px;">
      <div style="max-width: 600px; background-color: #ffffff; padding: 40px; margin: 0 auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">
        <h1 style="color: #10b981; font-size: 24px;">Welcome to Our Community!</h1>
        <p style="font-size: 16px; line-height: 1.6;">Thank you for subscribing to our career newsletter. 🎉</p>

        <p style="font-size: 16px; line-height: 1.6;">Here's what you can expect:</p>
        <ul style="padding-left: 20px; font-size: 16px; line-height: 1.6;">
         
          <li><strong>Career Growth Tips:</strong> Strategies to grow professionally and boost your salary</li>
          <li><strong>Industry Insights:</strong> Market trends and forecasts and more</li>
          
        </ul>

        <div style="background-color: #ecfdf5; padding: 12px; border-left: 4px solid #10b981; margin-top: 20px; margin-bottom: 20px; font-weight: bold;">
          Your first newsletter will arrive within 24 hours.
        </div>

        <p style="font-size: 16px; line-height: 1.6;">Please check your inbox for a latest job opportunities,career growth tips and industry insights.</p>
        <p style="font-size: 16px; line-height: 1.6;">We're excited to have you on board!</p>

        <div style="text-align: center; font-size: 12px; color: #888; margin-top: 30px;">
          You received this email because you subscribed to our newsletter.<br />
          Unsubscribe at any time.
        </div>
      </div>
    </body>
  </html>
`;


export async function POST(request) {
  await dbConnect();
const data = await request.json();
console.log(data)
const {email} = data;



const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "cyrilmwalimuke@gmail.com", // Replace with your Gmail email
            pass: 'wjus xbil dugb lfhd' // Replace with your App Password
          },
        });
        
        // Email options
        const mailOptions = {
          from: "cyrilmwalimuke@gmail",
          to: email,
          subject: "You're Subscribed! Start Unlocking Career Opportunities Now",
          
          html:emailHtml,
          
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