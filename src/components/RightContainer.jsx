const RightContainer = () => {
  const patient = {
    name: "Jessica Taylor",
    image: "/Images/Layer.png",
    dob: "August 23, 1996",
    gender: "Female",
    contact: "(415) 555-1234",
    emergency: "(415) 555-5678",
    insurance: "Sunrise Health Assurance",
  };

  return (
    <div
      style={{
        top: "108px",
        left: "1216px",
        width: "367px",
        height: "740px",
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
        padding: "24px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
      className="absolute"
    >
      {/* Profile Image */}
      <img
        src={patient.image}
        alt={patient.name}
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          margin: "0 auto",
        }}
      />

      {/* Name */}
      <h2
        style={{
          marginTop: "16px",
          fontSize: "20px",
          fontWeight: "800",
          color: "#072635",
        }}
      >
        {patient.name}
      </h2>

      {/* Info Sections */}
      <div style={{ marginTop: "32px", textAlign: "left" }}>
        {/* DOB */}
        <InfoItem
          icon="/Images/birth.svg"
          label="Date Of Birth"
          value={patient.dob}
        />
        {/* Gender */}
        <InfoItem
          icon="/Images/female.svg"
          label="Gender"
          value={patient.gender}
        />
        {/* Contact */}
        <InfoItem
          icon="/Images/call.svg"
          label="Contact Info."
          value={patient.contact}
        />
        {/* Emergency */}
        <InfoItem
          icon="/Images/call.svg"
          label="Emergency Contacts"
          value={patient.emergency}
        />
        {/* Insurance */}
        <InfoItem
          icon="/Images/insure.svg"
          label="Insurance Provider"
          value={patient.insurance}
        />
      </div>

      {/* Button */}
      <button
        style={{
          marginTop: "40px",
          background: "#01F0D0",
          border: "none",
          borderRadius: "41px",
          padding: "12px 24px",
          color: "#072635",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Show All Information
      </button>
    </div>
  );
};

// Reusable info item component
const InfoItem = ({ icon, label, value }) => (
  <div
    style={{ display: "flex", alignItems: "flex-start", marginBottom: "20px" }}
  >
    <img
      src={icon}
      alt={label}
      style={{
        width: "24px",
        height: "24px",
        marginRight: "12px",
        marginTop: "3px",
      }}
    />
    <div>
      <p
        style={{
          margin: 0,
          fontSize: "12px",
          color: "#707070",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          fontWeight: "bold",
          color: "#072635",
        }}
      >
        {value}
      </p>
    </div>
  </div>
);

export default RightContainer;
