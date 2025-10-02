import "./styles/custom.css";

const SecondContainer = () => {
  const diagnosticData = [
    {
      problem: "Hypertension",
      description: "Chronic high blood pressure",
      status: "Under Observation",
    },
    {
      problem: "Type 2 Diabetes",
      description: "Insulin resistance and elevated blood sugar",
      status: "Cured",
    },
    {
      problem: "Asthma",
      description: "Recurrent episodes of bronchial constriction",
      status: "Inactive",
    },
    {
      problem: "Osteoarthritis",
      description: "Degenerative joint disease",
      status: "Untreated",
    },
  ];

  return (
    <div
      className="absolute"
      style={{
        top: "827px",
        left: "417px",
        width: "766px",
        height: "348px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
        padding: "24px",
        boxSizing: "border-box",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          font: "normal normal 800 24px/33px Manrope",
          color: "#072635",
          marginBottom: "20px",
        }}
      >
        Diagnostic List
      </h2>

      {/* Scrollable table area */}
      <div
        className="custom-scroll"
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: "0",
            tableLayout: "fixed",
          }}
        >
          <thead>
            <tr
              style={{
                backgroundColor: "#F6F7F8",
                height: "48px",
                fontWeight: 600,
                color: "#072635",
                fontSize: "14px",
              }}
            >
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderTopLeftRadius: "24px",
                  borderBottomLeftRadius: "24px",
                }}
              >
                Problem/Diagnosis
              </th>
              <th style={{ padding: "12px", textAlign: "left" }}>
                Description
              </th>
              <th
                style={{
                  padding: "12px",
                  textAlign: "left",
                  borderTopRightRadius: "24px",
                  borderBottomRightRadius: "24px",
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {diagnosticData.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "2px solid #F6F7F8",
                  fontSize: "14px",
                  color: "#072635",
                }}
              >
                <td style={{ padding: "12px", wordBreak: "break-word" }}>
                  {item.problem}
                </td>
                <td style={{ padding: "12px", wordBreak: "break-word" }}>
                  {item.description}
                </td>
                <td style={{ padding: "12px" }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondContainer;
