import Header from "./Header";
import Sidebar from "./Sidebar";
import Container from "./Container";
import SecondContainer from "./SecondContainer";
import RightContainer from "./RightContainer";
import BottomRightContainer from "./BottomRightContainer";

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

      {/* Main Content Container (Sidebar, Container, Second Container, Right Container, Bottom Right Container, and Additional Content) */}
      <div className="flex flex-1 mt-4">
        {/* Sidebar Area */}
        <Sidebar />

        {/* Container Area */}
        <Container />

        {/* Second Container Area */}
        <SecondContainer />

        {/* Right Container Area */}
        <RightContainer />

        {/* Bottom Right Container Area */}
        <BottomRightContainer />
      </div>
    </div>
  );
};

export default Layout;
