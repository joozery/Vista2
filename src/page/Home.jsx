import React from "react";
import Navbar from "../components/Navbar/Navbar"; // ดึง Navbar
import SectionVideo from "../components/SectionVideo/Sectionvideo"; // ดึง SectionVideo
import WhyFundingPips from "../components/SectionVideo/WhyFundingPips"; // ดึง WhyFundingPips
import Footer from "../components/Footer/Footer"; // ดึง Footer

const Home = () => {
  return (
    <div>
      <Navbar /> {/* แสดง Navbar */}
      <div className="home-content">
        <SectionVideo /> {/* แสดง SectionVideo */}
        <WhyFundingPips /> {/* แสดง WhyFundingPips */}
      </div>
      <Footer /> {/* เพิ่ม Footer */}
    </div>
  );
};

export default Home;
