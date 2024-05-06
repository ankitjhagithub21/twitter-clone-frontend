import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
     
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading,setLoading] = useState(false)

    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault()
       

        try{
            setLoading(true)
            const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                credentials:'include',
                body:JSON.stringify({
                    username,
                    password
                })
            })
            const data = await res.json()

            if(data.success){
                toast.success(data.message)
                setUsername('')
                setPassword('')
                navigate('/')
                

            }else{
                toast.error(data.message)
            }

        }catch(error){
            console.log(error)
            toast.error("Something Went Wrong")
        }finally{
            setLoading(false)
        }
    }

    return (
        <section className='min-h-screen w-full flex items-center justify-center py-5'>
            <div className="container flex flex-wrap mx-auto px-5">
                <div className='md:w-1/2 w-full mb-5 md:mb-0'>
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="lg:w-96 md:w-74 w-12"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className='md:w-1/2 w-full flex flex-col gap-10'>
                   
                    <h2 className='text-3xl font-semibold'>Sign in to X.</h2>

                    <form className='flex flex-col gap-3 md:w-1/2 w-full text-lg text-gray-800' onSubmit={handleSubmit}>
              
                        <input type="text" placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-full border  py-2  px-6' required />
                        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-full border  py-2 px-6' required />
                        <button className='bg-indigo-500 text-white  rounded-full py-2 px-6 hover:bg-indigo-600'>{loading? 'Loading...':"Login"}</button>
                        <p>Don't have an Account ?</p>
                        <Link to={"/register"} className='border text-md rounded-full py-2 px-6 hover:bg-gray-200 text-center'>Sign Up</Link>
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Login
