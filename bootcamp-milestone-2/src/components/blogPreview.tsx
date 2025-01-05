import React from 'react';
import type { Blog } from "@/app/blogData";
import Image from 'next/image';
import Link from 'next/link'; 
import style from './blogPreview.module.css';

export default function BlogPreview(props: Blog) {
  return (
    <Link href={`/blog/${props.slug}`} passHref>
      <div className={style.blogPreviewContainer}>
        <h3 className={style.blogPreviewTitle}>{props.title}</h3>
        <div>
          <Image 
            className={style.blogPreviewImage}
            src={props.image} 
            alt={props.imageALT || 'Blog image'} 
            width={500} 
            height={500} 
          />
          <p className={style.blogPreviewDescription}>{props.description}</p>
          <p className={style.blogPreviewDate}>Posted on: {props.date}</p>
        </div>
      </div>
    </Link>
  );
}


