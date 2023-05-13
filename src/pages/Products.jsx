import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useGetProductsQuery } from "../feature/api/productApi";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Products = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetProductsQuery(page);
  console.log({ data, isLoading });

  return (
    <Layout>
      {isLoading ? (
        <div className="w-full h-full bg-gray-100 flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        <div className="w-full p-8 bg-gray-100 min-h-full">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2 ">
              <h1 className="text-2xl font-bold">Product</h1>
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
              <Link to={"/add-product"}>
                <button className="px-5 py-3 bg-blue-500 rounded-2xl text-white font-bold text-sm">
                  Add Product
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full p-5 rounded-t-2xl shadow-xl bg-white border-b-[1px] border-gray-200">
            <div className="flex justify-between">
              <input
                type="text"
                name="search"
                placeholder="search with product name.."
                className="border border-gray-200 rounded-2xl px-5 py-3 w-[50%] text-sm font-semibold search"
              />
              <div className="flex gap-3">
                <div className="px-3 w-44 py-3 rounded-2xl border border-gray-200 text-gray-400 font-bold uppercase text-xs">
                  All Category
                </div>
                <div className="px-3 w-44 py-3 rounded-2xl border border-gray-200 text-gray-400 font-bold uppercase text-xs">
                  Ordered by
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-5 rounded-b-2xl shadow-xl bg-white">
            <div className="grid grid-cols-4 gap-5 w-full">
              {data?.data?.map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
            <Pagination page={page} setPage={setPage} />
          </div>
        </div>
      )}
      <Footer/>
    </Layout>
  );
};

export default Products;
