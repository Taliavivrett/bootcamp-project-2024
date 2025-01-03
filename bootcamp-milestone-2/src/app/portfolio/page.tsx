import React from 'react';
import styles from './portfolio.module.css';

const Portfolio = () => {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Portfolio</h1>

        <div className={styles.project}>
          <a href="index.html">
            <img src="website.png" alt="personal website snapshot" width="650" height="350" />
          </a>
          <div className={styles.projectDetails}>
            <p className={styles.projectName}><strong>Personal Website</strong></p>
            <p className={styles.projectDescription}>
              A personal website containing my information and achievements, built using HTML and CSS.
            </p>
            <a href="index.html" className={styles.learnMore}>LEARN MORE</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;