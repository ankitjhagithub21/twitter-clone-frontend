import React, { useEffect, useState } from 'react'
import CreatePost from './CreatePost'
import CenterNav from './CenterNav'
import Tweet from './Tweet'
import { getAllTweetFromServer } from '../helpers/getAllTweetFromServer'
import Loader from './Loader'


const Center = () => {
 
  const [tweets,setTweets] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(()=>{

    getAllTweetFromServer().then((data)=>{
      setTweets(data.tweets)
    }).catch((error)=>{
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })
  },[])
  return ( 
    <div className='center-div border'>
      <CenterNav/>
      <CreatePost/>
    
      <div>
       {
        loading ? <div className='py-10 text-center'>
          <Loader/>
        </div> : <>
        {
          tweets.map((tweet)=>{
            return <Tweet key={tweet._id} tweet={tweet}/>
          })
        }
        </>
       }
      </div>
    </div>
  )
}

export default Center
