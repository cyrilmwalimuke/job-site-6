"use client"
import React from "react"
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Briefcase, HelpCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  }

  console.log("Form Data:", formData);

  const handleSubmit = async(e) =>{
    e.preventDefault();
    const res =await fetch('/api/contact', {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData)   
    }) 

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              We're here to help job seekers find their dream careers and employers discover top talent in Kenya. Reach
              out to us anytime!
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div  className="shadow-lg p-6 bg-white rounded-lg">
              <div>
                <div className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                  Send us a Message
                </div>
                <div className="text-gray-500">Fill out the form below and we'll get back to you within 24 hours.</div>
              </div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="p-3 border-gray-500 border-[1.2px] rounded-md"
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="p-3 border-gray-500 border-[1.2px] rounded-md"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="p-3 border-gray-500 border-[1.2px] rounded-md"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 7XX XXX XXX"
                    className="p-3 border-gray-500 border-[1.2px] rounded-md"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="inquiryType">Type of Inquiry</label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    className="p-3 border-gray-500 border-[1.2px] rounded-md"
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>
                    <option value="job-seeker">Job Seeker Support</option>
                    <option value="employer">Employer Services</option>
                    <option value="technical">Technical Support</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief description of your inquiry"
                    className="p-3 border-gray-500 border-[1.2px] rounded-md"
                  />
                </div>

                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[120px] p-3 border-gray-500 border-[1.2px] rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 py-2 text-white rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 ">
            {/* Contact Details */}
            <div className="shadow-lg p-6 rounded-lg bg-white">
              <div>
                <div className="text-xl">Contact Information</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-sm text-muted-foreground">support@jobskenya.co.ke</p>
                    <p className="text-sm text-muted-foreground">employers@jobskenya.co.ke</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                    <p className="text-sm text-muted-foreground">+254 733 987 654</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-sm text-muted-foreground">
                      ABC Plaza, 5th Floor
                      <br />
                      Waiyaki Way, Westlands
                      <br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-bold">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Help */}
            <div className="shadow-lg rounded-lg bg-white p-6">
              <div>
                <div className="text-xl flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                  Quick Help
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Users className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium text-sm">Job Seekers</p>
                    <p className="text-xs text-muted-foreground">Resume tips, interview prep</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                  <Briefcase className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-medium text-sm">Employers</p>
                    <p className="text-xs text-muted-foreground">Post jobs, find candidates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="shadow-lg p-6 rounded-lg bg-white">
              <div>
                <div className="text-xl">Languages Supported</div>
              </div>
              <div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">English</span>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Primary</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Kiswahili</span>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       
         
          
         
      </div>
    </div>
  )
}
