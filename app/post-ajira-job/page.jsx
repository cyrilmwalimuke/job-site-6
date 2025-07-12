"use client"

import { HiOutlineBuildingOffice } from 'react-icons/hi2';
import { LuBriefcase } from "react-icons/lu";
import { TbWorldWww } from "react-icons/tb";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { redirect, useRouter } from "next/navigation";

import { useUser } from "@clerk/nextjs"
import { Router } from 'lucide-react';

const jobFields = [
    "Software Development",
    "Data Science",
    "Product Management",
    "Marketing",
    "Sales",
    "Design",
    "Customer Support",
    "Human Resources",
    "Finance",
    "Operations",
  ];
  const defaultLogo = "https://cdn-icons-png.flaticon.com/512/1230/1230247.png"


export default function page() {

    const [file, setFile] = useState(null);
    const fileRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const router = useRouter();


    useEffect(() => {
        if (file) {
          handleFileUpload(file);
        }
      }, [file]);

      const handleFileUpload = async (file) => {
        // setLoading(true);
        // setError(null);
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
            
              setFormData({ ...formData, employer_logo: data.secure_url })
              console.log("Image URL:", data.secure_url);
            } else {
              setError("Upload failed, please try again.");
            }
          } catch (err) {
            setError("Error uploading image.");
          } finally {
            setLoading(false);
          }
    
    
    
        
       };
    
   
    const [formData, setFormData] = React.useState({
        title: "",
        employer_name: "",
        location: "",
        description: "",
        salary:null,
        type: "",
        experience: "",
        responsibilities: "",
        education_qualification_experience_skills_traits: "",
        fields:[],
        applicationMethod:'url',
        applicationValue:"",
        companyWebsite:"",
        employer_logo:""


    })

    const handleFieldChange = (field) => {
        if (formData.fields.includes(field)) {
          // Remove the field
          setFormData({
            ...formData,
            fields: formData.fields.filter((item) => item !== field),
          });
        } else {
          // Add the field
          setFormData({
            ...formData,
            fields: [...formData.fields, field],
          });
        }
      };
      
      

      

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value })
        
    }
    const handleSubmit = async (e) => {
    
        e.preventDefault()
        setSubmitting(true)
        console.log("Form submitted")
        const res  =await fetch('/api/save-job', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        const data = await res.json()
        console.log(data)
        setSubmitting(false)
        router.refresh()
    }
    console.log(formData)
  return (
    <div className='px-5 sm:px-40 py-10'>
        <header className='flex flex-col mb-7 '>
            <h1 className='font-bold text-3xl'>Post a Job</h1>
            <p className='text-gray-500'>Fill out the form below to post a new job listing on our platform.</p>

        </header>

        <form onSubmit={handleSubmit} className='shadow-md p-5 rounded-lg'>
            <header>
                <h1 className='text-2xl font-bold'>Job Details</h1>
                <p className='text-gray-500 text-sm'>Provide the details about the position you're hiring for.</p>
            </header>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                <div>
                    <label htmlFor="" className='font-semibold'>Job Title*</label>
                    <div className='flex items-center border border-gray-300 rounded-md p-2 mt-2 gap-5'>
                    <LuBriefcase className='text-gray-500'/>
                        <input id='title'value={formData.title} onChange={handleChange} type="text" className='focus:outline-none w-full' placeholder='eg Senior Frontend Developer'/>
                    </div>


                </div>


                <div>
                    <label htmlFor="" className='font-semibold'>Deadline</label>
                    <div className='flex items-center border border-gray-300 rounded-md p-2 mt-2 gap-5'>
                    <LuBriefcase className='text-gray-500'/>
                        <input id='deadline'value={formData.deadline} onChange={handleChange} type="text" className='focus:outline-none w-full' placeholder='eg Friday 5th july 2025'/>
                    </div>


                </div>
                <div>
                    <label htmlFor="" className='font-semibold'>Slug</label>
                    <div className='flex items-center border border-gray-300 rounded-md p-2 mt-2 gap-5'>
                    <LuBriefcase className='text-gray-500'/>
                        <input id='slug'value={formData.slug} onChange={handleChange} type="text" className='focus:outline-none w-full' placeholder='eg Senior Frontend Developer'/>
                    </div>


                </div>

                <div>
                    <label htmlFor="" className='font-semibold'>Company Name*</label>
                    <div className='flex items-center border border-gray-300 rounded-md p-2 mt-2 gap-5'>
                    <HiOutlineBuildingOffice className='text-gray-500'/>
                        <input type="text" id="employer_name" onChange={handleChange} value={formData.employer_name}  className='focus:outline-none w-full' placeholder='eg Kenya Power'/>
                    </div>


                </div>

             

                <div>
                    <label htmlFor="" className='font-semibold'>Salary*</label>
                    <div className='flex items-center border border-gray-300 rounded-md p-2 mt-2 gap-5'>
                    <LuBriefcase className='text-gray-500'/>
                        <input id='salary' value={formData.salary} type="number" className='focus:outline-none w-full' placeholder='eg 30000' onChange={handleChange}/>
                    </div>


                </div>

                <div className='flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Employment Type*</label>
                   

                    <select id="type" value={formData.type} onChange={handleChange} className='p-3 border-gray-300 border-[1.2px] rounded-md'>
                            <option value="">Select job type</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="internship">Internship</option>
                            <option value="contract">Contract</option>
                    </select>


                </div>

                <div className='flex flex-col'>
                    <label htmlFor="" className='font-semibold'>Experience Level*</label>
                   

                    <select id="experience" value={formData.experience} onChange={handleChange} className='p-3 border-gray-300 border-[1.2px] rounded-md'>
                            <option value="">Select experience level</option>
                            <option value="Entry Level">Entry Level</option>
                            <option value="Mid Level">Mid Level</option>
                            <option value="Senior Level">Senior Level</option>
                            <option value="Director">Director</option>
                            <option value="Executive">Executive</option>
                    </select>


                </div>

                <div className='flex flex-col'>
  <label htmlFor="location" className='font-semibold'>Location*</label>

  <select
    id="location"
    name="location"
    value={formData.location}
    onChange={handleChange}
    className='p-3 border-gray-300 border-[1.2px] rounded-md'
  >
    <option value="">Select county</option>
    {[
      "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo-Marakwet", "Embu", "Garissa",
      "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi",
      "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos",
      "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi",
      "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya",
      "Taita-Taveta", "Tana River", "Tharaka-Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu",
      "Vihiga", "Wajir", "West Pokot"
    ].map(county => (
      <option key={county} value={county}>{county}</option>
    ))}
  </select>
</div>

               


            </div>

          

                <div className='mt-5'>
                <h4 className="text-lg font-semibold mb-3">Job Field</h4>
                <div className='flex gap-5 items-center flex-wrap'>
                {jobFields.map(level => (
              <div key={level} className="flex items-center mb-2">
                <input type="checkbox" id={level} className="mr-2" checked={formData.fields.includes(level)} onChange={() => handleFieldChange(level)} />
                <label htmlFor={level} className="text-sm text-gray-600">{level}</label>
              </div>
            ))}


                </div>

                </div>


            <div className='flex flex-col gap-7 mt-5'>
                <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>Job Description*</label>
                <textarea type='text' value={formData.description} id="description" onChange={handleChange} cols="30" rows="5" className='border border-gray-300 rounded-md p-2 focus:outline-none' placeholder='Describe the job summary'></textarea>

                </div>
                

                <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>Responsibilities*</label>
                <textarea type='text' value={formData.responsibilities} id="responsibilities" onChange={handleChange} cols="30" rows="5" className='border border-gray-300 rounded-md p-2 focus:outline-none' placeholder='Describe the roles,responsibilities,and what the candidate will be doing'></textarea>

                </div>

                <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>Education qualification experience skills and traits*</label>
                <textarea
                    value={formData.education_qualification_experience_skills_traits}
                    id="education_qualification_experience_skills_traits"
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                    placeholder="List the skills, experience, qualifications required for this position"
                  />

         

                </div>


                <div className='flex flex-col'>
                <label htmlFor="" className='font-semibold'>How to Apply</label>
                <textarea
                    value={formData.applicationInstructions}
                    id="applicationInstructions"
                    onChange={handleChange}
                    cols="30"
                    rows="5"
                    className="border border-gray-300 rounded-md p-2 focus:outline-none"
                    placeholder="Application instructions (include link or email)"
                  />

         

                </div>



                
    




            </div>

            <hr className='my-8 text-gray-500'/>

        


<div className="mb-4">
  <label className="font-semibold block mb-2">Application Method</label>
  <div className="flex gap-4">
    <label className="flex items-center">
      <input
        type="radio"
        name="applicationMethod"
        value="url"
        checked={formData.applicationMethod === "url"}
        onChange={(e) =>
          setFormData({
            ...formData,
            applicationMethod: e.target.value,
            applicationValue: "" // clear field on switch
          })
        }
        className="mr-2"
      />
      URL
    </label>
    <label className="flex items-center">
      <input
        type="radio"
        name="applicationMethod"
        value="email"
        checked={formData.applicationMethod === "email"}
        onChange={(e) =>
          setFormData({
            ...formData,
            applicationMethod: e.target.value,
            applicationValue: ""
          })
        }
        className="mr-2"
      />
      Email
    </label>
  </div>
<div className="mb-4">
  <label className="block font-medium mb-1">
    {formData.applicationMethod === "url" ? "Application URL" : "Application Email"}
  </label>
  <input
    type={formData.applicationMethod === "url" ? "url" : "email"}
    value={formData.applicationValue}
    onChange={(e) =>
      setFormData({ ...formData, applicationValue: e.target.value })
    }
    className="w-full border border-gray-300 p-2 rounded-md"
    placeholder={
      formData.applicationMethod === "url"
        ? "https://company.com/apply"
        : "example@email.com"
    }
  />
</div>

</div>

            <hr className='my-8 text-gray-500'/>
            <div>
                <h2 className='tex-lg font-semibold mb-2'>Company Information</h2>
                <p className='text-sm'>company website</p>
              

                    <div className='flex items-center border border-gray-300 rounded-md p-2 mt-2  gap-1'>
                    <TbWorldWww className='text-gray-500'/>
                        <input type="text" id='companyWebsite' onChange={handleChange}  value={formData.companyWebsite} className='focus:outline-none w-full' placeholder='https://...'/>
                    </div>
                


                
              
            </div>
            <div className='mt-5'>
            <h2 className='tex-lg font-semibold mb-2'>Company logo</h2>
            <input className = 'border-2 border-gray-300 rounded-md p-2 mt-2 w-64'
          onChange={(e) => setFile(e.target.files[0])}
          type='file'
          ref={fileRef}
    
          accept='image/*'
        />
        <img
         
          src={formData.employer_logo}
          alt='profile'
          className='h-24 w-24  mt-2'
        />

            </div>

            

            <hr className='my-8 text-gray-500'/>

      
                     

                 

           <div className='flex mt-10 justify-between items-center'>
            <Link href='/' className='py-3 px-6 border-[1.2px] border-gray-300 rounded-md text-sm font-semibold  hover:bg-gray-100'>
                Cancel

            </Link>
            {submitting ? (  <button className='py-3 px-6 text-white bg-black rounded-md text-sm font-semibold  hover:bg-gray-800'>
                submitting...

            </button>):(  <button className='py-3 px-6 text-white bg-black rounded-md text-sm font-semibold  hover:bg-gray-800'>
                Post Job

            </button>)}
          


           </div>





        </form>

      
    </div>
  )
}
