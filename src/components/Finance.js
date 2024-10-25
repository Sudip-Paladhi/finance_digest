import React from 'react';
import Card from './Card';

const Finance = () => {
  const posts = [
    { 
      id: 1, 
      title: 'Finance Post 1', 
      text: 'This is finance post 1.', 
      imageUrl: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?cs=srgb&dl=pexels-pixabay-164527.jpg&fm=jpg' 
    },
    { 
      id: 2, 
      title: 'Finance Post 2', 
      text: 'This is finance post 2.', 
      imageUrl: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 3, 
      title: 'Finance Post 3', 
      text: 'This is finance post 3.', 
      imageUrl: 'https://images.unsplash.com/photo-1640160186315-838b53fcabc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 4, 
      title: 'Finance Post 4', 
      text: 'This is finance post 4.', 
      imageUrl: 'https://images.unsplash.com/photo-1642239817413-692565098d33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D' 
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Finance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} text={post.text} imageUrl={post.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Finance;
