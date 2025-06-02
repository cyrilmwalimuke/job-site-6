// lib/mpesaAuth.js

export const getMpesaAccessToken = async () => {

console.log("Getting M-Pesa Access Token...");
  const consumerKey = "eRFLuwLACviRoaB0lp4YSqtxzoQy0QzM1zAEYAfYLlJrmD5e";
  const consumerSecret ="VGG6SG6SK3QhKKyvpNC0p60VTVTAden9NiN7jWKsqZyclptmhOmL1ZHYTixe8zrg";




    const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  
    const response = await fetch('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      method: 'GET',
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
  
    const data = await response.json();
    return data.access_token;
  };
  