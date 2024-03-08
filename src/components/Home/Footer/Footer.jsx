import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="mt-5 pb-3 footer">
      <div className="container">
        <div className="d-flex justify-content-end">
          <button className="button-box">
            Learning Experience{" "}
            <img className="ms-2" src="/navigate_next.svg" />
          </button>
        </div>
        <div className="footer-main">
          <hr />
          <div className="row text-white pt-4">
            <div className="col-12 col-lg-5">
              <div className="footer-first-col">
                <div className="logo d-flex align-items-center">
                  <img src={require("./SFlogo.png")} alt="Instagram" />
                  <img src={require("./Group482051.png")} alt="Instagram" />
                </div>

                <div className="note">
                  <p>
                    Enabling graduates to master soft skills and build
                    automation proof careers
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-7 d-flex justify-content-between gap-5 h6FontSize">
              <div className="container2">
                <h6>Home</h6>
              </div>
              <div className="container3">
                <div className="container-subsection">
                  <h6>Learning Experience</h6>
                  <h6> What you Learn</h6>
                  <h6>How you Learn</h6>
                  <h6>Schedule</h6>
                  <h6>Advantages</h6>
                  <h6>Testimonials</h6>
                </div>
              </div>
              <div className="container4">
                <div className="container-subsection">
                  <h6>About</h6>
                  <h6>Our Partners</h6>
                  <h6>Meet the Team</h6>
                  <h6>Media</h6>
                  <h6 className="color-inherit" style={{ fontWeight: "500" }}>
                    Contact
                  </h6>
                </div>
              </div>
              <div className="container5 d-none d-lg-block">
                <div className="container-subsection">
                  <h6>Apply</h6>
                  <h6>Selection Criteria</h6>
                  <h6>Application Process</h6>
                  <h6>Application Form</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="social-media">
            <img src="/instagram.svg" className="me-3" />
            <img src="/linkedin.svg" />
          </div>
          <hr />
          <div className="bottom-line text-white text-center">
            The Smart Fellowship® is a registered trademark of X Billion Skills
            Lab Pvt Ltd. | Office Address 7, Bina Apartments, Khar West, Mumbai
            400052
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
