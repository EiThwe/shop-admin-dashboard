import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import CurrentUserBarChart from "../components/CurrentUserBarChart";
import OrderOverviewDoughnutChart from "../components/OrderOverviewDoughnutChart";
import SaleReportSineWave from "../components/SaleReportSineWave";

const AdminDashboard = () => {
  return (
   <Layout>
    <div className="w-full p-8 flex gap-6">
      <div className="w-[70%] ">
        <SaleReportSineWave/>
      </div>
      <div className="w-[30%]"><OrderOverviewDoughnutChart/></div>

    </div>
   </Layout>
  );
};

export default AdminDashboard;
