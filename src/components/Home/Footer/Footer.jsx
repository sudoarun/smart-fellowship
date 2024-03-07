import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div>
          <button className="button-box">Learning Experience &gt; </button>
        </div>
        <div className="bottom-footer-box">
          <div className="container-f">
            <div className="container1">
              <div className="logo">
                <img
                  src={require("./SFlogo.png")}
                  style={{ width: "350px", height: "220px" }}
                  alt="Instagram"
                />
                <img src={require("./Group482051.png")} alt="Instagram" />
              </div>

              <div className="data">
                <h3>
                  Enabling graduates to master soft skills and build automation
                  proof careers
                </h3>
              </div>
            </div>

            <div className="container2">Home</div>
            <div className="container3">
              <div className="container-subsection">
                <h6>Learning Experience</h6>
                <h6 style={{ color: "gray" }}> What you Learn</h6>
                <h6 style={{ color: "gray" }}>How you Learn</h6>
                <h6 style={{ color: "gray" }}>Schedule</h6>
                <h6 style={{ color: "gray" }}>Advantages</h6>
                <h6 style={{ color: "gray" }}>Testimonials</h6>
              </div>
            </div>
            <div className="container4">
              <div className="container-subsection">
                <h6>About</h6>
                <h6 style={{ color: "gray" }}>Our Partners</h6>
                <h6 style={{ color: "gray" }}>Meet the Team</h6>
                <h6 style={{ color: "gray" }}>Media</h6>
                <h6>Contact</h6>
              </div>
            </div>
            <div className="container5">
              <div className="container-subsection">
                <h6>Apply</h6>
                <h6 style={{ color: "gray" }}>Selection Criteria</h6>
                <h6 style={{ color: "gray" }}>Application Process</h6>
                <h6 style={{ color: "gray" }}>Application Form</h6>
              </div>
            </div>
          </div>

          <div className="social-media">instagram linkedin</div>

          <div className="bottom-line">
            The Smart Fellowship® is a registered trademark of X Billion Skills
            Lab Pvt Ltd. | Office Address 7, Bina Apartments, Khar West, Mumbai
            400052
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
