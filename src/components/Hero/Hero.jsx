import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h3>Hello, I am</h3>
        <h1 className={styles.title}>Ravi Raghav</h1>
        
        <p className={styles.description}>
          I'm a Masters Student at Arizona State University looking for opportunities. Reach out if you'd like to learn more!
        </p>
        
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
