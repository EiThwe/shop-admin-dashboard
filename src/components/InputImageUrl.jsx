import React from "react";

const InputImageUrl = ({ value, setValue, id, textInput }) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="image" className="font-bold text-gray-400">
        Image Url ( For {id} )
      </label>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="w-full h-[50px] rounded-xl border border-gray-200 px-3"
        ref={textInput}
      />
    </div>
  );
};

export default InputImageUrl;
