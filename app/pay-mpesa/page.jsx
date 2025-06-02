'use client'
import React from 'react'

export default function page() {
    const [formData, setFormData] = React.useState({})



    const handleSubmit = async (e) => {
        e.preventDefault()
    await fetch('/api/stk-push',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })

    }

    const handleChange = (e) => {
        
        setFormData({...formData, [e.target.id]: e.target.value})

    }
  return (
    <div className='h-screen flex justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-2' >
            <input type="number" id='phone' onChange={handleChange} className='border-gray-500 px-4 py-2 border-[1.2px] focus:outline-none'/>
            <input type="number" id='amount' onChange={handleChange} className='border-gray-500 px-4 py-2 border-[1.2px] focus:outline-none' />
            <button className='px-4 py-2 text-white bg-black rounded-md'>pay</button>
        </form>
      
    </div>
  )
}
