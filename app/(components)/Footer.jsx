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
              <div className="grid gap-8 md:grid-cols-4">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">FleekJobs</h3>
                  <p className="text-sm text-muted-foreground">
                    Connecting talented professionals with amazing companies since 2023.
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
                      <Link href="/enhance-cv" className="text-muted-foreground hover:text-foreground">
                        Enhance CV
                      </Link>
                    </li>
                    <li>
                      <Link href="/salary-guide" className="text-muted-foreground hover:text-foreground">
                        Salary Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/interview-tips" className="text-muted-foreground hover:text-foreground">
                        Interview Tips
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="mb-3 text-sm font-semibold">For Employers</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/post-job" className="text-muted-foreground hover:text-foreground">
                        Post Link Job
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/employers" className="text-muted-foreground hover:text-foreground">
                        Employer Resources
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
                      <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-300 pt-8 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} FleekJobs. All rights reserved.
              </div>
            </div>
          </footer>
            
          )}
    </>
   

  )
}

