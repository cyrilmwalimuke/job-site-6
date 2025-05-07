import { NextResponse } from 'next/server';

export async function POST(request) {
    console.log('Received PayHero callback:', request.url);
  try {
    const body = await request.json();

    const { transaction_status, transaction_reference, amount } = body;

    if (transaction_status === 'successful') {
      // ✅ Update user subscription or order in your database
      console.log('Payment success:', transaction_reference);

      // Optionally respond to PayHero
      return NextResponse.json({ status: 'received' });
    } else {
      // ❌ Handle failure, pending, etc.
      console.log('Payment not successful:', transaction_status);
      return NextResponse.json({ status: 'not successful' });
    }

  } catch (error) {
    console.error('Error handling PayHero callback:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

