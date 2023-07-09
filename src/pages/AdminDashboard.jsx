import React from "react";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";
import CurrentUserBarChart from "../components/CurrentUserBarChart";
import OrderOverviewDoughnutChart from "../components/OrderOverviewDoughnutChart";
import SaleReportSineWave from "../components/SaleReportSineWave";
import UserActivityLineChart from "../components/UserActivityLineChart";
import SoldByItemList from "../components/SoldByItemList";
import DashCard from "../components/DashCard";
import { dashCardData } from "../utils/dashCardData";
import TableVendorProfile from "../components/TableVendorProfile";
import RecentOrder from "../components/RecentOrder";
import NewCustomer from "../components/NewCustomer";
import TopProducts from "../components/TopProducts";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="w-full flex flex-col gap-8 p-8 bg-gray-100">
        <div className="w-full  grid grid-cols-4 gap-8">
          {dashCardData.map((data, i) => (
            <DashCard key={i} {...data} />
          ))}
        </div>
        <div className="w-full flex gap-8">
          <div className="w-[65%] ">
            <SaleReportSineWave />
          </div>
          <div className="w-[35%]">
            <OrderOverviewDoughnutChart />
          </div>
        </div>

        <div className="w-full flex gap-8">
          <div className="w-[65%] ">
            <UserActivityLineChart />
          </div>
          <div className="w-[35%]">
            <CurrentUserBarChart />
          </div>
        </div>
        <div className="w-full flex gap-8">
          <div className="w-[65%] ">
            <UserActivityLineChart />
          </div>
          <div className="w-[35%]">
            <SoldByItemList />
          </div>
        </div>
        <div className="w-full">
          <RecentOrder />
        </div>
        <div className="w-full flex gap-8">
          <div className="w-[40%] ">
            <NewCustomer />
          </div>
          <div className="w-[60%]">
            <TopProducts />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default AdminDashboard;
