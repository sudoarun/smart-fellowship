import React from "react";
import Footer from "./Footer/Footer";
import Navbar from "../Header/Navbar";

const Home = () => {
  return (
    <div>
      
      <Footer></Footer>
      <Navbar />
      <section className="choosenSection">
        <div className="container">
          <div className="choosenContentHeader">
            <span className="choosenHeader">
              Want to be <span className="gradient-text">the chosen one</span>{" "}
              for that dream job or promotion?
            </span>
            <p>
              Apply to join the prestigious <br />
              <bold>The Smart Fellowship: Soft Skills for Success program</bold>
            </p>
            <div>
              <span className="d-block">Learn 8+ Futuristic Soft Skills</span>
              <hr />
              <span className="d-block">40 Hours ON Weekends only</span>
              <hr />
              <span className="d-block">GRADUATE WITH A Certificate</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
