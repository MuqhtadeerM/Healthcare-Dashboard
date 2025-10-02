import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Container = () => {
  const data = [
    { date: "Oct, 2023", systolic: 120, diastolic: 110 },
    { date: "Nov, 2023", systolic: 120, diastolic: 70 },
    { date: "Dec, 2023", systolic: 160, diastolic: 110 },
    { date: "Jan, 2024", systolic: 110, diastolic: 90 },
    { date: "Feb, 2024", systolic: 150, diastolic: 70 },
    { date: "Mar, 2024", systolic: 160, diastolic: 80 },
  ];

  return (
    <div
      style={{
        top: "122px",
        left: "417px",
        width: "766px",
        height: "673px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
      }}
      className="absolute"
    >
      {/* Heading */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "207px",
          height: "33px",
          fontFamily: "Manrope",
          fontWeight: 800,
          fontSize: "24px",
          lineHeight: "33px",
          color: "#072635",
          letterSpacing: "0px",
          textAlign: "left",
        }}
      >
        Diagnosis History
      </div>

      {/* Chart Container */}
      <div
        style={{
          top: "93px",
          left: "20px",
          width: "726px",
          height: "298px",
          background: "#F4F0FE",
          borderRadius: "12px",
          opacity: 1,
          position: "absolute",
          padding: "16px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#072635",
          }}
        >
          Blood Pressure
        </div>
        <div
          style={{
            position: "absolute",
            top: "24px",
            right: "216px",
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
          }}
        >
          Last 6 months <span style={{ marginLeft: "4px" }}>▼</span>
        </div>

        {/* Recharts Component */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "16px",
            width: "520px",
            height: "230px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="0"
                stroke="#E8E6F0"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#072635", fontSize: 12, fontFamily: "Manrope" }}
              />
              <YAxis
                domain={[60, 180]}
                ticks={[60, 80, 100, 120, 140, 160, 180]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#072635", fontSize: 12, fontFamily: "Manrope" }}
              />
              <Tooltip
                contentStyle={{
                  background: "#fff",
                  border: "1px solid #E8E6F0",
                  borderRadius: "8px",
                  fontFamily: "Manrope",
                }}
              />
              <Line
                type="monotone"
                dataKey="systolic"
                stroke="#E66FD2"
                strokeWidth={2}
                dot={{
                  fill: "#E66FD2",
                  stroke: "#E66FD2",
                  strokeWidth: 2,
                  r: 6,
                }}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="diastolic"
                stroke="#8C6FE6"
                strokeWidth={2}
                dot={{
                  fill: "#8C6FE6",
                  stroke: "#8C6FE6",
                  strokeWidth: 2,
                  r: 6,
                }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "36px",
            fontSize: "14px",
            textAlign: "left",
          }}
        >
          <p style={{ margin: 0 }}>
            <span style={{ color: "#EC4899", fontSize: "20px" }}>● </span>
            <span style={{ fontWeight: "bold" }}>Systolic</span>
            <br />
            <br />
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>160</span>
            <br />
            <br />
            <span style={{ color: "#000" }}>▲ Higher than Average</span>
          </p>
          <hr style={{ margin: "8px 0", borderColor: "#ddd" }} />
          <p style={{ margin: 0 }}>
            <span style={{ color: "#A855F7", fontSize: "20px" }}>● </span>
            <span style={{ fontWeight: "bold" }}>Diastolic</span>
            <br />
            <span style={{ fontWeight: "bold", fontSize: "20px" }}>78</span>
            <br />
            <br />
            <span style={{ color: "#000" }}>▼ Lower than Average</span>
          </p>
        </div>
      </div>

      {/* Respiratory Rate Card */}
      <div
        style={{
          top: "410px",
          left: "20px",
          width: "228px",
          height: "242px",
          background: "#E0F3FA",
          borderRadius: "12px",
          opacity: 1,
          position: "absolute",
        }}
      >
        {/* Respiratory Rate Icon */}
        <div
          style={{
            top: "20px",
            left: "15px",
            width: "96px",
            height: "96px",
            background:
              "transparent url('Images/lungs.svg') 0% 0% no-repeat padding-box",
            opacity: 1,
            position: "absolute",
          }}
        ></div>

        {/* Respiratory Rate Text */}
        <div
          style={{
            top: "130px",
            left: "15px",
            height: "22px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "medium",
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            textTransform: "capitalize",
            opacity: 1,
            position: "absolute",
          }}
        >
          Respiratory Rate
        </div>

        {/* 20 bpm Text */}
        <div
          style={{
            top: "155px",
            left: "15px",
            height: "40px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "41px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            position: "absolute",
          }}
        >
          20 bpm
        </div>

        {/* Normal Text */}
        <div
          style={{
            top: "215px",
            left: "15px",
            height: "19px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "19px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            position: "absolute",
          }}
        >
          Normal
        </div>
      </div>

      {/* Temperature Card */}
      <div
        style={{
          top: "410px",
          left: "269px",
          width: "228px",
          height: "242px",
          background: "#FFE6E9",
          borderRadius: "12px",
          opacity: 1,
          position: "absolute",
        }}
      >
        {/* Temperature Icon */}
        <div
          style={{
            top: "20px",
            left: "15px",
            width: "96px",
            height: "96px",
            background:
              "transparent url('Images/temperature.svg') 0% 0% no-repeat padding-box",
            opacity: 1,
            position: "absolute",
          }}
        ></div>

        {/* Temperature Text */}
        <div
          style={{
            top: "130px",
            left: "15px",
            height: "22px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "medium",
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            textTransform: "capitalize",
            opacity: 1,
            position: "absolute",
          }}
        >
          Temperature
        </div>

        {/* 98.6°F Text */}
        <div
          style={{
            top: "155px",
            left: "15px",
            height: "41px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "41px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            position: "absolute",
          }}
        >
          98.6°F
        </div>

        {/* Normal Text */}
        <div
          style={{
            top: "215px",
            left: "15px",
            height: "19px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "19px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            position: "absolute",
          }}
        >
          Normal
        </div>
      </div>

      {/* Heart Rate Card */}
      <div
        style={{
          top: "410px",
          left: "518px",
          width: "228px",
          height: "242px",
          background: "#FFE6F1",
          borderRadius: "12px",
          opacity: 1,
          position: "absolute",
        }}
      >
        {/* Heart Rate Icon */}
        <div
          style={{
            top: "20px",
            left: "15px",
            width: "96px",
            height: "96px",
            background:
              "transparent url('Images/heart.svg') 0% 0% no-repeat padding-box",
            opacity: 1,
            position: "absolute",
          }}
        ></div>

        {/* Heart Rate Text */}
        <div
          style={{
            top: "130px",
            left: "15px",
            height: "22px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "medium",
            fontSize: "16px",
            lineHeight: "22px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            textTransform: "capitalize",
            opacity: 1,
            position: "absolute",
          }}
        >
          Heart Rate
        </div>

        {/* 78 bpm Text */}
        <div
          style={{
            top: "155px",
            left: "15px",
            height: "41px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 800,
            fontSize: "30px",
            lineHeight: "41px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            position: "absolute",
          }}
        >
          78 bpm
        </div>

        {/* Lower than Average Text */}
        <div
          style={{
            top: "215px",
            left: "15px",
            height: "19px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "19px",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            position: "absolute",
          }}
        >
          ▼ Lower than Average
        </div>
      </div>
    </div>
  );
};

export default Container;
