import React, { useEffect, useState } from "react";

const TablePagination = ({ showing, entries, setPage, initial }) => {
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const prevHandler = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };
  const nextHandler = () => {
    if (activePage < pages.length) {
      setActivePage(activePage + 1);
    }
  };

  useEffect(() => {
    if (setPage) {
      setPage(activePage);
    }
  }, [activePage]);
  useEffect(() => {
    pageCaculation();
  }, [showing, entries]);

  const pageCaculation = () => {
    let pageNumber;
    if (entries > showing) {
      pageNumber = Math.ceil(entries / showing);
    }else{
      pageNumber = Math.ceil(showing / entries);
    }
    const pageArr = [];
    //generate pages
    for (let i = 1; i <= pageNumber; i++) {
      pageArr.push(i);
    }
    setPages(pageArr);
  };

  return (
    <div className="flex justify-between my-3 items-center">
      <h6 className="text-sm font-medium text-gray-600">
        Showing {initial ? initial + 1 : 1} to{" "}
        {showing < entries ? showing : entries} of {entries} entries
      </h6>
      <div className="flex font-medium text-sm">
        <button
          className="border-y border-l rounded-l-lg bg-[#E9ECEF] text-gray-600 px-[10px] h-[30px]"
          onClick={prevHandler}
        >
          Previous
        </button>
        {pages?.map((page) => (
          <button
            className={`w-[30px] h-[30px] border-y border-r ${
              activePage == page && "text-white bg-blue-400 border-blue-400"
            }`}
            key={page}
            onClick={() => {
              setActivePage(page);
            }}
          >
            {page}
          </button>
        ))}

        <button
          className="border-y border-r rounded-r-lg bg-[#E9ECEF] text-gray-600 px-[10px] h-[30px]"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
