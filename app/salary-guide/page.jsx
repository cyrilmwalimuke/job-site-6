import Head from 'next/head'
import Link from 'next/link'

export default function SalaryGuide() {
  return (
    <>
      <Head>
        <title>Salary Guide Kenya | JobBoard Pro</title>
        <meta
          name="description"
          content="Explore average salaries across industries in Kenya including tech, healthcare, education, finance, and more. Know your worth in the local job market."
        />
      </Head>

      <main className="bg-white text-gray-900 min-h-screen py-10 px-6 md:px-20">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Kenya Salary Guide 2025</h1>
          <p className="text-lg mb-10">
            Whether you're job hunting, negotiating a raise, or choosing a career path, this guide helps you understand salary expectations across Kenya's key industries.
          </p>

          {/* Salary by Industry */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-3">💼 Average Salaries by Industry</h2>
              <ul className="pl-6 space-y-2 list-disc">
                <li><strong>Software Developer:</strong> KES 80,000 – 250,000/month</li>
                <li><strong>Registered Nurse:</strong> KES 40,000 – 120,000/month</li>
                <li><strong>Primary School Teacher (Public):</strong> KES 25,000 – 60,000/month</li>
                <li><strong>Accountant:</strong> KES 50,000 – 150,000/month</li>
                <li><strong>Electrician:</strong> KES 20,000 – 70,000/month</li>
                <li><strong>Customer Service Rep:</strong> KES 30,000 – 80,000/month</li>
              </ul>
            </div>

            {/* Experience Levels */}
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-3">📊 Salary by Experience Level</h2>
              <ul className="pl-6 space-y-2 list-disc">
                <li><strong>Entry Level (0–2 years):</strong> KES 25,000 – 60,000/month</li>
                <li><strong>Mid-Level (3–5 years):</strong> KES 60,000 – 150,000/month</li>
                <li><strong>Senior (6+ years):</strong> KES 150,000 – 400,000+/month</li>
              </ul>
            </div>

            {/* Location Impact */}
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-3">🌍 Regional Salary Variations</h2>
              <p className="mb-2">
                Salaries in Kenya vary based on location:
              </p>
              <ul className="pl-6 space-y-2 list-disc">
                <li><strong>Nairobi:</strong> Highest salaries, especially in tech, finance, and international NGOs</li>
                <li><strong>Mombasa:</strong> Strong in logistics and tourism, slightly lower pay than Nairobi</li>
                <li><strong>Kisumu / Eldoret / Nakuru:</strong> Competitive regional roles, but lower cost of living</li>
                <li><strong>Remote / Rural:</strong> Lower pay but also lower living expenses</li>
              </ul>
            </div>

            {/* Negotiation Tips */}
            <div>
              <h2 className="text-2xl font-semibold text-green-700 mb-3">🤝 Salary Negotiation Tips in Kenya</h2>
              <ul className="pl-6 space-y-2 list-disc">
                <li>Use local platforms like BrighterMonday, MyJobsInKenya, and Glassdoor to benchmark salaries</li>
                <li>Emphasize skills, certifications, and performance — especially for tech and finance roles</li>
                <li>Negotiate professionally, but don’t undervalue yourself — companies expect some discussion</li>
                <li>Consider the full compensation package: NHIF, NSSF, pension, bonuses, airtime, and transport allowances</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-green-100 border-l-4 border-green-600 p-6 rounded">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Want Personalised Salary Insights?</h3>
            <p className="mb-4">
              Chat with a career advisor or use our upcoming salary calculator for a tailored estimate based on your role, experience, and location in Kenya.
            </p>
            <Link href="/contact" className="inline-block bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition">
             
                Speak to an Advisor
            
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
