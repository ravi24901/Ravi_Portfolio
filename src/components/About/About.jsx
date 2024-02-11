import React from "react";
import skills from "../../data/skills.json";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skills </h2>
      <pre> </pre>
      <pre> </pre>
      <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} >
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                
              </div>
            );
          })}
        </div>
      
    </section>
  );
};
