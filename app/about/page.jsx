
import { Users, Target, Heart, Award, Building, Globe, TrendingUp, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div  className="w-fit text-sm bg-white rounded-full px-4">
                About TalentConnect
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Connecting talent with opportunity
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We're on a mission to transform how people find meaningful work and how companies discover exceptional
                talent. Since 2018, we've helped over 100,000 professionals find their dream jobs.
              </p>
         
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184285/pexels-photo-3184285.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5K+</div>
              <div className="text-muted-foreground">Jobs Filled</div>
            </div>
         
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">47</div>
              <div className="text-muted-foreground">Counties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

 




      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Story</h2>
              <p className="text-xl text-gray-500">
                From a small startup to a national platform transforming careers countrywide
              </p>
            </div>

            <div className=" mb-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">The Beginning</h3>
                <p className="text-muted-foreground text-gray-500 ">
                  Founded in 2018 by a team of tech enthusiasts, AjiraConnect was born from a
                  simple observation: the traditional job search process was broken. Both job seekers and employers were
                  struggling with inefficient, time-consuming processes that often led to poor matches.
                </p>
                <p className="text-muted-foreground text-gray-500">
                  We set out to create a platform that would use technology to make job searching more personal,
                  efficient, and successful for everyone involved.
                </p>
              </div>
           
            </div>

            <div className="">
             
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Today & Tomorrow</h3>
                <p className="text-muted-foreground text-gray-500">
                  Today, we're proud to be one of the leading job platforms countrywide, with a team  of over 20 dedicated professionals. Our AI-powered matching technology has revolutionized how
                  people find jobs and how companies discover talent.
                </p>
                <p className="text-muted-foreground text-gray-500">
                  But we're just getting started. Our vision is to create a world where everyone can find work they love
                  and where every company can build their dream team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




    













      {/* Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-0 shadow-lg">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">People First</h3>
                <p className="text-muted-foreground">
                  We believe that behind every resume is a person with dreams, aspirations, and unique talents. We're
                  committed to treating everyone with respect and dignity.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from our technology platform to our customer service,
                  always pushing to exceed expectations.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Integrity</h3>
                <p className="text-muted-foreground">
                  Transparency, honesty, and ethical practices are at the core of our business. We build trust through
                  consistent, reliable actions.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace change and continuously innovate to solve complex problems and create better experiences
                  for our users.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Diversity</h3>
                <p className="text-muted-foreground">
                  We celebrate diversity and believe that different perspectives make us stronger, more creative, and
                  more successful.
                </p>
              </div>
            </div>

            <div className="border-0 shadow-lg">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Impact</h3>
                <p className="text-muted-foreground">
                  We measure our success by the positive impact we have on people's lives and careers, not just our
                  bottom line.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

 

  

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Ready to Join Our Mission?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Whether you're looking for your next career opportunity or want to join our team, we'd love to hear from
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button size="lg" variant="secondary" className="text-lg text-black bg-white px-8 py-2 rounded-md">
              <Link href="/search">View Open Positions</Link>
            </button>
            <button
           
              className="text-lg px-8 bg-gray-400 rounded-md border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/contact">Contact Us</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
