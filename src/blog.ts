// Blog interface
interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageALT: string;
  slug: string;
}

// Array
const blogs: Blog[] = [
{
  title: "Travel",
  date: "Summer 2024",
  description: "Places I've been this past summer",
  image: "../Camping.jpg", 
  imageALT: "Picture of a forest",
  slug: "travel-summer-2024",
},
{
  title: "Food",
  date: "Summer 2024",
  description: "My favorite meals that I've eaten/cooked this past summer",
  image: "../Food.jpg", 
  imageALT: "Picture of a meal I made",
  slug: "food-summer-2024",
},
];

// Function to append blog posts to the webpage
function appendBlogs() {
const blogContainer = document.getElementById('blog-container'); // Find the container where blogs will be displayed
if (blogContainer) {
  blogs.forEach((blog) => {
    // Create the elements for each blog post
    const blogPost = document.createElement('div');
    blogPost.className = 'blog-post';

    const title = document.createElement('h1');
    title.textContent = blog.title;
    const titleLink = document.createElement('a');
    titleLink.href = `${blog.slug}.html`;
    titleLink.appendChild(title);

    const date = document.createElement('p');
    date.textContent = `Date Posted: ${blog.date}`;

    const image = document.createElement('img');
    image.src = blog.image;
    image.alt = blog.imageALT;

    const description = document.createElement('p');
    description.textContent = blog.description;

    // Append elements to the blogPost div
    blogPost.appendChild(titleLink);
    blogPost.appendChild(date);
    blogPost.appendChild(description);
    blogPost.appendChild(image);

    // Append the blogPost div to the blogContainer
    blogContainer.appendChild(blogPost);
  });
}
}

// Call the function to append the blogs
appendBlogs();

// Export blogs (optional if you need to use the data in other files)
export default blogs;

