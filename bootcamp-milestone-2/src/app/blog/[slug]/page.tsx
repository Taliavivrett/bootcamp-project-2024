import ReactMarkdown from 'react-markdown';
import styles from './blog.module.css';
import Comment from '../../../components/comment';
import CommentForm from '../../../components/commentForm';
import { IComment } from '../../blogData';

type Props = {
  params: { slug: string };
};

export default async function Blog({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return <div className={styles.notFound}>Blog post not found</div>;
  }

  return (
    <article className={styles.blogPost}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.date}>{new Date(blog.date).toLocaleDateString()}</p>
      <img
        className={styles.image}
        src={blog.image}
        alt={blog.imageALT}
        width={800}
        height={400}
      />
      <p className={styles.description}>{blog.description}</p>
      <div className={styles.blogContent}>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </div>

      <div className={styles.commentFormSection}>
        <h3>Leave a Comment:</h3>
        <CommentForm slug={slug} />
      </div>

      <div className={styles.commentsSection}>
        <h3>Comments:</h3>
        {blog.comments.length > 0 ? (
          blog.comments.map((comment: IComment, index: number) => (
            <Comment key={index} comment={comment} />
          ))
        ) : (
          <p className={styles.noComments}>No comments yet</p>
        )}
      </div>
    </article>
  );
}

async function getBlog(slug: string) {
  try {
    const res = await fetch(`https://bootcamp-project-2024-ochre.vercel.app/api/Blogs/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch blog');
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`Error: ${err}`);
    return null;
  }
}







