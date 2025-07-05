import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
        <header className='flex justify-between px-5 py-3 shadow-md '>
            <div className='flex items-center '>
                <Image src='/weilding-logo.png' height={30} width={70}/>
                <h1 className='font-bold text-2xl'>
                RadiantMetals

                </h1>
            
                

            </div>

            

        </header>
      
      
    </div>
  )
}
