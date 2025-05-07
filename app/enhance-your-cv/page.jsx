

"use client"
import { CheckCircle, FileText } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
    const [uploadError, setUploadError] = React.useState(null)
    const [file, setFile] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isUploading, setIsUploading] = React.useState(false)
    const [uploadFile,setUploadFile] = React.useState(null)
    console.log(uploadFile)
    const router = useRouter()
    const serviceFee = 500.00

    console.log(file)



    // useEffect(() => {
    //         if (file) {
    //           handleFileUpload(file);
    //         }
    //       }, [file]);
    
        //   const handleFileUpload = async (file) => {
        //     // setLoading(true);
        //     // setError(null);
        //     const formDataa = new FormData();
        //         formDataa.append("file", file);
        //         formDataa.append("upload_preset", "cloudinary_2");
        //         formDataa.append("cloud_name", "dh7gvpuz3");
        
        
                
        //     try {
        //         const response = await fetch("https://api.cloudinary.com/v1_1/dh7gvpuz3/raw/upload", {
        //           method: "POST",
        //           body: formDataa,
        //         });
          
        //         const data = await response.json();
        //         if (data.secure_url) {
                
               
        //           setUploadFile(data.secure_url)
        //           console.log("Image URL:", data.secure_url);
        //         } else {
        //           setError("Upload failed, please try again.");
        //         }
        //       } catch (err) {
        //         setError("Error uploading image.");
        //       } finally {
        //         setLoading(false);
        //       }
        
        
        
            
        //    };


        const handleFileChange = async (e) => {


            setUploadError(null)


            if (e.target.files && e.target.files[0]) {
                const selectedFile = e.target.files[0]
                const fileType = selectedFile.type
          
                // Check if file is PDF or Word document
                if (
                  fileType === "application/pdf" ||
                  fileType === "application/msword" ||
                  fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                ) {
                  setFile(selectedFile)
                } else {
                  setUploadError("Please upload a PDF or Word document (.doc, .docx, .pdf)")
                  e.target.value = ""
                }
              }
            const formData = new FormData();
            formData.append('file', e.target.files[0]);
        
            // Send the file to the upload API
            const res = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });
        
            const data = await res.json();
            console.log('File URL:', data.url);
            setUploadFile(data.url)
            // router.push(data.url)
          }
    
    // const handleFileChange = (e) => {
    //     setUploadError(null)

    // if (e.target.files && e.target.files[0]) {
    //   const selectedFile = e.target.files[0]
    //   const fileType = selectedFile.type

    //   // Check if file is PDF or Word document
    //   if (
    //     fileType === "application/pdf" ||
    //     fileType === "application/msword" ||
    //     fileType === "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    //   ) {
    //     setFile(selectedFile)
    //   } else {
    //     setUploadError("Please upload a PDF or Word document (.doc, .docx, .pdf)")
    //     e.target.value = ""
    //   }
    // }
     
    // }
    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    
    //     if (!file) {
    //       setUploadError("Please upload your CV first")
    //       return
    //     }
    
    //     setIsSubmitting(true)
    
    //     // Simulate API call for CV enhancement
    //     try {
    //       // Here you would implement your actual API call to process the CV
    //       await new Promise((resolve) => setTimeout(resolve, 2000))
    
    //       // Redirect to success page or show success state
    //       setIsSubmitting(false)
    //       router.push("/enhance-your-cv/success")
    //     } catch (error) {
    //       setIsSubmitting(false)
    //       setUploadError("Something went wrong. Please try again.")
    //     }
    //   } 


const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Form submitted")
    const res1  =await fetch('http://localhost:3000/api/cv-upload', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({url:uploadFile})
    })

    const res2  =await fetch('http://localhost:3000/api/cv-upload-client', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({url:uploadFile})
    })



    
}
 


  return (
    <div className=" py-10 px-4 sm:px-20 md:py-16">
         <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Enhance Your CV</h1>
        <p className="mt-4 text-gray-700">
          Professional CV enhancement to increase your chances of landing your dream job
        </p>
      </div>


      <div className='flex flex-col sm:flex-row gap-5'>
        <div className='sm:w-[67%] shadow-md p-5'>
            <header>
                <h1 className='text-2xl font-bold'>Upload Your CV</h1>
                <p className='text-gray-500'>We'll enhance your CV to make it stand out to employers and ATS systems</p>

            </header>
            <form className='flex flex-col gap-4 mt-5'>
               <p className='font-semibold'>Upload CV (PDF or Word)</p>
               <input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileChange}
                        className="cursor-pointer border-gray-500 p-3 border-[1.2px] rounded-md"
                />
                {uploadError && <p className="text-sm font-medium text-destructive">{uploadError}</p>}

                {file && (
                    <div className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span className='text-gray-500 w-50'>{file.name}</span>
                      <div  className="ml-2 rounded-full border-gray-500 border-[1.2px] px-2 py-1 text-xs font-semibold ">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  )}

              

                  
                 {file && (
                 <div className='p-5 border-black border-[1.2px] rounded-md'>
                    <div className='flex gap-1 items-center'>
                    <CheckCircle className="h-4 w-4" />
                    <p className='font-semibold text-lg'>Ready for enhancement</p>


                    </div>

                    <p className='mt-2'>Your CV is ready to be enhanced. Click the button below to proceed with payment and processing.</p>

                 </div>
                  )}

              <button type="submit" size="lg" className="w-full bg-black text-white rounded-md p-3" disabled={!file || isSubmitting} onClick={handleSubmit}>
              {isSubmitting ? "Processing..." : "Enhance My CV Now"}
            </button>
            <p className="text-sm text-gray-500">
              By proceeding, you agree to our terms of service and privacy policy.
            </p>



                 










            </form>
           

        </div>


        {/* right side */}

        <div className='flex flex-col sm:w-[33%] gap-5'>
            <div className='shadow-md p-5 rounded-md '>
                <header className='font-bold text-2xl'>Service Fee</header>
                <div className="flex items-baseline justify-center">
                
                  <span className="text-3xl font-bold">kshs {serviceFee.toFixed(2)}</span>
                   <span className="ml-1 text-gray-500">one-time fee</span>
                </div>
                <hr className='my-3'/>

                <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>ATS-optimized formatting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Keyword enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Professional layout design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Grammar & spelling check</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>24-hour turnaround time</span>
                </li>
              </ul>
              
            </div>


            <div className='shadow-md p-5 rounded-md'>
                <header className='font-bold text-2xl'>Why Enhance Your CV?</header>
                <p className='text-gray-500 my-4'>A professionally enhanced CV can increase your interview chances by up to 60%. Our service helps you:</p>
                <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Pass Applicant Tracking Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Stand out to hiring managers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Highlight your key achievements</span>
                </li>
              </ul>
            </div>

        </div>

      </div>

    

      
    </div>
  )
}
