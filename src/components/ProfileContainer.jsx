import React from "react";
import InfoCard from "./InfoCard";
import { infoCardData, profileContainerData } from "../utils/data";
import { HiOutlineRefresh } from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import MoreDropDown from "./MoreDropDown";
import { HiOutlineClock, HiOutlineShoppingCart } from "react-icons/hi2";
const ProfileContainer = () => {
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-3 gap-5">
        {infoCardData.map((data, index) => (
          <InfoCard {...data} key={index} />
        ))}
      </div>
      <div className="bg-white h-[600px] mt-6 shadow-md border rounded-xl w-full ">
        <div className="flex justify-between items-center px-6 h-[15%]  border-b w-full">
          <h1 className="font-medium text-gray-600 text-lg">
            Latest Notifications
          </h1>
          <div className="flex gap-5 text-xl">
            <button>
              <HiOutlineRefresh />
            </button>
            <MoreDropDown iconSize={"text-2xl"} />
          </div>
        </div>

        <div className="w-full py-6 h-[85%] ">
          <div className="w-full h-full px-6 overflow-y-auto customScrollbar">
          <div className="w-full flex flex-col gap-8 pb-8">
            {profileContainerData.map(({ Icon, title, text, time,bgColor }, index) => (
              
                <div className="flex justify-between items-center" key={index}>
                  <div className="flex gap-3 items-center">
                    <div className={`w-[50px] h-[50px] rounded-xl ${bgColor} text-xl flex justify-center items-center text-white`}>
                      <Icon />
                    </div>
                    <div className="flex flex-col text-sm text-gray-600">
                      <h2 className="font-medium ">{title}</h2>
                      <h3>{text}</h3>
                    </div>
                  </div>
                  <div className="flex gap-1 items-center ">
                    <HiOutlineClock />
                    <h6 className=" text-xs">{time}</h6>
                  </div>
                </div>
              ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
