import React from "react";
import Layout from "../components/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { detailColors } from "../utils/data";
import ToggleContainer from "../components/ToggleContainer";
import { MdStarRate } from "react-icons/md";
import ProfileCard from "../components/ProfileCard";
import { useGetProductByIdQuery } from "../feature/api/productApi";
import Loading from "../components/Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const product = data?.data[0];
  console.log(data);
  return (
    <Layout>
      {isLoading ? (
       <div className="flex w-full h-full justify-center items-center">
         <Loading />
       </div>
      ) : (
        <>
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
            <div className="w-full p-8 rounded-b-2xl shadow-xl bg-white">
              <div className="flex w-full mb-[30px] gap-5">
                <div className="w-[30%] h-full bg-red-300">Hello</div>
                <div className="w-[45%] h-full ">
                  <div className="w-full h-full flex flex-col gap-3">
                    <h2 className="text-lg font-bold text-gray-600">
                      {product.title}
                    </h2>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map((item) => (
                        <MdStarRate
                          size={20}
                          key={item}
                          className={`${
                            item < 4 ? "text-yellow-400" : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1990.
                    </p>

                    <p className="text-gray-400">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1990. Lorem Ipsum is
                      simply dummy text of the printing and typesetting
                      industry.
                    </p>

                    <div className="flex flex-col gap-3 my-2">
                      <h6 className="text-sm text-gray-600 font-bold">
                        Available offers
                      </h6>
                      <p className="text-sm text-gray-400 tracking-[0.015rem]">
                        <span className=" text-gray-600 font-bold">
                          Special Price :
                        </span>{" "}
                        Get extra 16% off (price inclusive of discount){" "}
                        <a
                          href="#"
                          className="text-decoration-none text-blue-500"
                        >
                          T&C
                        </a>
                      </p>
                      <p className="text-sm text-gray-400 tracking-[0.015rem]">
                        <span className=" text-gray-600 font-bold">
                          Bank Offer :
                        </span>{" "}
                        10% off on XYZ Bank Cards, up to $12. On orders of $200
                        and above{" "}
                        <a
                          href="#"
                          className="text-decoration-none text-blue-500"
                        >
                          T&C
                        </a>
                      </p>
                      <p className="text-sm text-gray-400 tracking-[0.015rem]">
                        <span className=" text-gray-600 font-bold">
                          Bank Offer :
                        </span>{" "}
                        5% Unlimited Cashback on Ekka XYZ Bank Credit Card{" "}
                        <a
                          href="#"
                          className="text-decoration-none text-blue-500"
                        >
                          T&C
                        </a>
                      </p>
                      <p className="text-sm text-gray-400 tracking-[0.015rem]">
                        <span className=" text-gray-600 font-bold">
                          Bank Offer :
                        </span>{" "}
                        Flat $50 off on first Ekka Pay Later order of $200 and
                        above{" "}
                        <a
                          href="#"
                          className="text-decoration-none text-blue-500"
                        >
                          T&C
                        </a>
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 my-2">
                      <h2 className="text-base font-bold text-gray-600">
                        Price: ${product.price}
                      </h2>
                      <h3 className="text-gray-400">SKU#: WH12</h3>
                      <div className="flex gap-2">
                        {["S", "M", "L", "XL"].map((data, index) => (
                          <button
                            className="px-[7px] py-[1px] border border-gray-400 rounded-xl text-[11px] text-gray-400"
                            key={index}
                          >
                            {data}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {detailColors.map((data, index) => (
                          <button
                            className={`px-3 py-3 rounded-full ${data}`}
                            key={index}
                          ></button>
                        ))}
                      </div>
                      <div className="flex gap-5">
                        <div className="p-2 rounded-xl border border-gray-300 text-center text-gray-600">
                          <h1 className="text-[13px] font-bold">Available</h1>
                          <p className="text-sm tracking-wide">180</p>
                        </div>
                        <div className="p-2 rounded-xl border border-gray-300 text-center text-gray-600">
                          <h1 className="text-[13px] font-bold">Pending</h1>
                          <p className="text-sm tracking-wide">50</p>
                        </div>
                        <div className="p-2 rounded-xl border border-gray-300 text-center text-gray-600">
                          <h1 className="text-[13px] font-bold">InOrder</h1>
                          <p className="text-sm tracking-wide">20</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[25%] h-full">
                  <ProfileCard />
                </div>
              </div>
              <ToggleContainer />
            </div>
          </div>
          <footer className="text-center text-sm p-3 bg-white">
            <p>
              Copyright © 2023{" "}
              <a href="" className="text-decoration-none text-blue-400">
                Ekka Admin Dashboard
              </a>
              . All Rights Reserved.
            </p>
          </footer>
        </>
      )}
    </Layout>
  );
};

export default ProductDetail;
