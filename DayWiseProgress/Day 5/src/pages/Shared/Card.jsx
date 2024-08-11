import React from 'react';

const Card = ({ title, content, imageSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-xs w-full ml-[8vh]">
      {imageSrc && <img src={imageSrc} alt={title} className="rounded-t-lg w-full h-40 object-cover mb-4" />}
      <h2 className="text-xl font-semibold mb-2 color-black">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
