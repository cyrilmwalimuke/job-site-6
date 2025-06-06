



"use client"

import { useState } from "react"
import { HelpCircle, Search, Users, Briefcase, Settings, MessageCircle, Phone } from "lucide-react"
import Link from "next/link"

const faqData = {
  jobSeekers: [
    {
        id: "js1",
        question: "How do I create a job seeker profile?",
        answer:
          "Creating a profile is simple! Click Sign Up at the top of the page, choose Job Seeker', fill in your basic information, upload your CV/resume, and complete your profile with your skills, experience, and job preferences. A complete profile increases your chances of being found by employers.",
      },
      {
        id: "js2",
        question: "Is it free to use the platform as a job seeker?",
        answer:
          "Yes! Job seekers can create profiles, search for jobs, and apply to positions completely free. We also offer premium features like profile highlighting and priority application status for a small fee to boost your visibility.",
      },
      {
        id: "js3",
        question: "How do I apply for jobs?",
        answer:
          "Once you find a job you're interested in, click on the job title to view details. Then click 'Apply Now' and follow the prompts. You can apply with your existing profile or upload a customized CV for that specific position.",
      },
      {
        id: "js4",
        question: "Can I edit my application after submitting?",
        answer:
          "Unfortunately, once an application is submitted, it cannot be edited. However, you can contact the employer directly if you need to provide additional information or corrections.",
      },
      {
        id: "js5",
        question: "How do I know if an employer has viewed my application?",
        answer:
          "You'll receive email notifications when employers view your application. You can also check your application status in your dashboard under 'My Applications'.",
      },
      {
        id: "js6",
        question: "What should I include in my profile to attract employers?",
        answer:
          "Include a professional photo, detailed work experience, education, skills, certifications, and a compelling summary. Also, keep your profile updated and use relevant keywords that employers might search for.",
      }
  ],
  employers: [{
    id: "emp1",
    question: "How much does it cost to post a job?",
    answer:
      "We offer flexible pricing plans. Basic job postings start from KES 2,500 for 30 days. Premium packages with enhanced visibility and additional features range from KES 5,000 to KES 15,000. Contact us for volume discounts and custom packages.",
  },
  {
    id: "emp2",
    question: "How long do job postings stay active?",
    answer:
      "Standard job postings remain active for 30 days. Premium postings can stay active for up to 90 days. You can also renew or extend your postings at any time from your employer dashboard.",
  },
  {
    id: "emp3",
    question: "Can I edit my job posting after it's published?",
    answer:
      "Yes! You can edit your job postings at any time from your employer dashboard. Changes are reflected immediately, and applicants will see the updated information.",
  },
  {
    id: "emp4",
    question: "How do I manage applications and candidates?",
    answer:
      "Your employer dashboard provides tools to view, sort, and manage all applications. You can shortlist candidates, send messages, schedule interviews, and track the hiring process all in one place.",
  },
  {
    id: "emp5",
    question: "Can I search for candidates proactively?",
    answer:
      "Yes! With our premium employer packages, you can search our candidate database, view profiles, and reach out to potential candidates directly, even if they haven't applied to your specific job.",
  },
  {
    id: "emp6",
    question: "Do you offer recruitment services?",
    answer:
      "Yes! We provide full recruitment services including job posting optimization, candidate screening, interview coordination, and placement assistance. Contact our team for customized recruitment solutions.",
  }],
  general: [{
    id: "gen1",
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
  },
  {
    id: "gen2",
    question: "Can I have both job seeker and employer accounts?",
    answer:
      "Yes! You can create separate accounts for different purposes, or contact our support team to add employer features to your existing job seeker account.",
  },
  {
    id: "gen3",
    question: "What payment methods do you accept?",
    answer:
      "We accept M-Pesa, bank transfers, Visa, Mastercard, and other major credit/debit cards. All payments are processed securely through our encrypted payment gateway.",
  },
  {
    id: "gen4",
    question: "Is my personal information safe?",
    answer:
      "We use industry-standard encryption and security measures to protect your data. We never share your personal information without your consent. Read our Privacy Policy for detailed information.",
  },
  {
    id: "gen5",
    question: "How do I delete my account?",
    answer:
      "You can delete your account from your profile settings, or contact our support team. Please note that deleting your account will permanently remove all your data and cannot be undone.",
  },
  {
    id: "gen6",
    question: "Do you have a mobile app?",
    answer:
      "Yes! Our mobile app is available for both Android and iOS. Download it from Google Play Store or Apple App Store to access all features on the go.",
  }],
  platform: [
    {
        id: "plat1",
        question: "How does the job matching algorithm work?",
        answer:
          "Our algorithm matches jobs with candidates based on skills, experience, location preferences, salary expectations, and other criteria. The more complete your profile, the better the matches you'll receive.",
      },
      {
        id: "plat2",
        question: "Can I receive job alerts?",
        answer:
          "Yes! Set up job alerts based on your preferences (location, industry, salary range, etc.) and receive email notifications when matching jobs are posted.",
      },
      {
        id: "plat3",
        question: "How do I report suspicious job postings or users?",
        answer:
          "Click the 'Report' button on any job posting or user profile that seems suspicious. Our team reviews all reports within 24 hours and takes appropriate action to maintain platform safety.",
      },
      {
        id: "plat4",
        question: "What makes your platform different from others?",
        answer:
          "We focus specifically on the Kenyan job market with local expertise, support in English and Kiswahili, integration with local payment methods, and dedicated customer support. We also offer career development resources and interview preparation tools.",
      },
      {
        id: "plat5",
        question: "Do you verify employers and job postings?",
        answer:
          "Yes! We verify all employer accounts and review job postings to ensure legitimacy. We also encourage users to report any suspicious activity to maintain a safe job search environment.",
      },
  ],
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("jobSeekers")
  const [openItem, setOpenItem] = useState(null)

  const handleToggle = (id) => {
    setOpenItem((prev) => (prev === id ? null : id))
  }

  const filterFAQs = (faqs) => {
    if (!searchTerm) return faqs
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  const allFAQs = [...faqData.jobSeekers, ...faqData.employers, ...faqData.general, ...faqData.platform]
  const filteredAllFAQs = filterFAQs(allFAQs)

  const renderFAQs = (faqs) =>
    faqs.map((faq) => (
      <div key={faq.id} className="border rounded-md mb-4 bg-white">
        <button
          onClick={() => handleToggle(faq.id)}
          className="w-full text-left px-6 py-4 font-medium focus:outline-none hover:bg-gray-50"
        >
          {faq.question}
        </button>
        {openItem === faq.id && (
          <div className="px-6 pb-4 text-sm text-gray-600">{faq.answer}</div>
        )}
      </div>
    ))

  const tabOptions = [
    { key: "jobSeekers", label: "Job Seekers", icon: <Users className="h-4 w-4" /> },
    { key: "employers", label: "Employers", icon: <Briefcase className="h-4 w-4" /> },
    { key: "general", label: "General", icon: <Settings className="h-4 w-4" /> },
    { key: "platform", label: "Platform", icon: <HelpCircle className="h-4 w-4" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="container max-w-4xl mx-auto px-4 py-16 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-6 text-orange-100" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about our job platform. Can&apos;t find what you&apos;re looking for? We're here to help!
          </p>

          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md text-gray-900 bg-white border focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-12">
        {searchTerm ? (
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Search Results for &quot;{searchTerm}&quot; ({filteredAllFAQs.length} found)
            </h2>
            {filteredAllFAQs.length > 0 ? (
              renderFAQs(filteredAllFAQs)
            ) : (
              <div className="text-center py-12 border rounded-md bg-white">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold mb-2">No results found</h3>
                <p className="text-gray-500 mb-4">
                  We couldn&apos;t find any FAQs matching your search. Try different keywords or browse by category.
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="px-6 py-2 border border-gray-400 rounded hover:bg-gray-100"
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {tabOptions.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveTab(tab.key)
                    setOpenItem(null)
                  }}
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded ${
                    activeTab === tab.key
                      ? "bg-orange-600 text-white"
                      : "bg-white text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {tabOptions.find((tab) => tab.key === activeTab)?.label}
              </h2>
              <p className="text-gray-500">
                {activeTab === "jobSeekers"
                  ? "Everything you need to know about finding and applying for jobs."
                  : activeTab === "employers"
                  ? "Learn how to post jobs and find the best candidates."
                  : activeTab === "general"
                  ? "Account management, payments, and platform basics."
                  : "How our platform works and what makes us unique."}
              </p>
            </div>

            {renderFAQs(faqData[activeTab])}
          </div>
        )}

        <div className="mt-16 p-8 text-center rounded-md bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-orange-100" />
          <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            Cant find the answer you are looking for? Our friendly support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-white text-orange-600 rounded hover:bg-orange-100"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Contact Support
            </Link>
            <Link
              href="tel:+254795048848"
              className="inline-flex items-center justify-center px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-orange-600"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us Now
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="text-center border rounded-md bg-white p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <p className="text-gray-500">Support Available</p>
          </div>
          <div className="text-center border rounded-md bg-white p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">&lt;2hrs</div>
            <p className="text-gray-500">Average Response Time</p>
          </div>
          <div className="text-center border rounded-md bg-white p-6">
            <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
            <p className="text-gray-500">FAQs Resolved</p>
          </div>
        </div>
      </div>
    </div>
  )
}
