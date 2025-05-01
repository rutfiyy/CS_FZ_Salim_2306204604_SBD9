import React from 'react';

function Card({ result }) {
  const { title, body, image } = result;

  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <img
        className="object-cover w-full h-48 rounded-t-lg"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{body}</p>
      </div>
    </div>
  );
}

export default Card;