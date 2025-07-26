'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Test404Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to a non-existent route to trigger the 404 page
    router.push('/non-existent-route');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to 404...</h1>
        <p className="text-gray-600">You should see the custom 404 page in a moment.</p>
      </div>
    </div>
  );
} 