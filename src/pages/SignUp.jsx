import React from "react";
import { GiShop } from "react-icons/gi";
import InputText from "../components/InputText";
import InputPassword from "../components/InputPassword";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-[#FDFDFD] sm:p-0 px-5">
      <div className=" flex-1 max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="w-full py-5 bg-[#88AAF3] flex justify-center items-center">
          <div className="logo flex gap-2 items-center">
            <GiShop className="lg:text-3xl sm:text-xl text-base  text-white" />
            <h1 className="text-bold text-3xl font-bold text-white">SHOP</h1>
          </div>
        </div>
        <div className="p-8">
          <h2 className="title text-center text-lg text-[#88AAF3] mb-8">
            Welcome! Sign Up Your Account
          </h2>
          <form action="">
            <InputText placeholder="Name" />
            <InputText placeholder="Email" />
            <InputPassword placeholder="Password" />
            <InputPassword placeholder="Password Confirmation" />
            <div className="flex justify-between items-center mb-8">
              <div className=" checkbox flex  items-center">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="w-[15px] h-[15px] accent-[#88AAF3]"
                />
                <label
                  htmlFor="terms"
                  className="ml-3 text-sm m-0 p-0 text-gray-800 font-medium"
                >
                  I Agree the terms and conditions
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-[40px] rounded-2xl bg-[#88AAF3] text-white"
            >
              Sign Up
            </button>
            <p className="text-sm text-gray-600 mt-8 text-center">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-[#88AAF3]">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
