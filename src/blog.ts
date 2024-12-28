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

// Function to display blogs on the page
function displayBlogs() {
  // Access the blog container element by its ID
  const blogContainer = document.getElementById('blog-container');

  if (blogContainer) {
    // Iterate through the list of blogs
    blogs.forEach((blog) => {
      // Create the main container div for each blog
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog-post');

      // Create an h1 element for the blog title
      const title = document.createElement('h1');
      title.innerText = blog.title;

      // Create a p element for the blog date
      const date = document.createElement('p');
      date.classList.add('blog-date');
      date.innerText = blog.date;

      // Create a p element for the blog description
      const description = document.createElement('p');
      description.classList.add('blog-description');
      description.innerText = blog.description;

      // Create an img element for the blog image
      const img = document.createElement('img');
      img.src = blog.image;
      img.alt = blog.imageALT;
      img.classList.add('blog-image');

      // Create a link (a) element to navigate to the full blog post page
      const link = document.createElement('a');
      link.href = `blogs/${blog.slug}.html`;
      link.innerText = "Read more";

      // Append the created elements to the blogDiv
      blogDiv.appendChild(title);
      blogDiv.appendChild(date);
      blogDiv.appendChild(description);
      blogDiv.appendChild(img);
      blogDiv.appendChild(link);

      // Finally, append the blogDiv to the blog container
      blogContainer.appendChild(blogDiv);
    });
  }
}

// Call the function to display blogs when the page loads
displayBlogs();