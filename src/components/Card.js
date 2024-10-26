import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, text, imageUrl }) => {
  return (
    <Link to={`/post/${id}`}>
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-700">{text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
