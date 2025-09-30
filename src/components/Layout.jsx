import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "1600px",
        height: "1195px",
        background: "#F6F7F8",
        opacity: 1,
      }}
      className="flex flex-col relative"
    >
      {/* Header Area */}
      <Header />

      {/* Main Content Container (Sidebar and Content Side by Side) */}
      <div className="flex flex-1 mt-4">
        {/* Sidebar Area */}
        <Sidebar />

        {/* Content Area (Placeholder for PatientProfile, BloodPressureGraph, etc.) */}
        <div className="flex-1 h-full bg-[#F6F7F8] p-6 ml-2">
          {/* Placeholder for patient data and graph */}
          <p className="text-gray-600">Content Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
