import React from "react";

import styles from "./Contact.module.css";
import { SocialIcon } from "react-social-icons";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <p>Share your ideas!</p>
        <pre> </pre>
        <pre> </pre>
        <pre> </pre>
        <pre> </pre>
        <p>Lets Connect</p>
        <pre> </pre>

        <a href="mailto:rdasari9@gmail.com" className={styles.mail}>
          rdasari9@asu.edu↗
        </a>
      </div>
      <ul className={styles.links}>
        
        <li className={styles.link}>
        <SocialIcon url="https://www.instagram.com/__ravi249?igsh=d25xcnk3bHZpbncz&utm_source=qr" bgColor="white" fgColor="transparent" style={{height:120, width:120}}/>
        </li>
        <li className={styles.link}>
        <SocialIcon url="https://linkedin.com" bgColor="white" fgColor="transparent" style={{height:120, width:120}}/>
        </li>
        <li className={styles.link}>
          <SocialIcon url="https://github.com" bgColor="white" fgColor="transparent" style={{height:120, width:120}}/>
        </li>
      </ul>
    </footer>
  );
};
