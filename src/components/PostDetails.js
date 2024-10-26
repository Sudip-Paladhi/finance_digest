import React from "react";
import { useLocation } from "react-router-dom";

const PostDetails = () => {
  const location = useLocation();
  const { post } = location.state || { post: {} };

  if (!post) {
    return <p className="text-center text-gray-700">Post not found.</p>;
  }

  return (
    <div className="p-4">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-72 object-cover mb-4 rounded-lg"
      />
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">{post.text}</p>
    </div>
  );
};

export default PostDetails;
