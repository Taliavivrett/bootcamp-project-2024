import React from 'react';
import type { BlogType } from "@/database/blogSchema"; 
import Image from 'next/image';
import Link from 'next/link'; 
import style from './blogPreview.module.css';

interface BlogPreviewProps {
  blog: BlogType; 
}

export default function BlogPreview({ blog }: BlogPreviewProps) {
  return (
    <div className={style.previewContainer}>
      <Link href={`/blog/${blog.slug}`}>
        <h2>{blog.title}</h2>
      </Link>
      <p>{new Date(blog.date).toLocaleDateString()}</p>
      <img src={blog.image} alt={blog.imageALT} width={400} height={200} />
      <p>{blog.description}</p>
    </div>
  );
}




