import React from "react";
import { IoLogoTwitter } from "react-icons/io";

const SocialProfileButton = ({ Icon }) => {
  return (
    <button className="w-[40px] h-[40px] p-3 rounded-2xl text-sm border border-gray-200 hover:text-white hover:bg-blue-400 hover:border-blue-400">
      <Icon />
    </button>
  );
};

export default SocialProfileButton;
