// app/404.tsx (or app/not-found.tsx)
'use client';

import { useSearchParams } from 'next/navigation';

export default function NotFoundPage() {
  const searchParams = useSearchParams();

  // your logic here

  return <div>Page not found</div>;
}
