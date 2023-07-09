import React from "react";
import notFound from "../assets/Decrease_3.jpg";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="w-full h-[93%] p-8 bg-[#F3F4F6]">
        <div className="not-found w-full h-full bg-white rounded-xl shadow-xl flex justify-center items-center">
          <div className="w-[40%] flex flex-col justify-center items-center">
            <h1 className="text-[140px] leading-[120px] font-[600] text-gray-500 text-center mb-8">
              404
            </h1>
            <p className="text-gray-500  text-center mb-8">
              Looks like something went wrong.
            </p>
            <Link
              to={"/dashboard"}
              className="bg-[#88AAF3] py-[6px] px-3 rounded-full text-white text-sm font-bold"
            >
              Back to Home
            </Link>
          </div>
          <div className="w-[55%] h-full flex justify-center items-center">
            <img src={notFound} alt="" className="w-full" />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default NotFound;
