import styles from "./portfolio.module.css";
import connectDB from '@/database/db'; // Database connection
import Project from '@/database/projectSchema'; // Project model
import Image from 'next/image';

export default async function PortfolioPage() {
  // Fetch projects from the database
  async function getProjects() {
    await connectDB();
    try {
      const projects = await Project.find().sort({ title: 1 }).orFail();
      return projects;
    } catch (err) {
      console.error('Failed to fetch projects:', err);
      return null;
    }
  }

  const projects = await getProjects();

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Portfolio</h1>

        <div className={styles.projects}>
          {projects ? (
            projects.map((project: any) => (
              <div key={project._id} className={styles.project}>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                src={project.image}
                alt={project.imageALT || "Project image"}
                width={650}
                height={350}
              />
                </a>
                <div className={styles.projectDetails}>
                  <p className={styles.projectName}><strong>{project.title}</strong></p>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.learnMore}
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </main>
    </div>
  );
}
