import React from "react";

const InputPassword = ({placeholder}) => {
  return (
    <input
      type="password"
      placeholder={placeholder}
      className="w-full h-[40px] border rounded-2xl px-5 text-sm mb-8 outline-none focus:border-[#88AAF3]"
    />
  );
};

export default InputPassword;
