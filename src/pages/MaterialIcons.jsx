import React, { useState } from "react";
import IconsHeader from "../components/IconsHeader";
import Layout from "../components/Layout";
import { materialIconsData } from "../utils/material-icons";
import toast, { Toaster } from "react-hot-toast";

const MaterialIcons = () => {
  const [spanName, setSpanName] = useState("mdi mdi-name");
  const [limit, setLimit] = useState(30);

  const copyToClipboard = (icon) => {
    navigator.clipboard.writeText(icon).then(() => {
      toast.success("copied successfully!");
    });
  };
  return (
    <Layout>
      <Toaster />
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <IconsHeader pageName={"Material Icon"} path="Material Icon" />
        <div className="w-full h-full bg-white rounded-xl shadow-md p-8">
          <div className="w-full h-[60px] rounded-sm border-l-4 border-blue-400 bg-gray-200 flex items-center px-8">
            <span className="text-gray-400 font-thin font-mono">{`<span class="${spanName}"></span>`}</span>
          </div>
          <h2 className="text-lg font-semibold text-gray-600 my-5">
            Icons (click to copy to clipboard)
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {materialIconsData.slice(0, limit).map(({ code, icon }, i) => (
              <div
                key={i}
                onClick={() => {
                  copyToClipboard(icon);
                  setSpanName(icon);
                }}
                className="flex items-center gap-2 text-gray-400 cursor-pointer"
              >
                <div className="w-[20px] flex justify-center items-center">
                  <i className={`  ${icon}  text-2xl hover:text-blue-400`}></i>
                </div>
                <div className="code py-2 px-3 font-mono font-thin bg-gray-200 hover:border-blue-400 hover:text-blue-400 border border-gray-200 text-sm rounded-md tracking-widest">
                  {code}
                </div>
                <p className="text-sm font-semibold hover:text-blue-400">
                  {icon.replace("mdi ", "")}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center">
            {limit < materialIconsData.length ? (
              <button
                onClick={() => {
                  setLimit(limit + 30);
                }}
                className="text-sm mt-5 text-blue-400"
              >
                See More
              </button>
            ) : (
              <button
                onClick={() => {
                  setLimit(30);
                }}
                className="text-sm mt-5 text-blue-400"
              >
                See Less
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MaterialIcons;
