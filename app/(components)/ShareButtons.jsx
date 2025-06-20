
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
 let whatsappSubdomain;
 if(device=== 'mobile') {
   whatsappSubdomain = 'api';
  } else {
   whatsappSubdomain = 'web';
  }




  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.origin + pathname)
    }
  }, [pathname])

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)
  const whatsappText = encodeURIComponent(`${title} - ${shareUrl}`)

  return (
    <div className="flex space-x-4 items-center">
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
      {/* <div>You are using a {device} device.</div> */}
      
    </div>
  )
}
