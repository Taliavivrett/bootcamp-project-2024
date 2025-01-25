import { NextRequest, NextResponse } from 'next/server';
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

type IParams = {
  params: {
    slug: string;
  };
};

// GET method to fetch a blog
export async function GET(req: NextRequest, { params }: IParams) {
  await connectDB();
  const { slug } = params;
  console.log(`Fetching blog with slug: ${slug}`);

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error("Error fetching blog:", err);
    return NextResponse.json('Blog not found.', { status: 404 });
  }
}

// POST method to add a comment to a blog
export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { slug, user, comment, time } = await req.json();

    console.log("Received comment data:", { slug, user, comment, time });

    // check data
    if (!slug || !user || !comment || !time) {
      return NextResponse.json(
        { error: "Invalid request. Missing required fields." },
        { status: 400 }
      );
    }

    // find blog by slug
    const blog = await blogSchema.findOne({ slug }).orFail();

    // create comment
    const newComment = { user, comment, time: new Date(time) };

    // add the comment to blog
    blog.comments.push(newComment);

    // save with new comment
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
