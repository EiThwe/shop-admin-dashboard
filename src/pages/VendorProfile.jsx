import React, { useState } from "react";


import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

import UserInformation from "../components/UserInformation";
import ContactInformation from "../components/ContactInformation";
import ProfileContainer from "../components/ProfileContainer";
import SettingContainer from "../components/SettingContainer";
import VendorInformation from "../components/VendorInformation";
import VendorProfileContainer from "../components/VendorProfileContainer";

const VendorProfile = () => {
  const [showEditUser, setShowEditUser] = useState(false);
  const [active, setActive] = useState("profile");

  const onClickHandler = () => {
    setShowEditUser(true);
  };
  return (
    <Layout>
      <div className="w-full p-8 bg-gray-100 min-h-full">
        <PageHeader
          header={"Vendor Profile"}
          pageName={"Profile"}
          button={"Edit"}
          pathName={"/vendor-list"}
          onClick={onClickHandler}
        />
        <div className="w-full bg-white rounded-2xl text-gray-400  flex overflow-hidden">
          <div className="w-[28%] p-6  border-r border-gray-200">
            <div className="pb-10 border-b border-gray-200">
              <VendorInformation />
            </div>
            <div className="pt-10 pb-10">
              <ContactInformation />
            </div>
          </div>
          <div className="w-[72%] h-full">
            <div className="flex px-6 gap-10 border-b border-gray-200 text-sm font-medium">
              <button
                onClick={() => setActive("profile")}
                className={`py-6 border-b-[2px] translate-y-[1px] ${
                  active == "profile" ? "border-blue-400" : "border-transparent"
                }`}
              >
                Profile
              </button>
              <button
                onClick={() => setActive("setting")}
                className={`py-6 border-b-[2px] translate-y-[1px] ${
                  active == "setting" ? "border-blue-400" : "border-transparent"
                }`}
              >
                Setting
              </button>
            </div>
            <div className="w-full p-6">
              {active == "profile" && <VendorProfileContainer />}
              {active == "setting" && <SettingContainer />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
};

export default VendorProfile;
