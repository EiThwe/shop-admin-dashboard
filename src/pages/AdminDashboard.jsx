import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import CurrentUserBarChart from "../components/CurrentUserBarChart";

const AdminDashboard = () => {
  return (
   <Layout>
    <div className="w-full p-8 flex gap-6">
      <div className="w-[70%] border rounded-md bg-white shadow-md h-[500px]"></div>
      <div className="w-[30%]"><CurrentUserBarChart/></div>

    </div>
   </Layout>
  );
};

export default AdminDashboard;
