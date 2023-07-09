import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSideBar,setShowSideBar] = useState(true);
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar showSideBar={showSideBar} />
      <div className="flex flex-col w-full h-screen">
        <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <div className="pt-[70px] w-full h-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
