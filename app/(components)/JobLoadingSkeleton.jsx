"use client";

import { ArrowLeft, Briefcase, MapPin, Clock, Calendar, Share2, Bookmark } from "lucide-react";

export default function JobPageSkeleton() {
  return (
    <div>
      <main className="container mx-auto px-4 py-8 animate-pulse">
        {/* Back Button */}
        <div className="h-4 w-36 bg-gray-300 rounded mb-6" />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header Skeleton */}
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <div className="h-16 w-16 rounded-lg bg-gray-200 flex items-center justify-center flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-6 w-3/4 bg-gray-300 rounded" />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                    <div className="h-4 w-20 bg-gray-200 rounded" />
                    <div className="h-4 w-24 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <div className="h-10 w-24 bg-gray-200 rounded" />
                <div className="h-10 w-10 bg-gray-200 rounded" />
                <div className="h-10 w-10 bg-gray-200 rounded" />
                <div className="h-10 w-24 bg-gray-200 rounded" />
              </div>
            </div>

            {/* Job Details Skeleton */}
            <div className="bg-white rounded-xl shadow-sm p-6 border space-y-4">
              <div className="h-6 w-40 bg-gray-300 rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-5/6 bg-gray-200 rounded" />
              </div>

              <div className="h-6 w-40 bg-gray-300 rounded mt-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-4/5 bg-gray-200 rounded" />
              </div>

              <div className="h-6 w-40 bg-gray-300 rounded mt-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-2/3 bg-gray-200 rounded" />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <div className="h-40 w-full bg-gray-100 rounded-md flex items-center justify-center">
              <div className="h-6 w-20 bg-gray-300 rounded" />
            </div>

            <div className="space-y-2">
              <div className="h-6 w-32 bg-gray-300 rounded" />
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-2/3 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

