import styles from "./page.module.css"; 

export default async function HomePage() {

  return (
    <>
      <main>
        {/* About Me Section */}
        <h1 className={styles["page-title"]}>About Me</h1>
        <div className={styles.about}>
          <div className={styles["about-image"]}>
            <img src="/misha.jpg" alt="the cutest cat ever" />
          </div>
          <div className={styles["about-image"]}>
            <img src="/headshot.jpg" alt="picture of myself" />
          </div>
          <div className={styles["about-image"]}>
            <img src="/calpoly.jpg" alt="picture of Cal Poly campus" />
          </div>
          <div className={styles["about-text"]}>
            <p>
              My name is <strong>Talia Vivrett</strong> and I am a second-year
              <strong> Software Engineering major</strong> at{" "}
              <em>California Polytechnic State University- San Luis Obispo</em>. I am
              currently searching for summer 2025 internships to apply and deepen my knowledge
              of software engineering.
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>2024 &lt;Talia Vivrett&gt; | All Rights Reserved</p>
      </footer>
    </>
  );
}

