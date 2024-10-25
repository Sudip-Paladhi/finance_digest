import React from 'react';
import Card from './Card';

const Technology = () => {
  const posts = [
    { 
      id: 1, 
      title: 'Tech Post 1', 
      text: 'This is tech post 1.', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 2, 
      title: 'Tech Post 2', 
      text: 'This is tech post 2.', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1681426687411-21986b0626a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D' 
    },
    { 
      id: 3, 
      title: 'Tech Post 3', 
      text: 'This is tech post 3.', 
      imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2h8ZW58MHx8MHx8fDA%3D' 
    },
    { 
      id: 4, 
      title: 'Tech Post 4', 
      text: 'This is tech post 4.', 
      imageUrl: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2h8ZW58MHx8MHx8fDA%3D' 
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Technology</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Card key={post.id} title={post.title} text={post.text} imageUrl={post.imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Technology;
