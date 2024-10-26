import React from "react";
import Card from "./Card";

const Home = () => {
  const financePosts = [
    {
      id: 1,
      title: "Finance Post 1",
      text: "Intro to finance.",
      imageUrl:
        "https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?cs=srgb&dl=pexels-pixabay-164527.jpg&fm=jpg",
    },
    {
      id: 2,
      title: "Finance Post 2",
      text: "Investments.",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwax553sog7fIbXoTKBdSrE1ZNXXdCZbg3lpGkSnwgfCxJ64bAD1S5GjzInKVzoPmhLtM&usqp=CAU",
    },
    {
      id: 3,
      title: "Finance Post 3",
      text: "Financial planning.",
      imageUrl:
        "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-59104.jpg",
    },
    {
      id: 4,
      title: "Finance Post 4",
      text: "Wealth management.",
      imageUrl:
        "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg?semt=ais_hybrid",
    },
    {
      id: 3,
      title: "Finance Post 3",
      text: "Financial planning.",
      imageUrl:
        "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-59104.jpg",
    },
    {
      id: 4,
      title: "Finance Post 4",
      text: "Wealth management.",
      imageUrl:
        "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg?semt=ais_hybrid",
    },
  ];

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
    <div className="p-16 md:p-20 space-y-8">
      {/* Finance Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Finance</h3>
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory">
          {financePosts.map((post) => (
            <div
              key={post.id}
              className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Card {...post} />
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Technology</h3>
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory">
          {technologyPosts.map((post) => (
            <div
              key={post.id}
              className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <Card {...post} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
