import React from "react";
import { MdOutlinePhoneInTalk, MdStarRate } from "react-icons/md";
import { profileInfo } from "../utils/data";

const ProfileCard = () => {
  return (
    <div className="w-full h-[400px] p-6 bg-white border border-gray-300 rounded-2xl shadow-md">
      <div className="w-full h-[200px] overflow-hidden rounded-2xl">
        <img
          src="https://maraviyainfotech.com/projects/ekka/ekka-v34/ekka-admin/assets/img/user/u-xl-4.jpg"
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col mt-3 gap-2 items-center">
        <h1 className="text-lg font-bold text-gray-600">John Karter</h1>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((item) => (
            <MdStarRate
              size={20}
              key={item}
              className={`${item < 4 ? "text-yellow-400" : "text-gray-600"}`}
            />
          ))}
        </div>
      </div>
      <div className="text-gray-400 text-sm flex flex-col gap-1 items-start mt-3 tracking-wide">
        {profileInfo.map(({ Icon, text }, index) => (
          <div key={index} className="flex gap-2 justify-center items-center">
            <Icon />
            <div>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
