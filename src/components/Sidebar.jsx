
const Sidebar = () => {
  return (
    <div
      style={{
        top: "122px",
        left: "18px",
        width: "367px",
        height: "1023px", // Reduced from 1054px to fit within 1195px (122px top + 72px header + 1023px = 1217px, adjusted to 1195px total)
        background: "#FFFFFF",
        borderRadius: "16px",
        opacity: 1,
      }}
      className="absolute"
    >
      {/* Placeholder for sidebar content */}
      <p className="text-gray-600 p-4">Sidebar Placeholder</p>
    </div>
  );
};

export default Sidebar;
