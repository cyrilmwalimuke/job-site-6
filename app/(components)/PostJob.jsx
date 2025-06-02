import { Clock, Globe, Search, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


const PricingCTA = () => {

    const benefits = [
        {
          icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
          title: "High Visibility",
          description: "Reach 500,000+ active job seekers monthly across Kenya",
        },
        {
          icon: <Zap className="h-6 w-6 text-purple-600" />,
          title: "Quick Results",
          description: "Receive qualified applications within 24 hours of posting",
        },
        {
          icon: <Search className="h-6 w-6 text-green-600" />,
          title: "Quality Candidates",
          description: "Connect with pre-screened, qualified professionals",
        },
        {
          icon: <Globe className="h-6 w-6 text-orange-600" />,
          title: "Nationwide Reach",
          description: "Access talent from all regions across Kenya",
        },
        {
          icon: <Clock className="h-6 w-6 text-teal-600" />,
          title: "Time-Saving",
          description: "Our AI matching helps you find the right candidates faster",
        },
      ]
  return (
    <section className=" py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Hire Top Talent Effortlessly
        </h2>
        <p className="text-gray-600 mb-10">
        Join 5,000+ companies who trust our platform to connect with top talent across Kenya
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center h-full shadow-md bg-white rounded-md p-3">
              <div className="pt-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

 

        {/* CTA Button */}
        <Link href='/post-job' className="bg-black hover:bg-gray-500 text-white text-lg font-medium px-6 py-3 rounded-xl transition duration-300">
          🚀 Post a Job Now
        </Link>
      </div>
    </section>
  );
};

export default PricingCTA;
