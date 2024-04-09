

import React from 'react';

const ReviewCard = ({ review }) => {
    const stars = [];
    for (let i = 0; i < review.no_of_stars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
  
    return (
        <div className="bg-white shadow-md p-4 my-12 rounded-md mb-4 md:w-auto w-64">
            <div className="flex justify-between items-center mb-2">
                <div className="flex">
                    {stars}
                </div>
            </div>
            <div className="text-sm text-gray-500 mb-2">{review.name} ~ {review.review_from}</div>
            <p className="text-gray-600 mb-2">{review.review}</p>
            <p className="text-sm text-gray-500 border-2 rounded-lg px-2 py-1 w-fit">{review.profession}</p>
        </div>
    );
}

export default ReviewCard;

