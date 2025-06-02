import { Star, Quote, MapPin, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"



export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      role: "Software Developer",
      company: "Safaricom PLC",
      location: "Nairobi, Kenya",
      image: "https://aharvey.com/wp-content/uploads/2018/03/bg-placeholder.jpg",
      rating: 5,
      timeToHire: "2 weeks",
      salaryIncrease: "40%",
      testimonial:
        "I was struggling to find tech jobs that matched my skills. This platform not only had the best job listings but their CV enhancement service helped me stand out. I got 3 interview calls in the first week and landed my dream job at Safaricom!",
      highlight: "Got 3 interviews in first week",
    },
    {
      id: 2,
      name: "James Mwangi",
      role: "Marketing Manager",
      company: "Equity Bank",
      location: "Nairobi, Kenya",
      image: "https://aharvey.com/wp-content/uploads/2018/03/bg-placeholder.jpg",
      rating: 5,
      timeToHire: "3 weeks",
      salaryIncrease: "35%",
      testimonial:
        "After 6 months of unsuccessful job hunting, I found this site. The job alerts were perfectly targeted, and the application process was so smooth. Within 3 weeks, I had multiple offers and chose Equity Bank.",
      highlight: "Multiple offers after 6 months of searching",
    },
    {
      id: 3,
      name: "Grace Akinyi",
      role: "Data Analyst",
      company: "Kenya Airways",
      location: "Nairobi, Kenya",
      image: "https://aharvey.com/wp-content/uploads/2018/03/bg-placeholder.jpg",
      rating: 5,
      timeToHire: "1 week",
      salaryIncrease: "50%",
      testimonial:
        "The platform's job matching algorithm is incredible. I uploaded my CV and immediately got matched with relevant positions. The CV enhancement service made my profile shine, and I got hired within a week!",
      highlight: "Hired within 1 week",
    },
    {
      id: 4,
      name: "David Kiprotich",
      role: "Financial Analyst",
      company: "KCB Group",
      location: "Nairobi, Kenya",
      image: "https://aharvey.com/wp-content/uploads/2018/03/bg-placeholder.jpg",
      rating: 5,
      timeToHire: "2 weeks",
      salaryIncrease: "45%",
      testimonial:
        "I was looking to transition from accounting to finance. The career guidance and job recommendations were spot-on. The enhanced CV helped me showcase my transferable skills perfectly.",
      highlight: "Successful career transition",
    },
    {
      id: 5,
      name: "Mary Njeri",
      role: "HR Business Partner",
      company: "Unilever Kenya",
      location: "Nairobi, Kenya",
      image: "https://aharvey.com/wp-content/uploads/2018/03/bg-placeholder.jpg",
      rating: 5,
      timeToHire: "10 days",
      salaryIncrease: "30%",
      testimonial:
        "The quality of jobs on this platform is outstanding. No spam applications or irrelevant postings. Every job I applied for was exactly what I was looking for. Highly recommend!",
      highlight: "High-quality job matches",
    },
    {
      id: 6,
      name: "Peter Otieno",
      role: "Project Manager",
      company: "Bamburi Cement",
      location: "Mombasa, Kenya",
      image: "https://aharvey.com/wp-content/uploads/2018/03/bg-placeholder.jpg",
      rating: 5,
      timeToHire: "3 weeks",
      salaryIncrease: "25%",
      testimonial:
        "As someone with 10+ years experience, I needed a platform that understood senior-level recruitment. The personalized job alerts and professional network here are unmatched.",
      highlight: "Perfect for senior professionals",
    },
  ]

  const stats = [
    { label: "Success Rate", value: "94%", description: "of users find jobs within 30 days" },
    { label: "Average Salary Increase", value: "38%", description: "compared to previous roles" },
    { label: "Time to Hire", value: "18 days", description: "average time from application to offer" },
    { label: "Interview Rate", value: "73%", description: "of applications lead to interviews" },
  ]

  return (
    <section className="w-full py-16">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Success Stories from Our Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully found their dream jobs through our platform
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center shadow-md bg-white rounded-md">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <div className="bg-blue-400 text-white rounded-md">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  {/* <div className="w-24 h-24 border-4 border-white/20 rounded-full">
                    <img src={testimonials[0].image || "/placeholder.svg"} alt={testimonials[0].name} />
                    <div className="text-2xl bg-white/20">
                      {testimonials[0].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                  </div> */}
                  <img src={testimonials[0].image || "/placeholder.svg"} alt="" className="h-24 w-24 rounded-full"/>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <Quote className="h-8 w-8 text-blue-200 mb-4 mx-auto md:mx-0" />
                  <blockquote className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                    "{testimonials[0].testimonial}"
                  </blockquote>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div>
                      <div className="font-semibold text-lg">{testimonials[0].name}</div>
                      <div className="text-blue-200">
                        {testimonials[0].role} at {testimonials[0].company}
                      </div>
                    </div>
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Hired in {testimonials[0].timeToHire}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        <span>{testimonials[0].salaryIncrease} salary increase</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(1).map((testimonial) => (
            <div key={testimonial.id} className="h-full shadow-md bg-white rounded-md">
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.testimonial}"</blockquote>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    {/* <div className="w-12 h-12 rounded-full">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                      <div>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    </div> */}
                    <img src={testimonial.image} alt="" className="h-12 w-12 rounded-full" />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{testimonial.highlight}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border-0">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of professionals who have transformed their careers. Start your journey today and become
                our next success story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href='/search' className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
                  Browse Jobs Now
                </Link>
                {/* <Link href='/enhance-your-cv' className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold">
                  Enhance My CV
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
