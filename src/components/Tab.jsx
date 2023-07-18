import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import TabSubItems from "./TabSubItems";
import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";

const Tab = ({ item, setData }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { name, pathname, Icon, isBordered, subItems, isOpen, id } = item;
  const [showSubItems, setShowSubItems] = useState(isOpen);
  const [isCurrentRoute, setIsCurrentRoute] = useState(null);

  useEffect(() => {
    setShowSubItems(isOpen);
  }, [isOpen]);

  const toggleTabHandler = () => {
    setData((prevData) =>
      prevData.map((data) => {
        if (data.id == item.id) data.isOpen = !data.isOpen;
        else data.isOpen = false;
        return data;
      })
    );
  };

  useEffect(() => {
    const isCurrent = subItems.find((item) => {
      const path = item.toLowerCase().replaceAll(" ", "-");
      // console.log(path);

      if (location.pathname === "/" + path && !showSubItems) {
        toggleTabHandler();
      }

      return location.pathname === "/" + path;
    });

    if (!isCurrent && location.pathname === pathname)
      return setIsCurrentRoute(pathname);
    else {
      // console.log(isCurrent);
      setIsCurrentRoute(isCurrent);
    }
  }, []);

  return (
    <>
      <button
        className={`w-full flex justify-between items-center p-5 relative ${
          isBordered && "border-b"
        }  ${isCurrentRoute ? "text-black" : "text-gray-400"}`}
        onClick={() => {
          console.log("click");
          if (subItems.length == 0) {
            navigate(pathname);
          }
          toggleTabHandler();
        }}
      >
        <div className={`flex gap-2 justify-start items-center `}>
          <Icon
            className={`text-[22px] ${
              isCurrentRoute ? "text-blue-500" : "text-gray-400"
            }`}
          />
          <p className="text-[13px] font-bold uppercase">{name}</p>
        </div>
        {subItems.length > 0 && (
          <div className="flex justify-center items-center">
            <IoIosArrowForward
              className={`text-xl ${showSubItems ? "rotate-90" : "rotate-0"}`}
            />
          </div>
        )}
        {isCurrentRoute && (
          <div className="absolute w-[5px]  h-[50px] rounded-full bg-blue-500  left-1"></div>
        )}
      </button>
      {subItems.length > 0 && (
        <TabSubItems
          showSubItems={showSubItems}
          subItems={subItems}
          isCurrentRoute={isCurrentRoute}
        />
      )}
    </>
  );
};

export default Tab;
