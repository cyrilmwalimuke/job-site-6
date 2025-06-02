import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function MobileAppPromo() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Get Our App and Find Jobs On the Go
          </h2>
          <p className="mt-4 text-gray-600">
            Search, apply, and track your job applications anywhere, anytime. Stay ahead with real-time alerts and exclusive mobile features.
          </p>
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl shadow hover:bg-gray-900 transition"
            >
              <FaApple size={20} />
              <span className="text-sm font-medium">Download on the App Store</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 transition"
            >
              <FaGooglePlay size={20} />
              <span className="text-sm font-medium">Get it on Google Play</span>
            </a>
          </div>
        </div>

        {/* Image */}
     
          <img
            src="/mobile-app.png"
            alt="Mobile App Preview"
            className=" max-w-md mx-auto rounded-3xl  h-72 w-48"
          />
       
      </div>
    </section>
  );
}
