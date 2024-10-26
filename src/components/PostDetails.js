import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();

  
  const posts = [
    { id: 1, title: 'Finance Post 1', text: 'Intro to finance...', imageUrl: 'https://via.placeholder.com/300x200?text=Finance+1', details: 'Full details of finance post 1.' },
    { id: 2, title: 'Finance Post 2', text: 'Investments...', imageUrl: 'https://via.placeholder.com/300x200?text=Finance+2', details: 'Full details of finance post 2.' },
    { id: 3, title: 'Tech Post 1', text: 'AI trends...', imageUrl: 'https://via.placeholder.com/300x200?text=Tech+1', details: 'Full details of tech post 1.' },
    { id: 4, title: 'Tech Post 2', text: 'Gadget news...', imageUrl: 'https://via.placeholder.com/300x200?text=Tech+2', details: 'Full details of tech post 2.' },
    { id: 5, title: 'Tech Post 1', text: 'AI trends...', imageUrl: 'https://via.placeholder.com/300x200?text=Tech+1', details: 'Full details of tech post 1.' },
    { id: 6, title: 'Tech Post 2', text: 'Gadget news...', imageUrl: 'https://via.placeholder.com/300x200?text=Tech+2', details: 'Full details of tech post 2.' },
    
  ];

  // Find the post that matches the ID
  const post = posts.find((post) => post.id === parseInt(id));

  if (!post) return <div>Post not found.</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <img src={post.imageUrl} alt={post.title} className="w-full h-96 object-cover mb-4" />
      <p className="text-gray-700">{post.details}</p>
    </div>
  );
};

export default PostDetails;
