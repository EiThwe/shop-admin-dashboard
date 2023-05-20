import React, { useState } from 'react'
import { HiArrowLongUp,HiArrowLongDown } from "react-icons/hi2";


const SortBtn = () => {
    const [sortBtn,setSortBtn] = useState(false);
  return (
    <button className='flex items-center' onClick={()=>setSortBtn(!sortBtn)}>
        <HiArrowLongUp className={`-mr-2 ${sortBtn? "text-black": "text-gray-400"}`}/>
        <HiArrowLongDown className={`${sortBtn? "text-gray-400": "text-black" }`}/>
    </button>
  )
}

export default SortBtn