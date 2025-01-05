// src/database/blogSchema.ts
import mongoose, { Schema } from "mongoose";

// Define the TypeScript type (or interface) for the Blog
type Blog = {
  title: string;
  date: Date;
  description: string; // for preview
  image: string; // url for image in public
  image_alt: string; // alt text for image
  slug: string;
};

// Define the Mongoose schema 
const blogSchema = new Schema<Blog>({
  title: { type: String, required: true },
  date: { type: Date, required: false, default: new Date() }, // default to current date 
  description: { type: String, required: true },
  image: { type: String, required: true },
  image_alt: { type: String, required: true },
  slug: { type: String, required: true },
});

// Define the collection and model
const Blog = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default Blog;