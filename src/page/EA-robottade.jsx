import React from "react";
import "./EArobottade.css"; // ใช้สำหรับสไตล์
import phoneImage from "../assets/phone-image.png"; // ใส่ภาพโทรศัพท์
import appStoreLogo from "../assets/apple.svg"; // ใส่โลโก้ App Store
import playStoreLogo from "../assets/google.svg"; // ใส่โลโก้ Google Play
import FAQ from "../components/FAQ/FAQ"; // นำเข้า Component FAQ

const EArobottade = () => {
  return (
    <>
      <div className="ea-robottade-container">
        <div className="container">
          <div className="header-section">
            <h1>
              สมัครพอร์ตหุ้น เริ่มลงทุนง่าย  ด้วยแอป <span>MetaTrader 5</span>
            </h1>
            <p>
              MetaTrader 5 แอปพลิเคชันเพื่อการลงทุนที่คนยุคใหม่ต้องมี เปิดพอร์ตหุ้นออนไลน์
              เลือกลงทุนในหลักทรัพย์ที่หลากหลาย พร้อมอัปเดตข่าวสารทางการเงิน
              และบทวิเคราะห์จากผู้เชี่ยวชาญได้ในแอปเดียว ให้คุณไม่พลาดทุกความเคลื่อนไหวในโลกการเงิน
            </p>
            <div className="download-section">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img src={appStoreLogo} alt="App Store" />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img src={playStoreLogo} alt="Google Play" />
              </a>
            </div>
          </div>
          <div className="image-section">
            <img src={phoneImage} alt="MetaTrader App" />
          </div>
        </div>
      </div>
      {/* แยก FAQ Component ออกมาอยู่นอก container */}
      <div className="faq-section-wrapper">
        <FAQ />
      </div>
    </>
  );
};

export default EArobottade;
