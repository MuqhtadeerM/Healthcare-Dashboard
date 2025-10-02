import "./styles/custom.css";
const Header = () => {
  return (
    <div
      style={{
        top: "18px",
        left: "18px",
        width: "1565px",
        height: "72px",
        background: "#FFFFFF",
        borderRadius: "70px",
        opacity: 1,
      }}
      className="absolute flex justify-between p-4"
    >
      {/* Logo Area */}
      <div
        style={{
          top: "12px",
          left: "32px",
          width: "211px",
          height: "48px",
          background: `transparent url('/Images/TestLogo.png') 0% 0% no-repeat padding-box`,
          opacity: 1,
        }}
        className="absolute"
      ></div>

      {/* Centered Icons and Headings Area */}
      <div
        style={{
          top: "5px",
          left: "455px",
          width: "663px",
          height: "63px",
          opacity: 1,
        }}
        className="absolute flex justify-between items-center"
      >
        {/* Icon 1 and Heading/Button 1 (Overview) */}
        <div
          style={{
            top: "28px",
            left: "0px",
            width: "16px",
            height: "17px",
            background: `transparent url('/Images/overview.svg') 0% 0% no-repeat padding-box`,
            opacity: 1,
          }}
          className="absolute"
        ></div>
        <button
          style={{
            top: "27px",
            left: "25px",
            width: "64px",
            height: "19px",
            font: "normal normal bold 14px/19px Manrope",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="absolute"
        >
          Overview
        </button>

        {/* Icon 2 and Heading/Button 2 (Patients) */}
        <div
          style={{
            top: "16px",
            left: "116px",
            width: "122px",
            height: "41px",
            background: "#01F0D0",
            borderRadius: "41px",
            opacity: 1,
          }}
          className="absolute flex items-center justify-center gap-2"
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              background: `url('/Images/patients.svg') center center / contain no-repeat`,
            }}
          ></div>
          <span
            style={{
              font: "normal normal bold 14px/19px Manrope",
              color: "#072635",
            }}
          >
            Patients
          </span>
        </div>

        {/* Icon 3 and Heading/Button 3 (Schedule) */}
        <div
          style={{
            top: "28px",
            left: "264px",
            width: "16px",
            height: "17px",
            background: `transparent url('/Images/schedule.svg') 0% 0% no-repeat padding-box`,
            opacity: 1,
          }}
          className="absolute"
        ></div>
        <button
          style={{
            top: "27px",
            left: "289px",
            width: "64px",
            height: "19px",
            font: "normal normal bold 14px/19px Manrope",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="absolute"
        >
          Schedule
        </button>

        {/* Icon 4 and Heading/Button 4 (Message) */}
        <div
          style={{
            top: "28px",
            left: "396px",
            width: "20px",
            height: "17px",
            background: `transparent url('/Images/message.svg') 0% 0% no-repeat padding-box`,
            opacity: 1,
          }}
          className="absolute"
        ></div>
        <button
          style={{
            top: "27px",
            left: "421px",
            width: "64px",
            height: "19px",
            font: "normal normal bold 14px/19px Manrope",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="absolute"
        >
          Message
        </button>

        {/* Icon 5 and Heading/Button 5 (Transactions) */}
        <div
          style={{
            top: "28px",
            left: "528px",
            width: "22px",
            height: "17px",
            background: `transparent url('/Images/transactions.svg') 0% 0% no-repeat padding-box`,
            opacity: 1,
          }}
          className="absolute"
        ></div>
        <button
          style={{
            top: "27px",
            left: "553px",
            width: "64px",
            height: "19px",
            font: "normal normal bold 14px/19px Manrope",
            letterSpacing: "0px",
            color: "#072635",
            textAlign: "left",
            opacity: 1,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          className="absolute"
        >
          Transactions
        </button>
      </div>

      {/* End Section with Profile and Settings */}
      <div
        style={{
          top: "16px",
          left: "1309px",
          width: "241px",
          height: "44px",
          opacity: 1,
        }}
        className="absolute flex items-center gap-4"
      >
        {/* Profile Image */}
        <div
          style={{
            width: "44px",
            height: "44px",
            background: `url('/Images/doctor.png') center center / cover no-repeat`,
            borderRadius: "50%",
          }}
        ></div>

        {/* Name and Title Container */}
        <div
          className="flex flex-col justify-center"
          style={{ height: "44px" }}
        >
          <p
            style={{
              font: "normal normal bold 14px/19px Manrope",
              color: "#072635",
              margin: 0,
            }}
          >
            Dr. Jose Simmons
          </p>
          <p
            style={{
              font: "normal normal bold 12px/14px Manrope",
              color: "grey",
              margin: 0,
            }}
          >
            General Practitioner
          </p>
        </div>

        {/* Settings Icon */}
        <div
          style={{
            width: "19px",
            height: "20px",
            background: `url('/Images/settings.svg') center center / contain no-repeat`,
          }}
        ></div>

        {/* Three Dots Icon */}
        <div
          style={{
            width: "4px",
            height: "18px",
            background: `url('/Images/three.svg') center center / contain no-repeat`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Header;
