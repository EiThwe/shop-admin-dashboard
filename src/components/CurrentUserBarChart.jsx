import React from 'react'
import BarChart from './BarChart'

const CurrentUserBarChart = () => {
  return (
    <div className="w-full border rounded-xl bg-white shadow-md">
    <div className="p-5 border-b">
        <h1 className='font-bold'>Current Users</h1>
    </div>
    <div className="w-full p-5">
        <BarChart/>
    </div>
    </div>
  )
}

export default CurrentUserBarChart