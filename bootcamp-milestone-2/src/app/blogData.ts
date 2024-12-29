// Blog interface
export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageALT: string;
    slug: string;
  }
  
  // Array of blog data
  const blogs: Blog[] = [
    {
      title: "Travel",
      date: "Summer 2024",
      description: "Places I've been this past summer",
      image: "./public/Camping.jpg", // Ensure image paths point to the public folder
      imageALT: "Picture of a forest",
      slug: "travel-summer-2024",
    },
    {
      title: "Food",
      date: "Summer 2024",
      description: "My favorite meals that I've eaten/cooked this past summer",
      image: "./public/Food.jpg", // Ensure image paths point to the public folder
      imageALT: "Picture of a meal I made",
      slug: "food-summer-2024",
    },
  ];
  
  // Export blogs array
  export default blogs;
  