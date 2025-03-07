import styles from "./page.module.css";
import BlogPreview from '@/components/blogPreview'; 
import connectDB from '@/database/db'; 
import Blog from '@/database/blogSchema'; 
import Image from 'next/image';

export default async function HomePage() {
  async function getBlogs() {
    await connectDB();
    try {
      const blogs = await Blog.find().sort({ date: -1 }).orFail();
      return blogs;
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
      return null;
    }
  }

  const blogs = await getBlogs();
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <main>
        {/* About Me Section */}
        <h1 className={styles["page-title"]}>About Me</h1>
        <div className={styles.about}>
          <div className={styles["about-image"]}>
            <Image src="/misha.jpg" alt="the cutest cat ever" width={500} height={500} />
          </div>
          <div className={styles["about-image"]}>
            <Image src="/headshot.jpg" alt="picture of me" width={500} height={500} />
          </div>
          <div className={styles["about-image"]}>
            <Image src="/calpoly.jpg" alt="picture of Cal Poly campus" width={500} height={500} />
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

        {/* Blog Preview Section */}
        <h2 className={styles["blog-title"]}>Blog</h2>
        <div className={styles.blogs}>
          {blogs ? (
            blogs.map(blog => (
              <div key={blog._id} className={styles.blogPreviewContainer}>
                <BlogPreview blog={blog} />
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </main>
    </>
  );
}







