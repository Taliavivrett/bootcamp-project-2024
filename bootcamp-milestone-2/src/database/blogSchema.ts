// src/database/blogSchema.ts
import mongoose, { Schema, Document } from "mongoose";

// Define the Comment and Blog types
export type IComment = {
  user: string;
  comment: string;
  time: Date;
};

export type BlogType = {
  title: string;
  date: Date;
  description: string;
  image: string;
  imageALT: string;
  slug: string;
  comments: IComment[];
};

// Define the Schema for the Blog
const commentSchema = new Schema<IComment>({
  user: { type: String, required: true },
  comment: { type: String, required: true },
  time: { type: Date, default: Date.now },
});

const blogSchema = new Schema<BlogType>({
  title: { type: String, required: true },
  date: { type: Date, default: new Date() },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageALT: { type: String, required: true },
  slug: { type: String, required: true },
  comments: [commentSchema],
});

// Export the model and type separately
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);
export default Blog; // Default export for the model

