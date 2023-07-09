import React, { useState } from "react";
import IconsHeader from "../components/IconsHeader";
import Layout from "../components/Layout";
import { materialIconsData } from "../utils/material-icons";
import toast, { Toaster } from "react-hot-toast";
import { flagIconsData } from "../utils/flags";

const FlagIcons = () => {
  return (
    <Layout>
      <Toaster />
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <IconsHeader pageName={"Flag Icons"} path="Flag" />
        <div className="w-full h-full bg-white rounded-xl shadow-md p-8">
          <h2 className="text-sm font-semibold text-gray-600 mb-8 text-center">
            For using the flags inline with text add the classes
            <span className="code ml-2 py-[2px] px-2 font-mono font-thin bg-gray-200 text-base rounded-sm ">
              .flag-icon
            </span>{" "}
            and{" "}
            <span className="code ml-2 py-[2px] px-2 font-mono font-thin bg-gray-200 text-base rounded-sm ">
              .flag-icon-xx
            </span>{" "}
            (where xx is the ISO 3166-1-alpha-2 code of a country) to an empty
            span. If you want to have a squared version flag then add the class
            flag-icon-squared as well.
          </h2>
          <div className="grid grid-cols-6 gap-5">
            {flagIconsData.map(({ icon, title }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-gray-400 cursor-pointer"
              >
                <div className="w-[50px] flex justify-center items-center">
                  <span
                    className={`${icon} text-[2.5025rem] hover:text-blue-400`}
                  ></span>
                </div>
                <div className="code  font-mono font-thin text-sm ">
                  {title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FlagIcons;
