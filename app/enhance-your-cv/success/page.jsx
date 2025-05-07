// import Link from "next/link"
// import { CheckCircle, ArrowLeft } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// export default function EnhanceYourCVSuccess() {
//   return (
//     <div className="container max-w-md py-10 px-4 md:py-16">
//       <Card className="text-center">
//         <CardHeader>
//           <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
//             <CheckCircle className="h-8 w-8 text-green-600" />
//           </div>
//           <CardTitle className="text-2xl">CV Enhancement in Progress</CardTitle>
//           <CardDescription>Thank you for your payment</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <p className="mb-4">We've received your CV and our team of experts has started working on enhancing it.</p>
//           <div className="rounded-lg bg-muted p-4 text-left">
//             <h3 className="font-medium">What happens next?</h3>
//             <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
//               <li className="mt-1">Our CV experts will review your document</li>
//               <li className="mt-1">We'll optimize it for ATS systems and hiring managers</li>
//               <li className="mt-1">You'll receive your enhanced CV within 24 hours</li>
//               <li className="mt-1">We'll email you when your enhanced CV is ready</li>
//             </ol>
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-center">
//           <Button asChild variant="outline">
//             <Link href="/dashboard">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Return to Dashboard
//             </Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }


import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="flex h-screen items-center justify-center">
        <div className="shadow-md p-5 rounded-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <div className='mb-5'>
            <h1 className='text-2xl text-center'>CV Enhancement in Progress</h1>
            <p className='text-sm text-gray-500 text-center'>Thank you for your payment</p>
          </div>
          <p className='text-center mb-4'>We've received your CV and our team of experts has started working on enhancing it.</p>
         
          
          <div className="rounded-lg bg-gray-200 p-4 text-left mb-4">
            <h3 className="font-semibold">What happens next?</h3>
            <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground">
              <li className="mt-1">Our CV experts will review your document</li>
              <li className="mt-1">We'll optimize it for ATS systems and hiring managers</li>
              <li className="mt-1">You'll receive your enhanced CV within 24 hours</li>
              <li className="mt-1">We'll email you when your enhanced CV is ready</li>
            </ol>
          </div>
          <div className='flex justify-center items-center'>
          <Link href="/"
          className='flex items-center text-sm border-gray-500 border-[1.2px] rounded-md py-2 px-7 hover:bg-gray-100'>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return Home
            </Link>

          </div>

       
        


        </div>
      
    </div>
  )
}
