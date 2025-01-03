import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <h2 className="contact-title">ติดต่อเรา</h2>
        <div className="contact-info">
          <p>วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่</p>
          <p>ที่อยู่: 2 ถนนสุขเกษม ต.ป่าตัน อ.เมือง จ.เชียงใหม่ 50300</p>
          <p>โทร: 053-408-223</p>
          <p>อีเมล: lannapoly@lannapoly.ac.th</p>
        </div>
        <form className="contact-form">
          <h3>ส่งข้อความหาเรา</h3>
          <input type="text" placeholder="ชื่อของคุณ" required />
          <input type="email" placeholder="อีเมลของคุณ" required />
          <textarea placeholder="ข้อความของคุณ" rows="5" required></textarea>
          <button type="submit">ส่งข้อความ</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
