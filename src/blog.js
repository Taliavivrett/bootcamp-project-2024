// blog.js

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

function appendingBlog() {
    var blogContainer = document.getElementById('blog-container');
    if (blogContainer) {
        blogs.forEach(function (blog) {
            var blogPost = document.createElement('div'); // Create div for each post
            blogPost.className = 'blog-post'; // Add class for styling

            // Create and append title
            var title = document.createElement('h1');
            var titleLink = document.createElement('a');
            titleLink.href = blog.slug + '.html'; // Link to individual blog
            titleLink.textContent = blog.title;
            title.appendChild(titleLink);

            // Create and append date
            var date = document.createElement('p');
            date.textContent = 'Date Posted: ' + blog.date;

            // Create and append image
            var image = document.createElement('img');
            image.src = blog.image;
            image.alt = blog.imageALT;

            // Create and append description
            var description = document.createElement('p');
            description.textContent = blog.description;

            // Append everything to the blog post div
            blogPost.appendChild(title);
            blogPost.appendChild(date);
            blogPost.appendChild(description);
            blogPost.appendChild(image);

            // Append the entire blog post to the main container
            blogContainer.appendChild(blogPost);
        });
    }
}

appendingBlog();
