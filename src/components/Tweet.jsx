import React from 'react'
import { LuDot } from "react-icons/lu";
import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
const Tweet = ({tweet}) => {
    return (

        <div className='flex items-start gap-1 border-b p-2'>
            <img src={tweet.user.profile} alt="profile_pic" className='w-12 rounded-full' />
            <div className='w-full'>
                <div className='flex items-center '>
                    <span className='text-lg'>{tweet.user.name}</span>
                    <span className='ml-1 text-gray-600'>@{tweet.user.username}</span>
                    <span className='text-gray-600'><LuDot /></span>
                    <span className='text-gray-600'>Apr 29</span>
                </div>
                <div>
                   {tweet.content}
                </div>
                <div className='flex justify-between my-2 w-full'>
                <FaRegComment className='cursor-pointer'/>
                <FaRetweet  className='cursor-pointer'/>
                <FaRegHeart  className='cursor-pointer'/>
                <FaRegBookmark className='cursor-pointer' />
            </div>
            </div>
          
        </div>


    )
}

export default Tweet





