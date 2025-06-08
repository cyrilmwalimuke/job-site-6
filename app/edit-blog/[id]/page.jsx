'use client';
import { useEffect, useState,useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { Upload, Save, Eye, X } from "lucide-react"
import { IoIosClose } from "react-icons/io"

const categories = [
  "All",
  "Career Advice",
  "Interview Prep",
  "Resume Writing",
  "Salary Guides",
  "Industry Insights",
  "Remote Work",
  "Professional Development",
  "Job Search",
  "Networking"

]


export default function EditBlogPage() {

const [loading, setLoading] = useState(false);
const { id} = useParams();
const router = useRouter();

 
const [isSubmitting, setIsSubmitting] = useState(false)

const [file, setFile] = useState(null)
const [preview,setPreview] = useState(false)
const fileRef = useRef(null);
const [blog, setBlog] = useState({
    
    title: "",
    excerpt: "",
    content: "",
    author: "",
    slug: "",
   category: "",
    image: "",
    featured: false,
})


const handleInputChange = (field, value) => {
  setBlog((prev) => ({
    ...prev,
    [field]: value,
  }));
};


   


  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`/api/get-edit-blog/${id}`);
      if (res.ok) {
        const data = await res.json();
        setBlog(
          { 
            title: data.title, 
            content: data.content,
            
            excerpt: data.title,
           
            author: data.author,
            slug: data.slug,
            category: data.category,
            image: data.image,
            featured: data.featured || false,
       

        });
      } else {
        alert("Blog not found.");
      }
      setLoading(false);
    };
    fetchBlog();
  }, [id]);


  const handleSubmit = async (e) => {
    e.preventDefault();



    try {
      setIsSubmitting(true)
 
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const res = await fetch(`/api/edit-blog/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });

    if (res.ok) {
      alert("Blog updated!");
      router.push("/");
    } else {
      alert("Update failed");
    }

 
  } catch (error) {
      console.log(error)
    
  } finally {
    setIsSubmitting(false)
  }


    
  };

  useEffect(() => {
            if (file) {
              handleFileUpload(file);
            }
          }, [file]);
    
          const handleFileUpload = async (file) => {
         
            const formDataa = new FormData();
                formDataa.append("file", file);
                formDataa.append("upload_preset", "cloudinary_2");
                formDataa.append("cloud_name", "dh7gvpuz3");
        
        
                
            try {
                const response = await fetch("https://api.cloudinary.com/v1_1/dh7gvpuz3/image/upload", {
                  method: "POST",
                  body: formDataa,
                });
          
                const data = await response.json();
                if (data.secure_url) {
                
                  setBlog({ ...blog, image: data.secure_url })
                  console.log("Image URL:", data.secure_url);
                } else {
                  setError("Upload failed, please try again.");
                }
              } catch (err) {
                setError("Error uploading image.");
              }
            
        
        
        
            
           };
  



  if (loading) return <p>Loading...</p>;

  return (
   

    <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create New Blog Post</h1>
            <p className="text-gray-500">
              Fill in the details below to create a new blog post for your jobs website.
            </p>
          </div>
    
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6 ">
                <div className="shadow-md rounded-md p-6 bg-white border-gray-100 border-[1px]">
                  <div>
                    <div className="text-2xl font-bold">Basic Information</div>
                    <div className="text-gray-500">Enter the basic details for your blog post</div>
                  </div>
                  <div className="space-y-4">
    
                  <div className="space-y-2">
                      <label htmlFor="title" className="font-semibold">Title *</label>
                      <input
                        id="title"
                        placeholder="Enter blog post title"
                        value={blog.title}
                        onChange={(e) => handleInputChange("title", e.target.value)}
                        required
                         className="border-gray-500 border-[1.2px] rounded-md p-2 w-full"
                      />
                    </div>
                   
    
                    <div className="space-y-2">
                      <label htmlFor="title" className="font-semibold">Slug *</label>
                      <input
                        id="slug"
                        placeholder="Enter blog post slug"
                        value={blog.slug}
                        onChange={(e) => handleInputChange("slug", e.target.value)}
                        required
                         className="border-gray-500 border-[1.2px] rounded-md p-2 w-full"
                      />
                    </div>
    
                    <div className="space-y-2">
                      <label htmlFor="excerpt" className="font-semibold">Excerpt *</label>
                      <textarea
                        id="excerpt"
                        placeholder="Write a brief summary of your blog post"
                        value={blog.excerpt}
                        onChange={(e) => handleInputChange("excerpt", e.target.value)}
                        rows={3}
                        required
                         className="border-gray-500 border-[1.2px] rounded-md p-2 w-full"
                      />
                    </div>
                  </div>
                </div>
    
                <div className="shadow-md rounded-md p-6 bg-white border-gray-100 border-[1px]">
                  <div>
                    <div className="font-bold text-2xl">Content</div>
                    <div className="text-gray-500">Write the main content of your blog post</div>
                  </div>
                  <div>
                    <div className="space-y-2">
                      <label htmlFor="content" className="font-semibold">Blog Content *</label>
                      <textarea
                        id="content"
                        placeholder="Write your blog post content here. You can use HTML tags for formatting."
                        value={blog.content}
                        onChange={(e) => handleInputChange("content", e.target.value)}
                        rows={15}
                        className="min-h-[400px] border-gray-500 border-[1.2px] rounded-md p-2 w-full "
                        required
                      />
                      <p className="text-sm text-gray-500">
                        Tip: You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;strong&gt;, etc. for formatting.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Sidebar */}
              <div className="space-y-6">
                <div className="shadow-md rounded-md p-6 bg-white border-gray-100 border-[1px]">
                  <div>
                    <div className="text-2xl font-bold">Author Information</div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="author" className="font-semibold">Author Name *</label>
                      <input
                        id="author"
                        placeholder="Enter author name"
                        value={blog.author}
                        onChange={(e) => handleInputChange("author", e.target.value)}
                        required
                         className="border-gray-500 border-[1.2px] rounded-md p-2 w-full"
    
                      />
                    </div>
    
                    
                  </div>
                </div>
    
                <div className="shadow-md rounded-md p-6 bg-white border-gray-100 border-[1px]">
                  <div>
                    <div className="font-bold text-2xl">Category & Settings</div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="category" className="font-semibold">Category *</label>
                      <select
      value={blog.category}
      onChange={(e) => handleInputChange("category", e.target.value)}
      required
       className="border-gray-500 border-[1.2px] rounded-md p-2 w-full"
    >
      <option value="" disabled>Select a category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    
                    </div>
    
                    <div className="flex items-center space-x-2">
                      <input type='checkbox'
                        id="featured"
                        checked={blog.featured}
                       
                        onChange={(e) => handleInputChange("featured", e.target.checked)}
                      />
                      <label htmlFor="featured">Featured Post</label>
                    </div>
    
    
                    
    
    
    
                    
                  </div>
                </div>
    
                <div className="shadow-md rounded-md p-6 bg-white border-gray-100 border-[1px]">
                  <div>
                    <div>Featured Image</div>
                  </div>
                 
    
    <div className='mt-5 border-2 border-gray-300 rounded-md p-2 border-dotted'>
               
                <input className = 'border-2 border-gray-300 rounded-md p-2 mt-2 w-full text-xs'
              onChange={(e) => setFile(e.target.files[0])}
              type='file'
              ref={fileRef}
        
              accept='image/*'
            />
            <img
              ref={fileRef}
    
             
              src={blog.image}
              alt='blog-image'
              className='h-24 w-24  mt-2'
            />
    
                </div>
    
    
                {preview && ( <div className="bg-black fixed  inset-0 z-50  ">
                    <div className="p-5">
                        <div className="mt-5 w-full flex"><IoIosClose size={30} onClick={()=>setPreview(false)} className="ml-auto text-white"/></div>
                        <img src={blog.image} alt="" className="h-50 w-50"/>
    
    
                    
                        
                        </div>
    
                
    
                </div>)}
    
    
               
    
  
                </div>
    
                <div className="space-y-3">
                
    
                  <button type="button" variant="outline" className="w-full rounded-md flex justify-center items-center py-3 border-[1.2px]" onClick={()=>setPreview(true)}>
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </button>
    
                  <button type="submit" className="w-full bg-black text-white rounded-md flex justify-center items-center py-3 cursor-pointer" disabled={isSubmitting}>
                    <Save className="mr-2 h-4 w-4" />
                    {isSubmitting ? "Editting..." : "Edit Blog Post"}
                  </button>
                </div>
              </div>
            </div>
    
          
    
          
          </form>
        </div>



  );
}
