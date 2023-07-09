import React from "react";
import { GiShop } from "react-icons/gi";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPassword";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#FDFDFD]">
      <div className=" flex-1 max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="w-full py-5 bg-[#88AAF3] flex justify-center items-center">
          <div className="logo flex gap-2 items-center">
            <GiShop className="lg:text-3xl sm:text-xl text-base  text-white" />
            <h1 className="text-bold text-3xl font-bold text-white">SHOP</h1>
          </div>
        </div>
        <div className="p-8">
          <h2 className="title text-center text-lg text-[#88AAF3] mb-8">
            Welcome! Sign In to Your Account
          </h2>
          <form action="">
            <InputText placeholder="Username" />
            <InputPassword placeholder="Password" />
            <div className="flex justify-between items-center mb-8">
              <div className=" checkbox flex  items-center">
                <input
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  className="w-[15px] h-[15px] accent-[#88AAF3]"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-3 text-sm m-0 p-0 text-gray-800 font-medium"
                >
                  Remember me
                </label>
              </div>
              <a href="#" className="text-[#88AAF3] text-sm">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full h-[40px] rounded-2xl bg-[#88AAF3] text-white"
            >
              Sign In
            </button>
            <p className="text-sm text-gray-600 mt-8 text-center">
              Don't have an account yet ?{" "}
              <Link to="/sign-up" className="text-[#88AAF3]">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
