import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { ImEyePlus } from "react-icons/im";
import { MdMail } from "react-icons/md";

const VendorCard = ({ image, name, phone, email, cartData }) => {
  return (
    <>
      <div className="w-full bg-white rounded-2xl h-[400px] shadow-md border border-gray-200 flex justify-center p-8 relative">
        <div className="flex flex-col gap-3 w-full items-center">
          <div className="w-[150px] h-[150px] rounded-xl shadow-sm overflow-hidden">
            <img src={image} alt="" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-lg font-bold text-gray-600">{name}</h1>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 text-sm text-gray-400 items-center">
                <GiRotaryPhone />
                <h6 className="tracking-wider">{phone}</h6>
              </div>
              <div className="flex gap-2 text-sm text-gray-400 items-center ">
                <MdMail />
                <h6>{email}</h6>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 w-full mt-4 ">
            {cartData.map(({ name, quantity }, index) => (
              <div className="flex flex-col gap-2 items-center">
                <div className="w-full h-[26px] bg-[#F1F1F1] rounded-lg text-center">
                  <h6 className="flex justify-center items-center text-sm text-gray-400 capitalize">
                    {name}
                  </h6>
                </div>
                <h3 className="text-gray-600 font-bold text-sm">{quantity}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-4 right-4 text-lg text-gray-400">
          <ImEyePlus />
        </div>
      </div>
    </>
  );
};

export default VendorCard;
