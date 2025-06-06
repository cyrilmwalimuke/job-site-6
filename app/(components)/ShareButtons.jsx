// "use client"

// import { useEffect, useState } from "react"
// import {
//   Facebook,
//   Twitter,
//   Linkedin,
//   Link as LinkIcon,
//   CheckCircle,
// } from "lucide-react"

// export default function ShareJob() {
//   const [url, setUrl] = useState("")
//   const [copied, setCopied] = useState(false)

//   useEffect(() => {
//     setUrl(window.location.href)
//   }, [])

//   const copyToClipboard = async () => {
//     await navigator.clipboard.writeText(url)
//     setCopied(true)
//     setTimeout(() => setCopied(false), 2000)
//   }

//   const encodedUrl = encodeURIComponent(url)
//   const title = encodeURIComponent("Check out this job opportunity!")

//   return (
//     <div className="mt-8 border-t pt-6">
//       <h3 className="text-lg font-semibold mb-3">Share this job</h3>
//       <div className="flex gap-4 flex-wrap">
//         <a
//           href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center px-4 py-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
//         >
//           <Facebook className="h-4 w-4 mr-2" />
//           Facebook
//         </a>
//         <a
//           href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${title}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center px-4 py-2 text-sm rounded bg-sky-500 text-white hover:bg-sky-600"
//         >
//           <Twitter className="h-4 w-4 mr-2" />
//           Twitter
//         </a>
//         <a
//           href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${title}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center px-4 py-2 text-sm rounded bg-blue-800 text-white hover:bg-blue-900"
//         >
//           <Linkedin className="h-4 w-4 mr-2" />
//           LinkedIn
//         </a>
//         <button
//           onClick={copyToClipboard}
//           className="flex items-center px-4 py-2 text-sm rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
//         >
//           {copied ? (
//             <>
//               <CheckCircle className="h-4 w-4 mr-2 text-green-600" />
//               Copied!
//             </>
//           ) : (
//             <>
//               <LinkIcon className="h-4 w-4 mr-2" />
//               Copy Link
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   )
// }


// components/ShareButtons.tsx
'use client'

import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


function useDeviceType() {
  const [deviceType, setDeviceType] = useState("unknown");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
    setDeviceType(isMobile ? "mobile" : "desktop");
  }, []);

  return deviceType;
}


export default function ShareButtons({ title }) {
  const pathname = usePathname()
  const [shareUrl, setShareUrl] = useState('')
  const device = useDeviceType();




  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin + pathname)
    }
  }, [pathname])

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)
  const whatsappText = encodeURIComponent(`${title} - ${shareUrl}`)

  return (
    <div className="flex space-x-4 mt-4 items-center">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
      >
        <FaTwitter size={24} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FaFacebook size={24} />
      </a>

      <a
        href={`https://api.whatsapp.com/send?text=${whatsappText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700"
      >
        <FaWhatsapp size={24} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
      >
        <FaLinkedin size={24} />
      </a>
      <div>You are using a {device} device.</div>
      
    </div>
  )
}
