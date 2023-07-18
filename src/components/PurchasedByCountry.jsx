import React from 'react'
import Date from './Date'
import WorldMap from './WorldMap'

const PurchasedByCountry = () => {
  return (
    <div className="w-full border rounded-xl bg-white shadow-md">
    <div className="p-5 border-b flex justify-between">
      <h1 className="font-bold">Purchased By Country</h1>
      <div className="relative">
        <Date />
      </div>
    </div>
    <div className=" w-full">
      <div className="w-full h-auto px-10">
      <WorldMap/>
      </div>
      <div className="p-5 flex items-center border-t">
        <a href="#" className=" mt-[5px] uppercase text-blue-400 text-xs">
          In-Detail-overview
        </a>
      </div>
    </div>
  </div>
  )
}

export default PurchasedByCountry