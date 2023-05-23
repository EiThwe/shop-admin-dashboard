import React from "react";

const SettingContainer = () => {
  return (
    <div className="w-full font-medium text-gray-500 flex flex-col gap-8 text-[15px]">
      <div className="flex w-full justify-center items-center">
        <h1 className="w-[20%]">User Image</h1>

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
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="first_name" className="text-gray-600">First Name</label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            className="w-full h-11 rounded-xl border p-3"
            placeholder="First Name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="last_name" className="text-gray-600">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="w-full h-11 rounded-xl border p-3"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="user_name">User Name</label>
        <input
            type="text"
            name="user_name"
            id="user_name"
            className="w-full h-11 rounded-xl border p-3"
            placeholder="User Name"
          />
          <small className="text-sm">Accusamus nobis at omnis consequuntur culpa tempore saepe animi.</small>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            name="email"
            id="email"
            className="w-full h-11 rounded-xl border p-3"
            placeholder="ekka.example@gmail.com"
          />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="old_password">Old Password</label>
        <input
            type="password"
            name="old_password"
            id="old_password"
            className="w-full h-11 rounded-xl border p-3"
          />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="new_password">New Password</label>
        <input
            type="password"
            name="new_password"
            id="new_password"
            className="w-full h-11 rounded-xl border p-3"
          />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password_confirmation">Confirm Password</label>
        <input
            type="password"
            name="password_confirmation"
            id="password_confirmation"
            className="w-full h-11 rounded-xl border p-3"
          />
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-400 px-4 py-3 rounded-full text-white text-sm">Update Profile</button>
      </div>
    </div>
  );
};

export default SettingContainer;
