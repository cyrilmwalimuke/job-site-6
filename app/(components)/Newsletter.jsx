"use client"

import React from "react"

import { useState } from "react"
import { Mail, CheckCircle, TrendingUp, Users, Briefcase, Bell } from "lucide-react"


export default function NewsletterSubscription() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
    fetch('/api/newsletter',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })



  }

  if (isSubscribed) {
    return (
      <section className="w-full py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container px-4 md:px-6 max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome to Our Community!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for subscribing! You'll receive your first career insights newsletter within 24 hours.
          </p>
          <p className="text-sm text-gray-500">
            Check your email for a confirmation link to complete your subscription.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Stay Ahead in Your Career Journey</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get exclusive job market insights, career tips, and the latest opportunities delivered to your inbox
              weekly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">What You'll Get:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Latest Job Opportunities</h4>
                    <p className="text-sm text-gray-600">Curated job listings matching your skills and interests</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Career Growth Tips</h4>
                    <p className="text-sm text-gray-600">
                      Expert advice on advancing your career and increasing salary
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Industry Insights</h4>
                    <p className="text-sm text-gray-600">Market trends, salary reports, and hiring forecasts</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Exclusive Content</h4>
                    <p className="text-sm text-gray-600">
                      Subscriber-only resources, templates, and early access to services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-lg">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-center">Join 25,000+ Professionals</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
            
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white px-3 py-2 rounded-md focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 flex items-center text-white px-20 rounded-md  py-3" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4 mr-2" />
                        Subscribe to Newsletter
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Free forever. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t">
                  <div className="flex justify-center items-center gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      No spam
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Any time delivery
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Easy unsubscribe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Trusted by Leading Professionals</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">25K+</div>
                  <div>Subscribers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.8★</div>
                  <div>Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div>Open Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">2 min</div>
                  <div>Read Time</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Join professionals from Kengen, safaricom, KCB, and 100+ other companies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
