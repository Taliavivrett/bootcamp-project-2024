// Comment interface
export interface IComment {
  user: string;
  comment: string;
  time: Date;
}

// Blog interface
export interface Blog {
  title: string;
  date: string;
  description: string;
  image: string;
  imageALT: string;
  slug: string;
  comments: IComment[];
}


const blogs: Blog[] = [
  {
    title: "Travel",
    date: "Summer 2024",
    description: "Places I've been this past summer",
    image: "/Camping.jpg",
    imageALT: "Picture of a forest",
    slug: "travel-summer-2024",
    comments: [{
      "user": "Talia Vivrett",
      "comment": "Fun camping trip",
      "time": new Date("2025-01-06T12:00:00Z")
    }
  ]
  },
  {
    title: "Food",
    date: "Summer 2024",
    description: "My favorite meals that I've eaten/cooked this past summer",
    image: "/Food.jpg",
    imageALT: "Picture of a meal I made",
    slug: "food-summer-2024",
    comments:     [{
      "user": "Tara Vivrett",
      "comment": "So yummy",
      "time": new Date("2025-01-06T13:00:00Z")
    }
  ]
  },
];

export default blogs;
