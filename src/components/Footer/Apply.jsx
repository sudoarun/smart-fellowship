import React from "react";
import styles from "./Apply.module.css";
function Apply() {
  return (
    <div className={styles.Apply}>
      <span className={styles.Register}>Register Now!</span>
      <button className="bg-gradientStyle navBtnApply" type="button">
        Apply
      </button>
    </div>
  );
}

export default Apply;
