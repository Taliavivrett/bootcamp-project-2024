// Array
var blogs = [
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
    var blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        // Iterate through the list of blogs
        blogs.forEach(function (blog) {
            // Create the main container div for each blog
            var blogDiv = document.createElement('div');
            blogDiv.classList.add('blog-post');
            // Create an h1 element for the blog title
            var title = document.createElement('h1');
            title.innerText = blog.title;
            // Create a p element for the blog date
            var date = document.createElement('p');
            date.classList.add('blog-date');
            date.innerText = blog.date;
            // Create a p element for the blog description
            var description = document.createElement('p');
            description.classList.add('blog-description');
            description.innerText = blog.description;
            // Create an img element for the blog image
            var img = document.createElement('img');
            img.src = blog.image;
            img.alt = blog.imageALT;
            img.classList.add('blog-image');
            // Create a link (a) element to navigate to the full blog post page
            var link = document.createElement('a');
            link.href = "blogs/".concat(blog.slug, ".html");
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
