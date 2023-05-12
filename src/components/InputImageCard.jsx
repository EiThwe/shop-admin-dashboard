import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import uploadPreview from "../assets/upload-preview.jpg";

const InputImageCard = ({ imageUrl, setActiveInputImage, id }) => {
  return (
    <div
      className="w-full  px-[2px] min-h-[100px] flex justify-center items-center rounded-xl border
border-gray-200 py-[2px] relative overflow-hidden"
    >
      <div className="w-full overflow-hidden rounded-xl min-h-[94px]">
        <img
          src={imageUrl ? imageUrl : uploadPreview}
          alt="Image"
          className=" object-cover "
        />
      </div>
      <button
        onClick={() => {
          console.log(id);
          setActiveInputImage(id);
        }}
        className="absolute top-[6px] right-[6px] bg-white shadow-xl text-base rounded-md w-[30px] h-[30px] 
        flex justify-center items-center"
      >
        <MdOutlineModeEditOutline color="gray" />
      </button>
    </div>
  );
};

export default InputImageCard;
