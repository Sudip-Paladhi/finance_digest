import React from 'react';
import { useDispatch } from 'react-redux';
import { setHover } from '../features/hoverSlice';

const Card = ({ title, text, imageUrl }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="bg-white p-4 shadow hover:shadow-lg transition-shadow rounded-lg"
      onMouseEnter={() => dispatch(setHover(title))}
      onMouseLeave={() => dispatch(setHover(null))}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;
