import React from 'react'
import { FiUserPlus } from 'react-icons/fi'
import { GiReceiveMoney } from 'react-icons/gi'
import { GoBriefcase } from 'react-icons/go'
import { HiMiniArrowRightEndOnRectangle } from 'react-icons/hi2'
import { IoIosClose } from 'react-icons/io'
import { LiaIndustrySolid } from 'react-icons/lia'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { PiGraduationCapThin } from 'react-icons/pi'
import { MdSelfImprovement } from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { GiNewspaper } from "react-icons/gi";


import Link from 'next/link'
// fixed inset-0 h-full  bg-white shadow-lg z-50 transition-transform duration-300


export default function SideBar({SideBar,setSideBar}) {
  return (
    <div className='fixed inset-0 h-full  bg-white shadow-lg z-50 transition-transform duration-300 sm:hidden'>
        <div className='  h-screen w-full p-5  flex flex-col'>
            <div className='flex justify-between items-center '>
                <div className='flex gap-2'>
                    <MdOutlineWorkOutline size={40}/>
                    <p className='font-bold text-4xl'>FleekJobs</p>
                </div>
                <IoIosClose size={40} onClick={()=>setSideBar(false)}/>

            </div>

            <div className='flex flex-col gap-12 my-7 ' onClick={()=>setSideBar(false)}>
                <div className='flex gap-1 items-center font-semibold text-2xl'>
                <GoBriefcase size={30} />
                <Link href='/search'>Find Jobs</Link>
             

                </div>

                <div className='flex gap-1 items-center font-semibold text-2xl ' >
                <MdSelfImprovement size={30} />
                <Link href='/enhance-cv'>Enhance CV</Link>



                </div>


                <div className='flex gap-1 items-center font-semibold text-2xl'>
                <GiOfficeChair size={30}/>
                <Link href='/interview-tips'>Interview Tips</Link>
            



                </div>
    
                <div className='flex gap-1 items-center font-semibold text-2xl'>
                <GiReceiveMoney size={30}/>
                <p>Salary Guide</p>



                </div>
                <div className='flex gap-1 items-center font-semibold text-2xl'>
                <GiNewspaper size={30}/>
                <Link href='/articles'>Articles</Link>



                </div>
               



                





            </div>

{/* buttons */}
            <div className='flex flex-col gap-3' onClick={()=>setSideBar(false)}>
                <button onCliclk={()=>setSideBar(false)}>
                <Link href='/login' className =" border-gray-500 border-[1.2px] rounded-md flex items-center gap-2 w-full justify-center p-4">
                <HiMiniArrowRightEndOnRectangle />
                <p>Login</p>

                </Link>

                </button>

                <button onCliclk={()=>setSideBar(false)}>
                <Link href='/register' className =" bg-black text-white rounded-md flex items-center gap-2 w-full justify-center p-4">
                <FiUserPlus />

                <p>Register</p>

                </Link>

                </button>
               
              



            </div>

            <p className='text-center text-gray-500 mt-36'> © {new Date().getFullYear()} FleekJobs. All rights reserved.</p>
            
        </div>

   
      
    </div>
  )
}
