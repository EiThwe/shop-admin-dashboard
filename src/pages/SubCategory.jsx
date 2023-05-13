import React from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { selectNumberData, selectboxData } from "../utils/data";

const SubCategory = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <div className="flex justify-between items-start">
          <h1 className="text-2xl font-bold text-gray-600">Sub Category</h1>
          <div className="flex justify-center items-center gap-2 mb-[20px] font-bold">
            <a href="#" className="text-blue-500">
              Home
            </a>
            <IoIosArrowForward className="text-[12px] text-gray-400" />
            <a href="#" className="text-gray-400">
              Sub Category
            </a>
          </div>
        </div>
        <div className="flex gap-[25px] w-full mt-5">
          <div className="w-[33%] bg-white rounded-2xl p-6  text-gray-500">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <h1 className="text-xl font-bold">Add Sub Category</h1>
                <hr className="h-[1px] bg-gray-400 w-full" />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-bold text-[15px]">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full h-11 rounded-2xl border border-gray-400 border-opacity-40"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="slug" className="font-bold text-[15px]">
                  Slug
                </label>
                <input
                  type="text"
                  className="w-full h-11 rounded-2xl border border-gray-400 border-opacity-40"
                />
                <small className="text-xs">
                  The “slug” is the URL-friendly version of the name. It is
                  usually all lowercase and contains only letters, numbers, and
                  hyphens.
                </small>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="sort" className="font-bold text-[15px]">
                  Sort Description
                </label>
                <textarea
                  rows={3}
                  className="rounded-2xl border border-gray-400 border-opacity-40"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-bold text-[15px]">
                  Parent Category
                </label>
                <select
                  name="parent category"
                  className="w-full h-12 p-2 rounded-2xl border border-gray-400 border-opacity-40 text-sm outline-none"
                >
                  {selectboxData.map((data, index) => (
                    <option value={data} key={index}>
                      {data}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="full" className="font-bold text-[15px]">
                  Full Description
                </label>
                <textarea
                  rows={5}
                  className="rounded-2xl border border-gray-400 border-opacity-40"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="name" className="font-bold text-[15px]">
                  Product Tags{" "}
                  <small className="tracking-wide">
                    ( Type and make comma to separate tags )
                  </small>
                </label>
                <input
                  type="text"
                  className="w-full h-[60px] rounded-2xl border border-gray-400 border-opacity-40"
                />
              </div>
              <button
                type="submit"
                className="w-20 px-3 py-2 rounded-xl bg-blue-400 text-white text-sm"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="w-[67%] bg-white rounded-2xl p-6 text-gray-400">
            <div className="flex justify-between items-center">
              <div className="flex text-sm gap-2 items-center">
                <h6>Show</h6>
                <div className=" styled-select">
                  <select
                    name="numbers"
                    id=""
                    className="border border-gray-400 rounded-xl w-[75px] h-[30px] px-2 text-xs font-medium "
                  >
                    {selectNumberData.map((data, index) => (
                      <option value={data} key={index}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default SubCategory;
