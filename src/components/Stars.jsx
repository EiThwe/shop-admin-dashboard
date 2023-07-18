import React from "react";
import { MdStarRate } from "react-icons/md";

const Stars = ({ratings}) => {
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3, 4].map((item) => (
        <MdStarRate
          size={18}
          key={item}
          className={`${item < ratings ? "text-yellow-400" : "text-gray-600"}`}
        />
      ))}
    </div>
  );
};

export default Stars;
