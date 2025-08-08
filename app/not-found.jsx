// app/404.tsx (or app/not-found.tsx)
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



export default function NotFoundPage() {

  const router = useRouter();
  const [float, setFloat] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloat((f) => !f);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // your logic here

  return (<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-indigo-900 to-black text-white text-center px-4">
    <motion.h1
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-9xl font-extrabold drop-shadow-glow"
    >
      404
    </motion.h1>
    <motion.div
      animate={{
        y: float ? -10 : 10,
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: 'easeInOut',
      }}
      className="text-2xl mt-6 text-gray-300"
    >
      Oops! The page you’re looking for doesn’t exist.
    </motion.div>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mt-10 px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition shadow-lg"
      onClick={() => router.push('/')}
    >
      Go Home
    </motion.button>
  </div>)
}
