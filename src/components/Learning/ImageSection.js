import Card from "./Card";
import Image from "./Image";
import img from "../../assets/GroupImg.svg";
import img2 from "../../assets/Group2.svg";
import img3 from "../../assets/Group3.svg";
import img4 from "../../assets/Group4.svg";
import img5 from "../../assets/MaskGroup.svg";
import img6 from "../../assets/MaskGroup1.svg";
import img7 from "../../assets/MaskGroup2.svg";
import img8 from "../../assets/MaskGroup3.svg";
import img9 from "../../assets/MaskGroup4.svg";
import img10 from "../../assets/img.png";

function App() {
  return (
    <div
      className="page-app"
      style={{ backgroundColor: "#140f35", height: "100%" }}
    >
      <h1 style={{ textAlign: "center", fontSize: "20px", color: "#fff" }}>
        How you learn:<span style={{color:"red"}}>80% Action,20% Gyan</span>
      </h1>
      <br />
      <div style={{ textAlign: "center", fontSize: "16px", color: "#fff" }}>
        You attend session every weekend along with others in your batch where
        you experience the following
      </div>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          margin: "40px 0",
        }}
      >
        <Card src={img} displayStyle={"column"} />
        <Card src={img2} displayStyle={"column-reverse"} />
        <Card src={img3} displayStyle={"column"} />
        <Card src={img4} displayStyle={"column-reverse"} />
      </div>

      <div className="leaders-section" style={{ margin: "60px 0" }}>
        <div style={{ color: "#fff", textAlign: "center", margin: "30px 0" }}>
          These are leaders who have engaged with our previous batches
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Image name={"Pooja Dhingra"} text={"Celebrity Food  Entrepreneur"} src={img5}/>
          <Image name={"Naiyya Saggi"} text={"Amongst India’sTop 10 Female Entrepreneurs"} src={img6}/>
          <Image name={"Shveta Brahma"} text={"Director of Marketing,Apple India"} src={img7}/>
          <Image name={"Anita Dongre"} text={"Founder, House ofAnita Dongre"} src={img8}/>
          <Image name={"DCP Tejaswi Satpute"} text={"IPS, Maharashtra"} src={img9}/>
        </div>
      </div>

      <div
        className="schedule-section"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <img src={img10} />
        </div>
        <div style={{ width: "400px" }}>
          <div style={{ color: "orange", fontSize: "22px" }}>Schedule</div>
          <br />
          <h5 style={{ color: "#fff" }}>APPLICATION & SELECTION</h5>
          <div style={{ color: "#fff" }}>Apply to be chosen for program before all seats get <br /> filled by May 2024</div>
          <hr />
          <h4 style={{ color: "#fff" }}>PROGRAM LAUNCH</h4>
          <hr />
          <h4 style={{ color: "#fff" }}>OFFLINE SESSIONS</h4>
          <hr />
          <h4 style={{ color: "#fff" }}>GRADUATION</h4>
          <br />
          <br />
          <div style={{ color: "#fff" }}>Batches start in June,July and November 2024.You <br />will be assigned a batch based on availabity and will<br /> be given time to confirm, after which the next<br />candidate on the waitlist will be accommodated.</div>
        </div>
      </div>
      {/* <div className="footer">
        <div style={{ color: "#fff", textAlign: "center", fontSize: "22px" }}>
          <span style={{ color: "orange" }}>Advantages</span> of the smart
          fellowship
        </div>
      </div> */}
    </div>
  );
}

export default App;
