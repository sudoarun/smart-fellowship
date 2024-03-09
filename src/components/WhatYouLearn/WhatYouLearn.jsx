import React from "react";
import styles from "./WhatYouLearn.module.css";

function WhatYouLearn() {
  return (
    <>
      <div className={styles.MainBox}>
        <span>What You Learn</span>
        <span>How you learn</span>
        <span>Advantages</span>
        <span>Testimonials</span>
        <span>Previous partners</span>
      </div>

      <div className={styles.ContentBox}>
        <img className={styles.page2img} src="pAGE-2.png" alt="pAGE-2"></img>
        <div className={styles.TextContainer}>
          <div className={styles.b1}>
            <span className={styles.What}>What</span> <span>you learn</span>
            <hr />
          </div>
          <div className={styles.imgs2}>
            <div>
              <div className={styles.img1}>
                <div>
                  <img
                    className={styles.img1svg}
                    src="img1svg.svg"
                    alt="img2"
                  ></img>
                </div>
                <div>
                  <span className={styles.heading}>
                    <b>8+ SOFT SKILLS</b>
                  </span>
                  <hr />
                  <span>Creative Problem Solving</span>
                  <br />
                  <span>Smart Thinking</span>
                  <br />
                  <span>Storytelling</span>
                  <br />
                  <span>Negotiation</span>
                  <br />
                  <span>Emotional Intelligence</span>
                  <br />
                  <span>Collaboration</span>
                  <br />
                  <span>Productivity Management</span>
                  <br />
                  <span>Remote Communication</span>
                  <br />
                </div>
              </div>
            </div>
            <div className={styles.img2}>
              <div>
                <img
                  className={styles.img1svg}
                  src="img2svg.svg"
                  alt="img2"
                ></img>
              </div>
              <div>
                <span className={styles.heading}>
                  <b>DIGITAL SKILLS</b>
                </span>
                <hr />
                <span>Using ChatGPT/ A.I Effectively</span>
                <br />
                <span>Miro Board</span>
              </div>
            </div>
          </div>
          <div className={styles.img3}>
            <div>
              <img
                className={styles.img1svg}
                src="img3svg.svg"
                alt="img3"
              ></img>
            </div>
            <div>
              <span className={styles.heading}>
                <b>PLACEMENT SUPPORT</b>
              </span>
              <hr />
              <span>Creating a world-class resume to impress employers</span>
              <br />
              <span>
                {" "}
                Optimizing LinkedIn profile to attract growth opportunities
              </span>
              <br />
              <span>
                {" "}
                Mastering job-search strategies to land your dream job
              </span>
            </div>
          </div>
          <div className={styles.img4}>
            <div>
              <img
                className={styles.img1svg}
                src="img4svg.svg"
                alt="img4"
              ></img>
            </div>
            <div>
              <span className={styles.heading}>
                <b>UNLOCKING THE FEMALE POTENTIAL</b>
              </span>
              <hr />
              <span>
                Tapping into the power of nutrition to boost productivity
              </span>
              <br />
              <span>
                Building a work-life balance lifestyle for working women
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatYouLearn;
