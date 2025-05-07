import { NextResponse } from 'next/server';

export async function POST(req) {
    console.log("hello world")
  try {
    const body = await req.json();

    console.log('📞 M-Pesa Callback Received:', JSON.stringify(body, null, 2));

    const callbackData = body?.Body?.stkCallback;

    if (!callbackData) {
      return NextResponse.json({ message: 'Invalid callback format' }, { status: 400 });
    }

    const resultCode = callbackData.ResultCode;
    const resultDesc = callbackData.ResultDesc;
    const merchantRequestID = callbackData.MerchantRequestID;
    const checkoutRequestID = callbackData.CheckoutRequestID;

    if (resultCode === 0) {
      const amount = callbackData.CallbackMetadata?.Item?.find(i => i.Name === 'Amount')?.Value;
      const mpesaReceiptNumber = callbackData.CallbackMetadata?.Item?.find(i => i.Name === 'MpesaReceiptNumber')?.Value;
      const phoneNumber = callbackData.CallbackMetadata?.Item?.find(i => i.Name === 'PhoneNumber')?.Value;

      // ✅ Save payment success to database
      console.log('✅ Payment Success:', {
        checkoutRequestID,
        mpesaReceiptNumber,
        amount,
        phoneNumber,
      });

      // Respond with 200
      return NextResponse.json({ message: 'Callback received and processed' });
    } else {
      console.warn('❌ Payment failed or cancelled:', resultDesc);

      // You can log or update failure in DB
      return NextResponse.json({ message: 'Callback received with failure' });
    }
  } catch (error) {
    console.error('❌ Error processing M-Pesa callback:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
return NextResponse.json({ message: 'Callback received' });
}



 



