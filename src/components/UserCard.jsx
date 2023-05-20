import React, { useState } from "react";
import { profileInfo } from "../utils/data";
import { ImEyePlus } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import ContactDetail from "./ContactDetail";

const UserCard = ({ image, name }) => {
    const [showContactDetail,setShowContactDetail] = useState(false);
  return (
    <div className="w-full bg-[#fdfdfd] rounded-2xl h-[150px] shadow-md p-6 relative">
      <div className=" w-full h-full flex gap-3 items-center">
        <div className="w-[70px] h-[70px] rounded-xl overflow-hidden">
          <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h1 className="font-bold text-gray-600 tracking-tight">{name}</h1>

          <div className="flex gap-2 justify-center items-center text-sm text-gray-400">
            <IoMdMail />
            <div>example@gmail.com</div>
          </div>
          <div className="flex gap-2 justify-center items-center text-sm text-gray-400">
            <MdLocalPhone />
            <div>(123) 888 777 632</div>
          </div>
        </div>
      </div>
      <button className="absolute text-xl text-gray-400 top-3 right-3" onClick={()=>setShowContactDetail(true)}>
        <ImEyePlus />
      </button>
      {showContactDetail && <ContactDetail setShowContactDetail={setShowContactDetail}/>}
    </div>

  );
};

export default UserCard;
