import React from "react";
import SocialProfileButton from "./SocialProfileButton";
import { socialProfileButton } from "../utils/data";

const ContactInformation = () => {
  return (
    <div className="flex flex-col gap-5 w-[full] h-full">
      <h1 className="font-extrabold text-lg text-gray-600 tracking-wide">
        Contact Details
      </h1>
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 font-bold">Email Address</h2>
        <h6 className="text-gray-400 font-bold text-sm">
          johnexample@gmail.com
        </h6>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 font-bold">Phone Number</h2>
        <h6 className="text-gray-400 font-bold text-sm">+00 9539 2461 31</h6>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 font-bold">Birthday</h2>
        <h6 className="text-gray-400 font-bold text-sm">Dec 10, 1991</h6>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-gray-600 font-bold">Social Profile</h2>
        <div className="flex gap-3">
          {socialProfileButton.map(({Icon}, index) => (
            <SocialProfileButton Icon={Icon} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
