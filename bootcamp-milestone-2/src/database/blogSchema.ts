// src/database/blogSchema.ts
import mongoose, { Schema } from "mongoose";

type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type Blog = {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageALT: string;
  slug: string;
  comments: IComment[]; 
};

const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageALT: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: true },
    },
  ],
});

const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;
