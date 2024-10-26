import React from "react";
import Card from "./Card";

const Technology = () => {
  const technologyPosts = [
    {
      id: 1,
      title: "Tech Post 1",
      text: "AI trends.",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
    },
    {
      id: 2,
      title: "Tech Post 2",
      text: "Gadget news.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      title: "Tech Post 3",
      text: "Future of robotics.",
      imageUrl:
        "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg?semt=ais_hybrid",
    },
    {
      id: 4,
      title: "Tech Post 4",
      text: "Blockchain updates.",
      imageUrl:
        "https://img.freepik.com/premium-photo/interpersonal-connection-internet-space-data-exchange-building-communication-technologies-future_584311-763.jpg",
    },
    {
      id: 5,
      title: "Tech Post 3",
      text: "Future of robotics.",
      imageUrl:
        "https://img.freepik.com/premium-photo/cardano-blockchain-platform_23-2150411956.jpg?semt=ais_hybrid",
    },
    {
      id: 6,
      title: "Tech Post 4",
      text: "Blockchain updates.",
      imageUrl:
        "https://img.freepik.com/premium-photo/interpersonal-connection-internet-space-data-exchange-building-communication-technologies-future_584311-763.jpg",
    },
  ];

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Technology</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {technologyPosts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Technology;
