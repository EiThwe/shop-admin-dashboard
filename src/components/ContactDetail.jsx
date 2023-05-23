import React from "react";
import { MdEdit, MdOutlineClose, MdOutlineMoreVert } from "react-icons/md";
import MoreDropDown from "./MoreDropDown";

const ContactDetail = ({setShowContactDetail}) => {
  return (
    <div className="fixed w-screen h-screen bg-opacity-50 bg-black top-0 left-0 z-[100] flex justify-center items-center">
      <div className="w-[800px] h-[400px] rounded-3xl bg-white relative p-9 flex gap-9">
        <div className="absolute top-5 right-5 flex gap-5 text-xs">
          <button className="">
            <MdEdit />
          </button>
          <MoreDropDown iconSize={"text-xs"}/>
          <button onClick={()=>setShowContactDetail(false)}>
            <MdOutlineClose />
          </button>
        </div>
        <div className="flex flex-col gap-5 w-[50%]  h-full items-center">
          <div className="w-[100px] h-[100px] rounded-2xl overflow-hidden">
            <img
              src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u6.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center tracking-tight">
            <h1 className="text-xl text-gray-600 font-bold ">John Devilo</h1>
            <h3 className=" font-bold text-gray-400">johnexample@gmail.com</h3>
          </div>
          <button className="text-white px-4 py-3 rounded-full bg-blue-400 hover:bg-[#191949] text-sm">
            Follow
          </button>
          <div className="flex justify-between w-full mt-5">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-sm text-gray-600">354</h1>
              <h2 className="text-gray-400 text-bold">Bought</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-sm text-gray-600">30</h1>
              <h2 className="text-gray-400 text-bold">Wish List</h2>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold text-sm text-gray-600">1200</h1>
              <h2 className="text-gray-400 text-bold">Following</h2>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col gap-7 w-[50%] h-full"
        >
          <h1 className="font-bold text-xl text-gray-600 tracking-wide">Contact Details</h1>
          <div className="">
            <h2 className="text-gray-600 font-bold">Email Address</h2>
            <h6 className="text-gray-400 font-bold text-sm">johnexample@gmail.com</h6>
          </div>
          <div className="">
            <h2 className="text-gray-600 font-bold">Phone Number</h2>
            <h6 className="text-gray-400 font-bold text-sm">+00 9539 2461 31</h6>
          </div>
          <div className="">
            <h2 className="text-gray-600 font-bold">Birthday</h2>
            <h6 className="text-gray-400 font-bold text-sm">Dec 10, 1991</h6>
          </div>
          <div className="">
            <h2 className="text-gray-600 font-bold">Address</h2>
            <h6 className="text-gray-400 font-bold text-sm">123/2, Kings fort street-2, Polo alto, US.</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
