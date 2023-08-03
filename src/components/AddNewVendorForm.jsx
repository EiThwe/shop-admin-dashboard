import React from "react";
import { MdOutlineClose } from "react-icons/md";

const AddNewVendorForm = ({ setShowAddVendor }) => {
  return (
    <div className="fixed w-screen h-screen bg-opacity-50 bg-black top-0 left-0 z-[100] flex justify-center items-center">
      <div className="w-[750px] h-[550px] rounded-2xl bg-white">
        <div className="p-5 w-full border-b  border-gray-200 flex justify-between">
          <h1 className="text-lg font-bold text-gray-600">Add New Vendor</h1>
          <button className="text-lg" onClick={() => setShowAddVendor(false)}>
            <MdOutlineClose />
          </button>
        </div>
        <div className="w-full px-8 py-3 font-medium text-gray-500 flex flex-col gap-5 text-[15px]">
          <div className="flex w-full justify-center items-center">
            <h1 className="w-[20%]">Vendor Image</h1>

            <label htmlFor="fileSelect" className="w-[80%] h-[45px] flex ">
              <div className="w-[80%] h-full flex items-center border border-gray-400   bg-white  rounded-l-md p-3">
                Choose File...
              </div>
              <div className="bg-gray-200 text-gray-600 w-[20%] h-full border-y border-r border-gray-400 rounded-r-md flex justify-center items-center">
                Browse
              </div>
            </label>
            <input type="file" id="fileSelect" className="hidden" />
          </div>
        </div>
        <form action="" className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5 my-7 px-8">
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                placeholder="John"
                className="w-full h-[45px] border border-gray-200 rounded-2xl p-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Doe"
                className="w-full h-[45px] border border-gray-200 rounded-2xl p-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="user_name">User Name</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="johndoe"
                className="w-full h-[45px] border border-gray-200 rounded-2xl p-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="johnexample@gmail.com"
                className="w-full h-[45px] border border-gray-200 rounded-2xl p-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="birthday">Birthday</label>
              <input
                type="text"
                name="birthday"
                id="birthday"
                placeholder="10-12-1991"
                className="w-full h-[45px] border border-gray-200 rounded-2xl p-3"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address here"
                className="w-full h-[45px] border border-gray-200 rounded-2xl p-3"
              />
            </div>
          </div>
          <div className="flex justify-end items-center gap-2 border-t border-gray-200 w-full px-8 pb-3 pt-[14px] text-sm font-semibold">
            <button type="button" onClick={()=>setShowAddVendor(false)} className="px-3 py-2 bg-gray-400 text-white rounded-full">
              Cancel
            </button>
            <button type="button" onClick={()=>setShowAddVendor(false)} className="px-3 py-2 bg-blue-400 text-white rounded-full">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewVendorForm;
