import React from 'react';

const RectangleBoxes = ({ content, isActive, onClick }) => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-4 mx-1 my-1">
      <button
        className={`w-fit h-fit p-3 border-2 rounded-md ${isActive ? 'border-blue-500 bg-sky-200' : 'border-gray-300'}`}
        onClick={onClick}>
        {content}
      </button>
    </div>
  );
};

export default RectangleBoxes;
