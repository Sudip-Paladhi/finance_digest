import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, text, imageUrl }) => (
  <Link to={`/post/${id}`} state={{ post: { title, text, imageUrl } }}>
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  </Link>
);

export default Card;
