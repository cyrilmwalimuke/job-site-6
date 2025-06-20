import React from 'react'
import Link from "next/link"

export default function Footer({sideBar,setSideBar}) {
  return (
    <>

     {sideBar ? (
            <div></div>
          ) : (
            <footer className="border-t border-gray-300 bg-gray-50">
            <div className="container mx-auto px-4 py-8">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">JOBSKE</h3>
                  <p className="text-sm text-muted-foreground">
                    Connecting talented professionals with amazing companies since 2018.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-semibold">For Job Seekers</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/search" className="text-muted-foreground hover:text-foreground">
                        Browse Jobs
                      </Link>
                    </li>
                   
                    <li>
                      <Link href="/blog/salary-guide-2025-know-your-worth-before-you-negotiate" className="text-muted-foreground hover:text-foreground">
                        Salary Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/2025-interview-tips-that-actually-work" className="text-muted-foreground hover:text-foreground">
                        Interview Tips
                      </Link>
                    </li>
                  </ul>
                </div>
               
                <div>
                  <h4 className="mb-3 text-sm font-semibold">Company</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/about" className="text-muted-foreground hover:text-foreground">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} JobsKe. All rights reserved.
              </div>
            </div>
          </footer>
            
          )}
    </>
   

  )
}

