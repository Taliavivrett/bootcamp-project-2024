// src/database/blogSchema.ts
import mongoose, { Schema } from "mongoose";

// Define the TypeScript type (or interface) for the Blog
type Blog = {
  title: string;
  date: Date;
  description: string; 
  image: string; 
  imageALT: string; 
  slug: string;
};

// Define the Mongoose schema 
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() }, 
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageALT: { type: String, required: true },
  slug: { type: String, required: true },
});

const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;