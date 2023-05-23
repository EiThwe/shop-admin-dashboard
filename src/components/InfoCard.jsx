import React from 'react'
import { HiOutlineUser } from 'react-icons/hi2'

const InfoCard = ({Icon,quantity,text,bgColor}) => {
  return (
    <div className='w-full rounded-xl h-[90px] px-[15px] shadow-md border flex gap-4 items-center'>
        <div className={`w-[60px] h-[60px] rounded-xl ${bgColor} text-white flex justify-center items-center text-2xl`}>
            <Icon/>
        </div>
        <div className="flex flex-col gap-1">
            <h1 className='font-bold text-gray-500 text-lg'>{quantity}</h1>
            <h2>{text}</h2>
        </div>
    </div>
  )
}

export default InfoCard 