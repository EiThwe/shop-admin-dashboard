import React from 'react'
import Lottie from "lottie-react";
import furniture_loading  from "../assets/furniture_loading.json"

const Loading = () => {
  return (
    <div className='w-[300px]'>
        <Lottie animationData={furniture_loading} loop={true} className='w-full'/>
    </div>
  )
}

export default Loading