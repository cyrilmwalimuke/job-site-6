// import React from 'react'
// import Link from "next/link"

// export default function Footer({sideBar,setSideBar}) {
//   return (
//     <>

//      {sideBar ? (
//             <div></div>
//           ) : (
//             <footer className="border-t border-gray-300 bg-gray-50">
//             <div className="container mx-auto px-4 py-8">
//               <div className="grid gap-8 md:grid-cols-3">
//                 <div>
//                   <h3 className="mb-4 text-lg font-semibold">JOBSKE</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Connecting talented professionals with amazing companies since 2018.
//                   </p>
//                 </div>
//                 <div>
//                   <h4 className="mb-3 text-sm font-semibold">For Job Seekers</h4>
//                   <ul className="space-y-2 text-sm">
//                     <li>
//                       <Link href="/search" className="text-muted-foreground hover:text-foreground">
//                         Browse Jobs
//                       </Link>
//                     </li>
                   
//                     <li>
//                       <Link href="/blog/salary-guide-2025-know-your-worth-before-you-negotiate" className="text-muted-foreground hover:text-foreground">
//                         Salary Guide
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/blog/2025-interview-tips-that-actually-work" className="text-muted-foreground hover:text-foreground">
//                         Interview Tips
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
               
//                 <div>
//                   <h4 className="mb-3 text-sm font-semibold">Company</h4>
//                   <ul className="space-y-2 text-sm">
//                     <li>
//                       <Link href="/about" className="text-muted-foreground hover:text-foreground">
//                         About Us
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/contact" className="text-muted-foreground hover:text-foreground">
//                         Contact
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
//                         Privacy Policy
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/faq" className="text-muted-foreground hover:text-foreground">
//                         FAQ
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/terms" className="text-muted-foreground hover:text-foreground">
//                         Terms of Service
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-muted-foreground">
//                 © {new Date().getFullYear()} JobsKe. All rights reserved.
//               </div>
//             </div>
//           </footer>
            
//           )}
//     </>
   

//   )
// }


'use client'
import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'

export default function Footer({ sideBar, setSideBar }) {
  if (sideBar) return null

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">JobsKe</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Connecting talented professionals with amazing companies since 2018.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://t.me" target="_blank" className="hover:text-blue-600 text-gray-500">
              <FaTelegramPlane size={20} />
              </Link>
              <Link href="https://whatsapp.com/" target="_blank" className="hover:text-green-500 text-gray-500">
              <FaWhatsapp size={20}/>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-700 text-gray-500">
                <Linkedin size={20} />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-pink-500 text-gray-500">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/search" className="hover:text-gray-900">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/blog/salary-guide-2025-know-your-worth-before-you-negotiate" className="hover:text-gray-900">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/2025-interview-tips-that-actually-work" className="hover:text-gray-900">
                  Interview Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-800 mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} JobsKe. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

