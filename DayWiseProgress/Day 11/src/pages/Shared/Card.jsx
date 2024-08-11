import React from 'react';
import { FaUsers, FaClock, FaStar, FaCheckCircle } from 'react-icons/fa';

const Card = ({ title, content, imageSrc }) => {
  // Generate random data for demonstration purposes
  const capacity = Math.floor(Math.random() * 500) + 100;
  const rating = (Math.random() * 2 + 3).toFixed(1);
  const price = Math.floor(Math.random() * 1000) + 500;
  const isAvailable = Math.random() > 0.3;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaUsers className="text-blue-500 mr-2" />
            <span>Capacity: {capacity}</span>
          </div>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 mr-2" />
            <span>{rating}/5</span>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <FaClock className="text-green-500 mr-2" />
            <span>Available 24/7</span>
          </div>
          <div className="text-lg font-bold text-blue-600">
            ${price}/day
          </div>
        </div>
        <div className="flex justify-between items-center">
          {isAvailable ? (
            <span className="text-green-500 flex items-center">
              <FaCheckCircle className="mr-2" />
              Available Now
            </span>
          ) : (
            <span className="text-red-500">Currently Booked</span>
          )}
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;