import React, { useEffect, useState } from 'react'
import Left from '../components/Left'
import Center from '../components/Center'
import Right from '../components/Right'
import { useDispatch, useSelector} from 'react-redux'
import { Navigate } from 'react-router-dom'
import { setUser } from '../app/slices/authSlice'
import { getUserFromServer } from '../helpers/getUserFromServer'
import Loading from './Loading'

const Home = () => {
  
  const dispatch = useDispatch()
  const user = useSelector(state=>state.auth.user)
  const [pageLoading,setPageLoading] = useState(true)
  
  useEffect(()=>{
   
      getUserFromServer().then((data)=>{
        if(data.success){
          dispatch(setUser(data.user))
        
        }
      }).catch((error)=>{
        console.log(error.message)
      }).finally(()=>{
        setPageLoading(false)
      })
    
  },[])


  if(pageLoading){
    return <Loading/>
  }
  if(!user){
    return <Navigate to={"/login"}/>
  }
  return (
   <section>
    <div className="home  flex justify-center">
      <Left/>
      <Center/>
      <Right/>
    </div>
   </section>
  )
}

export default Home
