import React from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";
import {
  categoryListData,
  selectNumberData,
  selectboxData,
  theadData,
} from "../utils/data";
import Table from "../components/Table";
import TableTopTemplate from "../components/TableTopTemplate";
import TablePagination from "../components/TablePagination";
import PageHeader from "../components/PageHeader";

const SubCategory = () => {
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Sub Category"}
          pageName={"Sub Category"}
          pathName={""}
          onClick={""}
        />

        <div className="flex gap-[25px] w-full mt-5">
          <div className="w-[33%] bg-white rounded-2xl p-6  text-gray-500">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-5">
                <h1 className="text-lg font-bold">Add Sub Category</h1>
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
          <div className="w-[67%]">
            <div className="w-full bg-white rounded-2xl py-6 px-4 text-gray-400">
              <TableTopTemplate />
              <div className="w-full overflow-x-auto mt-5">
                <Table />
                <TablePagination showing={13} entries={13} />
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
