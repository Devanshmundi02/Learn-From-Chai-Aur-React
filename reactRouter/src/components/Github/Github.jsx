import React, { useState } from 'react'
import { useEffect } from 'react'
import  { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    //another approach for data loading on github page
    // const  [data,setdata] = useState(0)
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Devanshmundi02').then((res)=>res.json()).then((data)=>setdata(data))
    // },[])
  return (
    <>
        <div className=' bg-orange-700 text-orange-700 p-3 rounded-xl'>
            <h1 className='text-2xl mb-2 bg-gray-700 '>Github Profile: {data.name}</h1>
            <h1 className='text-2xl mb-2 bg-gray-700'>Github Followers: {data.followers}</h1>
            <h1 className='flex justify-center mb-2f'><img src={data.avatar_url} alt="Git Picture" width={200} /></h1>
        </div>
    </>
  )
}

export default Github


