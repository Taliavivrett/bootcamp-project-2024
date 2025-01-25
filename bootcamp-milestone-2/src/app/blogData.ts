import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";  // Importing DB connection
import Blog from "@/database/blogSchema";  // Importing the Blog model

export interface IComment {
  user: string;
  comment: string;
  time: Date; 
}

type IParams = {
  params: {
    slug: string;  
  };
};

export async function POST(req: NextRequest, { params }: IParams) {
  // Connect to MongoDB
  await connectDB();
  
  // Extract the blogSlug from params (from the URL)
  const { slug } = params;

  try {
    // Parse the incoming request body
    const body = await req.json();
    const { user, comment, time } = body;

    // Validate the request body
    if (!user || !comment || !time) {
      return NextResponse.json(
        { error: "Invalid request. Missing required fields." },
        { status: 400 }
      );
    }

    // Find the blog post by slug
    const blog = await Blog.findOne({ slug });
    if (!blog) {
      return NextResponse.json({ error: "Blog not found." }, { status: 404 });
    }

    // Create a new comment object
    const newComment = { user, comment, time: new Date(time) };

    // Add the comment to the blog's comments array
    blog.comments.push(newComment);

    // Save the updated blog with the new comment
    await blog.save();

    // Return the updated blog with the added comment
    return NextResponse.json(blog);
  } catch (err) {
    // Log the error and return a server error response
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "An error occurred while adding the comment." },
      { status: 500 }
    );
  }
}

