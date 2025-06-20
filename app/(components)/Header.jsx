"use client"
import React, { useEffect, useState } from 'react'
import { CiBookmark, CiMenuBurger, CiSearch } from 'react-icons/ci'
import { FiUser } from 'react-icons/fi'
import { IoChevronDown } from 'react-icons/io5'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { SlBriefcase } from 'react-icons/sl'
import Link from 'next/link'
import SideBar from './SideBar'
import { ChevronDown, ChevronUp, Sidebar } from 'lucide-react'
import { useUser,UserButton } from "@clerk/nextjs";

import { motion } from 'framer-motion'

import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'


const navItems = [
    { name: "Find Jobs", link: "/search" },
    // { name: "Enhance CV", link: "/enhance-your-cv" },
    { name: "Interview Tips", link: "/blog/2025-interview-tips-that-actually-work" },
    { name: "Salary Guide", link: "/blog/salary-guide-2025-know-your-worth-before-you-negotiate"},
   
    { name: "Career Guide", link: "/career-guide" },


  ];

  
  export function useQuery() {
      const searchParams = useSearchParams();
      return searchParams;
    }
  

export default function Header() {

    const { isLoaded, isSignedIn, user } = useUser();
    const [hoveredItem, setHoveredItem] = useState(null);
    const [sideBar, setSideBar] = useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    const router = useRouter()
    let queryParams  = useQuery().get("query")
    const searchParams = useSearchParams();
    

    // const navigate = useNavigate()
 

    const handleSearchSubmit = async (e) => {
      e.preventDefault();
    
      const params = new URLSearchParams({
        page: '1',
        type: '',
        limit: '6',
        salaryRange: '',
        searchTerm,
        experienceLevel: '', // Must be a string
        sort: 'createdAt',
        order: 'desc',
        jobLocation: '',
        industry: '',
      });
    
      router.push(`/search?${params.toString()}`);

      if (!searchTerm.trim()) return;

    await fetch('/api/search-term', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ term: searchTerm,link:`/search?page=1&type=&limit=6&salaryRange=&searchTerm=${searchTerm}&experienceLevel=&sort=createdAt&order=desc&jobLocation=&industry=` }),
    });

    console.log(`Searching for: ${searchTerm}`);
    };
    

     useEffect(() => {
        const param = searchParams.get('searchTerm')
        if (param !== null && param !== searchTerm) {
          setSearchTerm(param)
        }
      }, [searchParams])
  
  return (
    <>

    <div className='flex justify-between px-5 py-3 bg-background/80 backdrop-blur-md shadow-sm sticky  top-0 z-30 ites-center'>
          <CiMenuBurger className='sm:hidden' size={30} onClick={()=>setSideBar(true)}/>
          <Link href='/'> <Image src='/site-logo.png' width={100}height={50} alt='logo'/></Link>
          <div className='hidden md:flex gap-1'>
          {navItems.map((item, index) => (
              <Link key={index} href={item.link} className='p-2 text-sm hover:bg-gray-200 rounded-md font-semibold'>
                  {item.name}
            </Link>
          ))}

          </div>

          <div className='flex gap-5'>
                <form onSubmit = {handleSearchSubmit} className='rounded-full border-gray-500 border-[1.2px]  items-center p-2 gap-2 hidden sm:flex'>
                  <button className='cursor-pointer'>
                      <CiSearch/>
                  </button>
                  <input type="text" placeholder='Search Jobs...' className='focus:outline-none' value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} />

              </form>

              <div className='flex gap-2 items-center'>
                  <Link href='/search' className='sm:hidden'><CiSearch size={30} /></Link>
                  {user?
                  (
                  <div className='flex items-center gap-3'>
                    <Link href='/saved' className='text-2xl'><CiBookmark size={26}/></Link>
                    <UserButton afterSignOutUrl="/" />


                  </div>
                  )
                  :
                  (
                    <Link className='bg-black text-white text-sm rounded-lg p-2' href='/login'>Login</Link>

                  )
                  }
                

              </div>




          </div>

       

    </div>
 
           
         

          <div>
          {
            sideBar && <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
        }
        
          </div>
          
    
    </>
    
  )

}
