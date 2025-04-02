
import React from "react";
import styles from "./Helppage.module.css";

const AssistancePage = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.banner}>
        <h1>Emergency Contact & Help</h1>
        <p>Quick access to urgent care numbers and emergency contacts.</p>
      </header>
      <section className={styles.contactSection}>
        <div className={styles.infoCard}>
          <h2>Emergency Medical Services</h2>
          <p>Dial: <strong>911</strong> (For immediate medical assistance)</p>
        </div>
        <div className={styles.infoCard}>
          <h2>Blood Bank</h2>
          <p>Dial: <strong>1-800-222-1222</strong></p>
        </div>
        <div className={styles.infoCard}>
          <h2>Ambulance</h2>
          <p>Dial: <strong>988</strong> (Vehicle support)</p>
        </div>
        <div className={styles.infoCard}>
          <h2>Explore Surroundings</h2>
          <p>
            Find the nearest hospital at{" "}
            <a href="https://www.hospitallocator.com" className={styles.navLink}>
              Hospital Locator
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AssistancePage;
