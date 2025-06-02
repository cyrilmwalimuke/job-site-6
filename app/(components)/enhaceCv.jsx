import React from 'react'
import { CheckCircle, Clock, Target, TrendingUp } from 'lucide-react';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link'; 

export default function enhaceCv() {
  return (
    <section className="w-full py-12 ">
    <div className="container px-4 md:px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Professional CV Enhancement Service</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your CV into a powerful tool that gets you noticed by employers and passes through Applicant
          Tracking Systems with ease.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <div className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">60% Higher Success Rate</h3>
            <p className="text-sm text-gray-600">
              Professionally enhanced CVs increase interview chances significantly
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">ATS Optimized</h3>
            <p className="text-sm text-gray-600">Formatted to pass through Applicant Tracking Systems</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">24-Hour Delivery</h3>
            <p className="text-sm text-gray-600">Quick turnaround time to get you applying faster</p>
          </div>
        </div>

        <div className="text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="font-semibold mb-2">Professional Quality</h3>
            <p className="text-sm text-gray-600">Expert formatting, grammar check, and keyword optimization</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4">What You Get</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>ATS-optimized formatting that gets past automated screening</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Strategic keyword enhancement for your industry</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Professional layout design that stands out</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Complete grammar and spelling review</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Achievement highlighting and impact quantification</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">KSH 1000</div>
              <div className="text-blue-100 mb-4">One-time fee</div>
              <div className="text-sm text-blue-100">Affordable investment in your career success</div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Upload PDF or Word documents • Secure processing • Money-back guarantee
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">Join thousands of job seekers who have successfully enhanced their CVs</p>
        <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
          <span>✓ Trusted by 10,000+ users</span>
          <span>✓ 4.9/5 satisfaction rating</span>
          <span>✓ Secure file handling</span>
        </div>
      </div>
    </div>

    <div className='flex items-center justify-center  text-white  mt-5'>
      <Link href='enhance-your-cv' className='bg-black rounded-md px-5 py-2 flex items-center gap-3'>
        Enhance My CV Now
        <FaArrowRight size={15}/>
      
      </Link>
      


    </div>
  </section>  )
}
