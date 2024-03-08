import React from "react";
import styles from "./Menu.module.css";

function Menu({ setMenu }) {
  return (
    <div className={styles.menuSection}>
      <div className={styles.icon} onClick={() => setMenu(false)}>
        <img className={styles.cancelimg} src="/cancel.svg" alt="cancel"></img>
      </div>
      <div className={styles.items}>
        <br /> <h4 className={styles.item}>HOME</h4>
        <br />
        <h4 className={styles.item}>LEARNING EXPERIENCE</h4>
        <br />
        <h4 className={styles.item}>ABOUT</h4>
        <br />
        <h4 className={styles.item}>CONTACT</h4>
        <br />
        <h4 className={styles.item}>APPLY</h4>
      </div>
    </div>
  );
}

export default Menu;
