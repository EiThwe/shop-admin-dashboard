import React from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  console.log(id);
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
            <Link to={`/edit-product/${id}`}>
              <button className="px-5 py-3 bg-blue-500 rounded-2xl text-white font-bold text-sm">
                Edit
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full p-5 rounded-t-2xl shadow-xl bg-white border-b-[1px] border-gray-200">
          <h1 className="font-bold"> Product Detail</h1>
        </div>
        <div className="w-full p-5 rounded-b-2xl shadow-xl bg-white">
          <div className="flex w-full gap-2">
            <div className="w-[30%] h-[200px] bg-red-300">Hello</div>
            <div className="w-[50%] h-[200px] bg-green-300">Hello</div>
            <div className="w-[20%] h-[200px] bg-blue-300">Hello</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
