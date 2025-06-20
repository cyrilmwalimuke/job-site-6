import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'



export async function POST(req) {
  

  const { firstName,
    lastName,
    email,
    phone,
    inquiryType,
    subject,
    message } = await req.json();
    console.log(lastName, firstName, email, phone, inquiryType, subject, message);

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
              to: "cyrilmwalimuke@gmail.com",
              subject: "Message from User",
              
              html: `
              <!DOCTYPE html>
<html lang="en" style="font-family: Arial, sans-serif;">
  <head>
    <meta charset="UTF-8" />
    <title>New Inquiry</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #f4f4f4;
      }
      .container {
        max-width: 600px;
        margin: 30px auto;
        background: #ffffff;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }
      .header {
        border-bottom: 2px solid #4caf50;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
      .header h2 {
        margin: 0;
        color: #4caf50;
      }
      .label {
        font-weight: bold;
        color: #333;
      }
      .value {
        margin: 0 0 15px 0;
        color: #555;
      }
      .footer {
        margin-top: 30px;
        font-size: 13px;
        color: #aaa;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>📩 New Message Received</h2>
      </div>

      <p class="label">📌 Subject:</p>
      <p class="value">${ subject }</p>

      <p class="label">📂 Inquiry Type:</p>
      <p class="value">${inquiryType}</p>

      <p class="label">👤 Name:</p>
      <p class="value">${ firstName } ${ lastName }</p>

      <p class="label">✉️ Message:</p>
      <p class="value" style="white-space: pre-line;">${ message }</p>

      <div class="footer">
        You received this message via your website contact form.
      </div>
    </div>
  </body>
</html>

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
      
          
          
         
    
    
    
     
    
    
        
    
        return NextResponse.json({ message: 'Received', data });





  
}

