import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import uploadPreview from "../assets/upload-preview.jpg";

const InputImageCard = ({
  imageUrl,
  setActiveInputImage,
  id,
  hidden,
  active,
  hover
}) => {
  return (
    <div
      className={`w-full  px-[2px] min-h-[100px] flex justify-center items-center rounded-xl border
${
  active ? "border-gray-400" : "border-gray-200"
} ${hover && "hover:border-blue-500"}  py-[2px] relative overflow-hidden bg-[#F3F3F3]`}
    >
      <div className="img-container w-full h-full overflow-hidden rounded-xl flex justify-center items-center">
        <img
          src={imageUrl ? imageUrl : uploadPreview}
          alt="Image"
          className=" object-cover "
        />
      </div>
      {!hidden && (
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
      )}
    </div>
  );
};

export default InputImageCard;
