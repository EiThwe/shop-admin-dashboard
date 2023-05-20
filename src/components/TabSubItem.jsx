import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const TabSubItem = ({ item, isCurrentRoute }) => {
  const pathname = "/" + item.toLowerCase().replace(" ", "-");
  if (isCurrentRoute === item) {
  }
  return (
    <Link to={pathname}>
      <div className="flex px-5 py-2 group">
        <div className="flex gap-2 justify-start items-center">
          <MdDashboard className="text-2xl opacity-0 " />
          <p
            className={`text-sm font-bold group-hover:text-black ${
              isCurrentRoute === item ? "text-black" : "text-gray-500"
            }`}
          >
            {item}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TabSubItem;
