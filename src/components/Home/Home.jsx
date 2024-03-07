import Footer from "./Footer/Footer";
import Navbar from "../Header/Navbar";
import "./Home.css";
import image1 from "../../assets/image1.png";
import SectionsThird from "./SectionsThird";

const Home = () => {
  return (
    <div>
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

      <section className="sectionTwo">
        <div className="container sectionTwo">
          <div className="row align-items-center">
            <div className="col-7">
              <img
                src={image1}
                alt="leftImage"
                className="img-fluid sectionTwo__image"
              />
            </div>
            <div className="col-5 p-4">
              <h3 className="right-colum__heading">
                <span>What</span> is The Smart Fellowship?
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
                Through immersive <span>roleplay experiences</span>, you
                <br />
                master <span>8+ futuristic soft skills</span> that empower you
                <br /> to work alongside artificial intelligence, rather than be
                <br /> replaced by it.
                <br />
                <br />
                Acceptance into the program is selective and based on
                <br /> a competitive process. However, there is{" "}
                <span>no fee</span> for
                <br /> those chosen.
              </p>
              <hr />
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
