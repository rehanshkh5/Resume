import React from "react";

import resumeSvg from "../../assets/resume.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> craft
        </p>
        <p className={styles.heading}>Make your own resume.</p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" className="" />
      </div>
    </div>
  );
}

export default Header;
