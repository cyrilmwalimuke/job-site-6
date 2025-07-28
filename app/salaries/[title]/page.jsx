
import {TrendingUp,Building2,GraduationCap,Users, Briefcase,Star,ChevronRight} from "lucide-react"

export default async function SalaryPage({params}) {
  const title = await params.title;
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
   

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Job Title Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span>Salaries</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blue-600 capitalize">{title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Electrical Engineer</h1>
              <p className="text-lg text-gray-600 mb-4">Design, develop, and test electrical systems and equipment</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <div variant="secondary" className="flex items-center gap-1 bg-white p-1 rounded-sm">
                  <Users className="w-3 h-3" />
                  12,847 salaries reported
                </div>
                <div variant="secondary" className="flex items-center gap-1  bg-white p-1 rounded-sm">
                  <TrendingUp className="w-3 h-3" />
                  +5.2% vs last year
                </div>
                <div variant="secondary" className="flex items-center gap-1  bg-white p-1 rounded-sm">
                  <Briefcase className="w-3 h-3" />
                  High demand
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border-[1.0px] border-gray-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">kshs 115,000</div>
                <div className="text-sm text-gray-500 mb-3">Average Base Salary</div>
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="text-gray-600">kshs 34,435</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 w-40 sm:w-10">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  <span className="text-gray-600">kshs 208,137</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
           <div className="lg:col-span-2 space-y-8">


            {/* Top Paying Companies */}
            <div className="bg-white rounded-lg p-5">
              <div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-600" />
                  Top Paying Companies
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  {[
                    { company: "Tesla", salary: "$142,000", logo: "T", reviews: "4.2", color: "bg-red-500" },
                    { company: "Apple", salary: "$138,500", logo: "A", reviews: "4.5", color: "bg-gray-800" },
                    { company: "Google", salary: "$135,000", logo: "G", reviews: "4.4", color: "bg-blue-500" },
                    { company: "Microsoft", salary: "$128,000", logo: "M", reviews: "4.3", color: "bg-green-500" },
                    { company: "Amazon", salary: "$125,500", logo: "A", reviews: "3.9", color: "bg-orange-500" },
                  ].map((company, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 ${company.color} rounded-lg flex items-center justify-center text-white font-bold`}
                        >
                          {company.logo}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{company.company}</div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {company.reviews}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">{company.salary}</div>
                        <div className="text-sm text-gray-500">avg. base</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="w-full h-52 bg-white flex items-center justify-center">
              AD

            </div>
  
            

            

            {/* Related Jobs */}
            <div className="bg-white rounded-lg p-5">
              <div>
                <div className="text-lg font-semibold">Related Positions</div>
              </div>
              <div className="space-y-3">
                {[
                  { title: "Software Engineer", salary: "$95K" },
                  { title: "Hardware Engineer", salary: "$92K" },
                  { title: "Systems Engineer", salary: "$88K" },
                  { title: "Project Engineer", salary: "$82K" },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                  >
                    <span className="text-gray-900">{job.title}</span>
                    <span className="font-medium text-gray-600">{job.salary}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  )
}



