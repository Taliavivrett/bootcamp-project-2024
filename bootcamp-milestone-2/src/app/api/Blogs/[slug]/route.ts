import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

// GET method to fetch a blog by slug
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;  // Get the slug from the URL params

  console.log('Fetching blog with slug: ${slug}');

  try {
    const blog = await blogSchema.findOne({ slug }).orFail(); // search for the blog by slug
    return NextResponse.json(blog);  
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json('Blog not found.', { status: 404 }); 
  }
}

// POST method to add a comment to a blog
export async function POST(req: NextRequest, { params }: IParams) {
  await connectDB();

  const { slug } = params;  
  console.log("Received slug:", slug);

  try {
    const { user, comment, time } = await req.json(); 

    console.log("Received comment data:", { slug, user, comment, time });

    if (!slug || !user || !comment || !time) {
      return NextResponse.json(
        { error: "Invalid request. Missing required fields." },
        { status: 400 }  
      );
    }

    const blog = await blogSchema.findOne({ slug }).orFail();  

    const newComment = { user, comment, time: new Date(time) };  

    blog.comments.push(newComment); 

    await blog.save();  

    console.log("Comment added successfully:", newComment);

    return NextResponse.json(blog);  
  } catch (err) {
    console.error("Error adding comment:", err);
    return NextResponse.json(
      { error: "An error occurred while adding the comment." },
      { status: 500 }  
    );
  }
}

