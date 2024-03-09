import React from "react";
import styles from "./AboutTheFellowship.module.css";

function AboutTheFellowship() {
  return (
    <>
      <div className={styles.MainBox}>
        <span>About The Smart Fellowship</span>
        <span>Our History</span>
        <span>Partners</span>
        <span>Meet the Team</span>
        <span>Media</span>
      </div>
      <div className={styles.MainContainer}>
        <div className={styles.TextContainer}>
          <p className={styles.Title}>
            <b> About The Smart Fellowship</b>
          </p>
          <p>
            The Smart Fellowship is on a mission to ensure every graduate has
            the necessary exposure to train themselves to build automation-proof
            careers.
          </p>
          <p>
            Through{" "}
            <span className={styles.colortext}>
              immersive role-playing experiences
            </span>
            , fellows master 8+ essential soft skills, from critical thinking,
            creative problem solving to emotional intelligence. These are now an{" "}
            <span className={styles.colortext}>essential hiring criteria </span>{" "}
            for roles across sectors. In fact our new national education policy
            lays special emphasis on these skills which the World Economic Forum
            also lists as 'must haves'.
          </p>
          <p>
            Each Smart Fellow gains a{" "}
            <span className={styles.colortext}>
              unique edge in placements and performance
            </span>{" "}
            as they have acquired superpowers to start thinking, communicating
            and making decisions where A.I stops. Till date 50,000+ graduates
            from across 40+ institutions have transformed into future-ready
            smart generalists.
          </p>
          <br /> <hr />
        </div>
        <div className={styles.imageContainer}>
          <img
            className={styles.AboutUs}
            src="Aboutussvg.svg"
            alt="pAGE-3"
          ></img>
        </div>
      </div>
      <div className={styles.TextWithLine}>
        <div className={styles.line1}></div>

        <div className={styles.content}>
          <b>Our </b><span className={styles.coloured}><b>Mission</b> </span>
        </div>

        <div className={styles.line2}></div>
      </div>

      <div className={styles.centretext}>
        To enable Bharat's youth to build automation-proof careers
      </div>

      <section>
        <div className="sponser-analysis">
          <div className="container text-white sponser-analysis-main d-flex justify-content-center flex-column align-items-center">
            <h1>
             OUR IMPACT
            </h1>
            <div>
              <span className="d-flex justify-content-center flex-column align-items-center analysisFont">
                <span>50,000+</span>
                <span>LEARNERS</span>
              </span>
              <span className="d-flex justify-content-center flex-column align-items-center analysisFont">
                <span>40+</span>
                <span>INSTITUTIONS</span>
              </span>
              <span className="d-flex justify-content-center flex-column align-items-center analysisFont">
                <span>85%</span>
                <span>PLACEMENT PREFERENCE</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutTheFellowship;
