import Footer from "./Footer/Footer";
import Navbar from "../Header/Navbar";
import "./Home.css";
import image1 from "../../assets/image1.png";
import SectionsThird from "./SectionsThird";
import { useEffect, useState } from "react";

const Home = () => {
  const [isMobile, setIsmobile] = useState(false);
  const handleResize = () => {
    setIsmobile(window.outerWidth < 500);
  };
  useEffect(() => {
    handleResize();
  }, []);
  // console.log(isMobile);
  return (
    <div>
      <Navbar />
      <section className={isMobile ? "choosenSectionMob" : "choosenSection"}>
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
            <span>
              There is no fee, selected{" "}
              <span className="gradientSpan">#SmartNaaris</span> from <br />{" "}
              Lucknow and Ayodhya will be awarded a scholarship
            </span>
          </div>
        </div>
      </section>

      <section className="container">
        <div className=" sectionTwo">
          <div className="row align-items-center flex-lg-row flex-column-reverse">
            <div className="col-12 col-lg-7">
              <img
                src={image1}
                alt="leftImage"
                className="img-fluid sectionTwo__image"
              />
            </div>
            <div className="col-12 col-lg-5 p-4">
              <h3 className="right-colum__heading">
                <span className="gradientSpan">What</span> is The Smart
                Fellowship?
              </h3>
              <br />
              <p className="right-column__paragraph">
                Employers now prefer candidates who know how to
                <br />
                apply soft skills like creative problem solving & critical
                <br />
                thinking in addition to technical skills.
                <br />
                <br />
                Through immersive{" "}
                <span className="gradient-text">roleplay experiences</span>, you
                <br />
                master{" "}
                <span className="gradient-text">
                  8+ futuristic soft skills
                </span>{" "}
                that empower you
                <br /> to work alongside artificial intelligence, rather than be
                <br /> replaced by it.
                <br />
                <br />
                <span className="d-none d-d-lg-inline">
                  Acceptance into the program is selective and based on
                  <br /> a competitive process. However, there is{" "}
                  <span className="gradient-text">no fee</span> for
                  <br /> those chosen.
                </span>
              </p>
              <hr />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="sponser-analysis">
          <div className="container text-white sponser-analysis-main d-flex justify-content-center flex-column align-items-center">
            <h1>
              fully sponsored training program that gives you a unique advantage
              in career success
            </h1>
            <div>
              <span className="d-flex justify-content-center flex-column align-items-center analysisFont">
                <span>50,000+</span>
                <span>Learners</span>
              </span>
              <span className="d-flex justify-content-center flex-column align-items-center analysisFont">
                <span>40+</span>
                <span>institution</span>
              </span>
              <span className="d-flex justify-content-center flex-column align-items-center analysisFont">
                <span>85%</span>
                <span>placement preference</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <SectionsThird />
      <Footer />
    </div>
  );
};

export default Home;
