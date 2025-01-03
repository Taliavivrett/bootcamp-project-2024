"use client";  
import { usePathname } from 'next/navigation'; 
import blogs from '@/app/blogData'; 
import styles from './blog.module.css';

export default function BlogPage() {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={styles.blogPageContainer}>
      <h1 className={styles.blogPageTitle}>{blog.title}</h1>
      <p className={styles.blogPageDate}>Posted on: {blog.date}</p>
      <img
        src={blog.image}
        alt={blog.imageALT}
        className={styles.blogPageImage}
      />
      <p className={styles.blogPageDescription}>{blog.description}</p>
      <div className={styles.blogPageFooter}>
        <p>2024 Talia Vivrett | All Rights Reserved</p>
      </div>
    </div>
  );
}

