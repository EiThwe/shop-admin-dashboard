import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { IoMdArrowDropdown } from "react-icons/io";

const Date = () => {
  const reportRangeRef = useRef();

  //   const [startDate, setStartDate] = useState(moment().subtract(29, "days"));
  //   const [endDate, setEndDate] = useState(moment());
  const [dateRange, setDateRange] = useState({
    start: moment().subtract(29, "days"),
    end: moment(),
  });

  useEffect(() => {
    function setDate(start, end) {
      setDateRange({ start, end });
    }

    const ranges = {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last 7 Days": [moment().subtract(6, "days"), moment()],
      "Last 30 Days": [moment().subtract(29, "days"), moment()],
      "This Month": [moment().startOf("month"), moment().endOf("month")],
      "Last Month": [
        moment().subtract(1, "month").startOf("month"),
        moment().subtract(1, "month").endOf("month"),
      ],
    };

    const options = {
      startDate: dateRange.start,
      endDate: dateRange.end,
      ranges,
      opens: "left",
    };

    // reportRangeRef.current.addEventListener("click", () => {
    //   const { start, end } = dateRange;
    //   setDate(start, end);
    // });

    const daterangepicker = new DateRangePicker(
      reportRangeRef.current,
      options,
      setDate
    );

    return () => {
      daterangepicker.remove();
    };
  }, []);

  return (
    <div
      ref={reportRangeRef}
      className="flex justify-center items-center bg-white cursor-pointer   text-sm text-gray-400 relative"
    >
      <span className="px-2">
        {dateRange.start.format("MMM D YYYY")} -{" "}
        {dateRange.end.format("MMM D YYYY")}
      </span>
      <IoMdArrowDropdown className="text-xl text-gray-500" />
    </div>
  );
};

export default Date;
