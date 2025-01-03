import React from "react";
import "./Home.css";

// รูปภาพตัวอย่าง
import image1 from "/IT_Poly/src/images/image1.jpg";
import image2 from "/IT_Poly/src/images/image2.jpg";
import image3 from "/IT_Poly/src/images/image3.jpg";
import image4 from "/IT_Poly/src/images/image4.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h1>
          <p className="intro">
            วิทยาลัยเทคโนโลยีโปลิเทคนิคลานนา เชียงใหม่ ขอเชิญทุกท่านร่วมเรียนรู้และพัฒนาความสามารถด้านเทคโนโลยีสารสนเทศ
            เพื่อเตรียมตัวสู่โลกดิจิทัลที่ไม่หยุดพัฒนา
          </p>
          <div className="philosophy">
            <h2>ปรัชญาของสาขา</h2>
            <p>
              สาขาเทคโนโลยีสารสนเทศของเราเน้นการเรียนการสอนที่มุ่งสู่การพัฒนาและประยุกต์ใช้เทคโนโลยี
              เพื่อสร้างบุคลากรที่มีความสามารถในการแก้ไขปัญหาทางเทคโนโลยีและสามารถทำงานได้ในหลากหลายภาคอุตสาหกรรม
            </p>
            <h2>ปรัชญาของวิทยาลัย</h2>
            <p>“ความรู้คู่คุณธรรม” วิทยาลัยกำหนดปรัชญาการศึกษาโดยมุ่งพัฒนาผู้เรียนให้มีความสามารถทางวิชาการ มีทักษะในการปฏิบัติงาน
              และมีคุณสมบัติที่จำเป็นตามลักษณะอาชีพ พร้อมที่จะทำงานร่วมกับผู้อื่น หรือทำงานเป็นอิสระ สามารถปรับปรุงตนให้ทันต่อวิวัฒนาการทางเทคโนโลยี
              มีระเบียบวินัย มีความสำนึกในจรรยาบรรณวิชาชีพ ควบคู่ไปกับคุณธรรมในการดำรงชีวิต มีความรับผิดชอบต่อตนเอง และสังคม</p>
          </div>
        </div>

        <div className="home-images">
          <img src={image1} alt="รูปภาพ 1" className="home-image" />
          <img src={image2} alt="รูปภาพ 2" className="home-image" />
          <img src={image3} alt="รูปภาพ 3" className="home-image" />
          <img src={image4} alt="รูปภาพ 4" className="home-image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
