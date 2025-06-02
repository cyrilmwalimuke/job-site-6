import Head from 'next/head'
import Link from 'next/link'

export default function InterviewTips() {
  return (
    <>
      <Head>
        <title>Interview Tips | JobBoard Pro</title>
        <meta name="description" content="Master your next job interview with expert tips, example questions, and preparation strategies." />
      </Head>

      <main className="bg-gray-50 text-gray-800 min-h-screen py-10 px-6 md:px-20">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Ace Your Next Interview</h1>
          <p className="text-lg mb-8">
            Preparing for an interview is just as important as your resume. Here’s a comprehensive guide to help you build confidence, impress recruiters, and land that dream job.
          </p>

          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">1. Research the Company</h2>
              <p>
                Understand the company’s mission, values, recent projects, and culture. Visit their official website, LinkedIn, and news mentions. This helps you tailor your answers and show genuine interest.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">2. Practice Common Questions</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tell me about yourself.</li>
                <li>Why do you want to work here?</li>
                <li>What are your strengths and weaknesses?</li>
                <li>Describe a challenge you overcame.</li>
              </ul>
              <p className="mt-2">
                Use the STAR method (Situation, Task, Action, Result) to structure your responses.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">3. Prepare Questions to Ask</h2>
              <p>
                Interviews are two-way. Ask thoughtful questions like:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>What does success look like in this role?</li>
                <li>What are the biggest challenges the team faces?</li>
                <li>Can you describe the team culture?</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">4. Dress the Part</h2>
              <p>
                Choose professional attire based on the company’s culture. When in doubt, lean towards business casual. First impressions matter.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">5. Follow Up</h2>
              <p>
                Send a personalized thank-you email within 24 hours. Reaffirm your interest and briefly highlight why you’re a great fit.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-blue-100 border-l-4 border-blue-500 p-6 rounded">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Need More Help?</h3>
            <p className="mb-4">Check out our <Link href="/resume-builder" className="underline text-blue-700">Resume Builder</Link> or explore job listings to practice applying your new skills.</p>
            <Link href="/jobs" className='inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition'>
             
                Browse Jobs
             
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
