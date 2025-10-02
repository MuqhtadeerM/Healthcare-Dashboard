import "./styles/custom.css";

const BottomRightContainer = () => {
  const labResults = [
    "Blood Tests",
    "CT Scans",
    "Radiology Reports",
    "X-Rays",
    "Urine Test",
  ];

  const activeResult = "CT Scans";

  return (
    <div
      style={{
        top: "880px",
        left: "1215px",
        width: "367px",
        height: "296px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
        padding: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
      className="absolute"
    >
      {/* Lab Results Heading */}
      <h2
        style={{
          font: "normal normal 800 24px/33px Manrope",
          color: "#072635",
          margin: 0,
        }}
      >
        Lab Results
      </h2>

      {/* Scrollable Lab Results List */}
      <div
        className="custom-scroll"
        style={{
          marginTop: "24px",
          height: "190px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {labResults.map((result, index) => {
          const isActive = result === activeResult;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 8px",
                background: isActive ? "#F6F7F8" : "transparent",
                borderRadius: "8px",
                cursor: "pointer",
                font: "normal normal medium 14px/20px Manrope",
                color: "#072635",
              }}
            >
              <span>{result}</span>
              <img
                src="/Images/download.svg"
                alt="Download"
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomRightContainer;
