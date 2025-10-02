import React, { useState, useEffect } from "react";
import "./styles/custom.css";

const Sidebar = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev/patients", {
      headers: {
        Authorization: "Basic " + btoa("coalition:skills-test"),  //accessing and decoding the authentication
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPatients(data);
        } else {
          console.error("Unexpected API response:", data);
        }
      })
      .catch((error) => console.error("Error fetching patients:", error));
  }, []);

  return (
    <div
      className="absolute custom-scroll"
      style={{
        top: "122px",
        left: "18px",
        width: "367px",
        height: "1053px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
        overflowY: "auto",
        overflowX: "hidden",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Patient Heading */}
      <h3
        style={{
          font: "normal normal 800 24px/33px Manrope",
          color: "#072635",
          marginBottom: "20px",
        }}
      >
        Patients
      </h3>

      {/* Patient List */}
      <div className="flex flex-col gap-4">
        {patients.map((patient, index) => {
          const isJessicaTaylor = patient.name === "Jessica Taylor";

          return (
            <div
              key={patient.id || index}
              style={{
                width: "100%",
                height: "80px",
                background: isJessicaTaylor
                  ? "#D8FCF7 0% 0% no-repeat padding-box"
                  : "transparent",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                borderRadius: "8px",
              }}
            >
              {/* Profile Image */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: `url(${patient.profile_picture}) center center / cover no-repeat`,
                  borderRadius: "50%",
                  marginRight: "12px",
                }}
              ></div>

              {/* Patient Info */}
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    font: "normal normal bold 14px/19px Manrope",
                    color: "#072635",
                    margin: 0,
                  }}
                >
                  {patient.name}
                </p>
                <p
                  style={{
                    font: "normal normal normal 12px/14px Manrope",
                    color: "grey",
                    margin: 0,
                  }}
                >
                  {patient.gender}, {patient.age}
                </p>
              </div>

              {/* Three Dots Icon */}
              <div
                style={{
                  width: "4px",
                  height: "18px",
                  background: `url('/Images/three.svg') center center / contain no-repeat`,
                  cursor: "pointer",
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
