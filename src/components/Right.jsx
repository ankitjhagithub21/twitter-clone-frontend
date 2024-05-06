import React from 'react'
import { GoSearch } from "react-icons/go"
const Right = () => {
  return (
    <div className='right-div p-2'>
      <div className='flex py-2 pl-4  text-lg rounded-full  items-center gap-3 bg-gray-200 mx-auto'>
        <GoSearch size={22} />
        <input type="text" placeholder='Search' className='bg-transparent w-full pr-2 ' />
      </div>
      <div className='border p-3 mt-5 rounded-lg'>
        <h1 className='text-2xl font-bold'>Subscribe to Premium</h1>
        <p className='text-gray-700 mt-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className='bg-black text-white text-md px-6 py-2 rounded-full mt-2 font-bold'>Subscribe</button>
      </div>
      <div className='border p-3 mt-5 rounded-lg'>
        <h1 className='text-2xl font-bold'>Who to follow</h1>
        <div className='flex items-center justify-between gap-2 flex-wrap mt-3'>
          <div className='flex gap-1 items-start justify-center'>
            <img src="https://ankitjha.vercel.app/profile.png" alt="profile_pic" className='w-12 rounded-full' />
            <div className='flex flex-col'>
              <span className='font-bold text-lg'>Ankit Jha</span>
              <span className='text-gray-700'>@ankit Jha</span>
            </div>
          </div>
          <button className='px-4 py-1 bg-black text-white text-md rounded-full'>Follow</button>
        </div>
        <div className='flex items-center justify-between gap-2 flex-wrap mt-3'>
          <div className='flex gap-1 items-start justify-center'>
            <img src="https://ankitjha.vercel.app/profile.png" alt="profile_pic" className='w-12 rounded-full' />
            <div className='flex flex-col'>
              <span className='font-bold text-lg'>Ankit Jha</span>
              <span className='text-gray-700'>@ankit Jha</span>
            </div>
          </div>
          <button className='px-4 py-1 bg-black text-white text-md rounded-full'>Follow</button>
        </div>
        <div className='flex items-center justify-between gap-2 flex-wrap mt-3'>
          <div className='flex gap-1 items-start justify-center'>
            <img src="https://ankitjha.vercel.app/profile.png" alt="profile_pic" className='w-12 rounded-full' />
            <div className='flex flex-col'>
              <span className='font-bold text-lg'>Ankit Jha</span>
              <span className='text-gray-700'>@ankit Jha</span>
            </div>
          </div>
          <button className='px-4 py-1 bg-black text-white text-md rounded-full'>Follow</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Right
