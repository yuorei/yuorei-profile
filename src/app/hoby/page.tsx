import React from "react";
import styles from "@/app/css/hobby.module.css";
import slideshift from "@/app/css/slideshift.module.css";
import hobbyData from "./hobby.json";

type hobby = {
  title: string;
  description: string;
  img: string;
  link: string;
  tags: string[];
};

export default function hobby() {
  return (
    <>
      <h1 className={styles.heading}>趣味</h1>
      {hobbyData.map((hobby, index) => {
        let className = styles.other;
        if (index + 1 === 1) {
          className = styles.golde;
        } else if (index + 1 === 2) {
          className = styles.silver;
        } else if (index + 1 === 3) {
          className = styles.bronze;
        }

        return (
          <div key={index} className={styles.hobbyItem}>
            <a key={index} href={hobby.link} className={styles.link}>
              <div>
                <div
                  className={`${styles.flex} ${slideshift.slideinLeft} ${className}`}
                >
                  <img
                    className={styles.img}
                    src={hobby.img}
                    alt={hobby.title}
                  />
                  <div className={styles.card}>
                    <h2 className={styles.h1}>{hobby.title}</h2>
                    <p className={styles.description}>{hobby.description}</p>
                    <div className={styles.tags}>
                      {hobby.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </>
  );
}
