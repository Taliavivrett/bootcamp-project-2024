import React from 'react';
import styles from '@/app/resume/resume.module.css'; 

const ResumePage = () => {
  return (
    <div>
      <main className={styles['resume-page']}>
        <div className={styles['page-title']}>
          <h1>Resume</h1>
        </div>
        <a href="/Talia_Vivrett.pdf" download className={styles['download-resume']}>
          Download Resume
        </a>
        <div className={styles.resume}>
          <section className={styles.section}>
            <div className={styles['section-title']}>
              <h2>Education</h2>
            </div>
            <div className={styles.entry}>
              <h3 className={styles['entry-title']}>Bachelor of Science in Software Engineering</h3>
              <p className={styles['entry-info']}>
                California Polytechnic University, San Luis Obispo | Expected Graduation June 2027
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles['section-title']}>
              <h2>Experience</h2>
            </div>
            <div className={styles.entry}>
              <h3 className={styles['entry-title']}>IT and Marketing Intern</h3>
              <p className={styles['entry-info']}>KDP Certified Public Accountants | June 2021 - September 2024</p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles['section-title']}>
              <h2>Projects</h2>
            </div>
            <div className={styles.entry}>
              <h3 className={styles['entry-title']}>Farm Farmland Game</h3>
              <p className={styles['entry-info']}>An interaction farm simulator game built using JavaScript</p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles['section-title']}>
              <h2>Skills</h2>
            </div>
            <ul className={styles['skill-list']}>
              <li>C programming</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>RISC-V</li>
              <li>Data Structures & Algorithms</li>
            </ul>
          </section>

          <section className={styles.section}>
            <div className={styles['section-title']}>
              <h2>Coursework</h2>
            </div>
            <ul className={styles['course-list']}>
              <li>CSC 202- Data Structures and Algorithms</li>
              <li>CSC 203- Project Based Object Oriented Programming and Design</li>
              <li>CSC 225- Intro to Computer Organization</li>
              <li>Calculus 1-4</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
