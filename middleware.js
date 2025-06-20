// import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server'
// const isProtectedRoute = createRouteMatcher(['/post-job']);

// export default clerkMiddleware((auth, req) => {
//   const { userId, sessionClaims } = auth();

//   if (isProtectedRoute(req)) {
//     const role = sessionClaims?.publicMetadata?.role;
//     if (role !== 'admin') {
//       return Response.redirect(new URL('/unauthorized', req.url)); // or show a 403 page
//     }
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// import { NextResponse } from 'next/server' // ✅ import NextResponse

// const isProtectedRoute = createRouteMatcher(['/post-job'])

// export default clerkMiddleware((auth, req) => {
//   const { sessionClaims } = auth()
//   console.log('sessionClaims:', sessionClaims)

//   if (isProtectedRoute(req)) {
//     const role = sessionClaims?.publicMetadata?.role

//     if (role !== 'admin') {
//       const url = req.nextUrl.clone()
//       url.pathname = '/unauthorized'

//       return NextResponse.redirect(url) // ✅ CORRECT redirect for middleware
//     }
//   }
// })

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     '/(api|trpc)(.*)',
//   ],
// }

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server' // ✅ import NextResponse

const isProtectedRoute = createRouteMatcher(['/post-job'])

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}

