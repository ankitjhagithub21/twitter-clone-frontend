import React from 'react'
import { GoHomeFill, GoSearch } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiLogout, CiMail, CiUser, CiCircleMore } from "react-icons/ci";
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
const Left = () => {
  const navigate = useNavigate()
  const handleLogout = async() =>{
    try{
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/logout`,{
        credentials:'include'
      })

      const data = await res.json()
      if(data.success){
        toast.success(data.message)
        navigate("/login")
      }else{
        toast.error("Something went wrong.")
      }

    }catch(error){
      console.log(error)
    }
  }

  const links = [
    {
      name: "Home",
      icon: <GoHomeFill />,
      path: "/"
    },
    {
      name: "Explore",
      icon: <GoSearch />,
      path: "/"
    },
    {
      name: "Notifications",
      icon: <IoIosNotificationsOutline />,
      path: "/"
    },
    {
      name: "Messages",
      icon: <CiMail />
    },
    {
      name: "Profile",
      icon: <CiUser />
    },
    {
      name: "More",
      icon: <CiCircleMore />
    }


  ]
  return (
    <div className='left-div py-5 px-2 flex flex-col justify-start  gap-5 md:items-start items-center'>
      <div>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
      </div>
      <div className='flex flex-col gap-1 '>
        {
          links.map((link, index) => {
            return <div key={index} className='cursor-pointer  hover:bg-gray-200  md:pl-2 md:pr-5 p-2 md:py-3 flex items-center gap-2 rounded-full'>
              <span className='text-3xl'> {link.icon}</span>
              <span className='link text-xl'>{link.name}</span></div>
          })
        }
        <div className='cursor-pointer  hover:bg-gray-200  md:pl-2 md:pr-5 p-2 md:py-3 flex items-center gap-2 rounded-full'>
          <span className='text-3xl' onClick={handleLogout}>
            <CiLogout />
          </span>
          <span className='link text-xl'>Logout</span></div>
      </div>


      <div className='flex gap-2 items-center'>
        <img src="https://ankitjha.vercel.app/profile.png" alt="profile_pic" className='rounded-full w-12 border' />
        <div className='flex flex-col link'>
          <span className='font-semibold'>Ankit Jha</span>
          <span className='text-gray-600 text-sm'>@its.ankitjha</span>
        </div>
      </div>
    </div>
  )
}

export default Left
