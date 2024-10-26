import React from "react";
import Card from "./Card";

const Finance = () => {
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
      id: 5,
      title: "Finance Post 3",
      text: "Financial planning.",
      imageUrl:
        "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_53876-59104.jpg",
    },
    {
      id: 6,
      title: "Finance Post 4",
      text: "Wealth management.",
      imageUrl:
        "https://img.freepik.com/free-photo/finance-business-accounting-analysis-management-concept_53876-15817.jpg?semt=ais_hybrid",
    },
  ];

  return (
    <div className="p-4 md:p-20 space-y-8">
      <h2 className="text-2xl font-semibold mb-4">Finance</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {financePosts.map((post) => (
          <Card key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Finance;
