import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const CustomCheckBox = ({isChecked}) => {
  const [checked, setChecked] = useState(isChecked);
  return (
    <button
      className="w-[15px] h-[15px] border border-blue-400 rounded-sm flex items-center justify-center p-[2px]"
      onClick={() => setChecked(!checked)}
    >
      {checked && <FaCheck className="text-blue-400" />}
    </button>
  );
};

export default CustomCheckBox;
