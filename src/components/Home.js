import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Home = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Finance Overview",
      text: "Learn about the basics of finance.",
      imageUrl: "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?cs=srgb&dl=pexels-pixabay-164527.jpg&fm=jpg",
      link: "/finance",
    },
    {
      id: 2,
      title: "Latest in Technology",
      text: "Discover the latest trends in technology.",
      imageUrl: "https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/technology",
    },
    {
      id: 3,
      title: "About Us",
      text: "Find out more about our blog.",
      imageUrl: "https://via.placeholder.com/300x200?text=About+Us",
      link: "/about-us",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Welcome to Our Blog</h2>
      <p>Explore our latest articles on various topics.</p>

      <h3 className="text-xl mt-6 mb-2">Featured Posts</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredPosts.map((post) => (
          <Link to={post.link} key={post.id}>
            <Card
              title={post.title}
              text={post.text}
              imageUrl={post.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
