import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, User } from "lucide-react"

// Sample blog data with all the requested fields
const blogPosts = [
  {
    id: "1",
    title: "How to Create an Effective Resume for Tech Jobs",
    excerpt: "Learn the key elements that make a tech resume stand out to recruiters and hiring managers.",
    content: `
      <p>Creating a resume that stands out in the tech industry requires a strategic approach. Here are some key tips to help you craft an effective tech resume:</p>
      
      <h2>Focus on Relevant Skills</h2>
      <p>Highlight technical skills that are directly relevant to the position you're applying for. Include programming languages, frameworks, tools, and methodologies you're proficient in.</p>
      
      <h2>Quantify Your Achievements</h2>
      <p>Instead of just listing responsibilities, showcase your impact with metrics. For example, "Reduced page load time by 40% by optimizing database queries" is more impactful than "Responsible for database optimization."</p>
      
      <h2>Tailor Your Resume for Each Application</h2>
      <p>Customize your resume for each job application by emphasizing the skills and experiences most relevant to that specific role. Review the job description carefully and align your resume accordingly.</p>
      
      <h2>Include a Strong Summary</h2>
      <p>Begin with a concise professional summary that highlights your years of experience, key technical skills, and notable achievements. This gives recruiters a quick overview of your qualifications.</p>
      
      <h2>Showcase Projects</h2>
      <p>Include a section dedicated to significant projects you've worked on. Describe the technologies used, your role, and the outcomes achieved. If possible, include links to GitHub repositories or live demos.</p>
    `,
    author: "Jane Smith",
    authorRole: "Senior Recruiter",
    readTime: "5 min",
    category: "Resume Tips",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
  },
  {
    id: "2",
    title: "Navigating Remote Work Opportunities in 2025",
    excerpt: "Discover strategies for finding and securing remote positions in today's competitive job market.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Michael Johnson",
    authorRole: "Career Coach",
    readTime: "7 min",
    category: "Remote Work",
    image: "/placeholder.svg?height=600&width=1200",
    featured: true,
  },
  // Other blog posts would be here
]

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.id === params.id)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link href="/blog" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-primary hover:underline flex items-center gap-2 mb-6">
          <ArrowLeft size={16} />
          Back to all posts
        </Link>

        <Badge variant="outline" className="mb-4">
          {post.category}
        </Badge>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <User size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">
              {post.author}, <span className="italic">{post.authorRole}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-muted-foreground" />
            <span className="text-muted-foreground">{post.readTime}</span>
          </div>
        </div>

        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-8 border-t">
          <h3 className="text-xl font-bold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=64&width=64" alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h4 className="font-bold">{post.author}</h4>
              <p className="text-muted-foreground">{post.authorRole}</p>
              <p className="mt-2 text-sm">
                Expert in career development with over 10 years of experience helping professionals advance their
                careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
