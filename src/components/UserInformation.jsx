import React from "react";

const UserInformation = () => {
  return (
    <div className="flex flex-col gap-5 w-full  h-full items-center">
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
  );
};

export default UserInformation;
