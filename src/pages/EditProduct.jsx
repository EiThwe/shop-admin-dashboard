import React from 'react'
import {IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const EditProduct = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-2xl font-bold">Product Detail</h1>
            <div className="flex justify-center items-center gap-2 mb-[20px] font-bold">
              <a href="#" className="text-blue-500">
                Home
              </a>
              <IoIosArrowForward className="text-[12px]" />
              <a href="#" className="text-gray-400">
                Product
              </a>
            </div>
          </div>
          <div>
            <Link to={"/products"}>
              <button className="px-5 py-3 bg-blue-500 rounded-2xl text-white font-bold text-sm">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default EditProduct