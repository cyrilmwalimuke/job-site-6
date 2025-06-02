import { NextResponse } from 'next/server';

const shortcode = 174379; // e.g. 174379 for sandbox
const passkey = "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";
const consumerKey = "8KHeclxGLLMs182p6FVG5OUj9jHTx5fTRJmDOPAs2gBL4WDZ";
const consumerSecret ="fjGSMfezDKeMAlTEBqRVHjXS5HcNIRTYuR2MCc2nPpSDM4NgxsvW9zHLSqsu1Xjs";


const base64Credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');

export async function POST(req) {
  const { phone, amount } = await req.json();

  // 1. Get access token
  const tokenRes = await fetch(
    'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
    {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
      },
    }
  );

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  // 2. Generate password
  const timestamp = new Date()
    .toISOString()
    .replace(/[^0-9]/g, '')
    .slice(0, -3);
  const password = Buffer.from(shortcode + passkey + timestamp).toString('base64');

  // 3. Make STK push
  const stkRes = await fetch(
    'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: 'CustomerBuyGoodsOnline',
        Amount: amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: 'https://794d-102-222-145-127.ngrok-free.app/api/cashpesa/callback',
        AccountReference: 'Ajira Connect',
        TransactionDesc: 'Job premium subscription',
      }),
    }
  );

  const stkData = await stkRes.json();
  return NextResponse.json(stkData);
}

