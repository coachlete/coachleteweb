import React from "react";
import styles from "./Homesection.module.css";

export default function Homesection() {
  return (
    <>
      <div className={styles.HomeMain}>
        {/* <NavBar /> */}
        <div className={styles.HomeVideo}>
          <div className={styles.HomeVideoWrapper}>
            <img src="assets/Home/homesection.jpg" alt="" />
          </div>

          <div className={styles.HomeWrapper}>
            <div className={styles.HomeText}>
              <div className={styles.HomeTextWrapper}>
                <span>From training</span>
                <br />
                <span>to triumph</span>
                {/* <br /> */}
                {/* <span>performance</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Info /> */}
      {/* <div>TEst</div> */}
    </>
  );
}
